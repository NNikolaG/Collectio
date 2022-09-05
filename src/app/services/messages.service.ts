import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  sendEmail(formData: any): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post('https://formspree.io/f/mbjbllkj',
      { name: formData.name, replyto: formData.email, message: formData.msg },
      { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );
  }
}
