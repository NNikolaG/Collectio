import { MessagesService } from './../../services/messages.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.minLength(5)]),
    msg: new FormControl('', [Validators.required])
  }
  );

  constructor(private messagesServices: MessagesService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.messagesServices.sendEmail(this.contactForm.value);
    }
    this.contactForm.reset();
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get msg() { return this.contactForm.get('msg'); }
}
