import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userData: any; // Save logged in user data
  //User info from API
  public moreData: any = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
  }
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private http: HttpClient
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */

    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  private baseUrl: string = "https://collectio.azurewebsites.net/api/";
  public errors$: Subject<any> = new Subject<any>();
  private errorCount!: any;
  public errorMsgFirebase!: string;

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (result.user?.emailVerified === false) {
          throw new Error("Please verify your Email");
        }
        else {
          this.SetUserData(result.user);
          this.afAuth.authState.subscribe((user) => {
            if (user) {
              this.router.navigate(['dashboard']);
            }
          });
        }
      })
      .catch((error) => {
        this.errorMsgFirebase = error.message;
      });
  }

  registerUser(email: string, password: string, firstName: string, lastName: string, username: string) {

    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify({
      "Email": email,
      "Username": username,
      "FirstName": firstName,
      "LastName": lastName,
      "Password": password
    });

    this.http.post(this.baseUrl + "register", body, { 'headers': headers }).subscribe({
      next: () => {
        this.SignUp(email, password);
      },
      error: (error) => {
        this.errors$.next(error.error)
        this.errorCount = error.error.errors;
      },
    });
  }

  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }
  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['dashboard']);
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  getMoreUserInfo() {
    const email = JSON.parse(localStorage.getItem('user')!).email;
    this.http.get(this.baseUrl + "register?keyword=" + email).subscribe((data: any) => {
      this.moreData.username = data.username;
      this.moreData.firstName = data.firstName;
      this.moreData.lastName = data.lastName;
      this.moreData.email = data.email;
    });
  }
  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
      location.reload();
    });
  }
}