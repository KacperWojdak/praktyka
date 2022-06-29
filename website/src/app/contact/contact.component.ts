import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./app.component.css']
})
export class ContactComponent implements OnInit {
  name!: string;
  email!: string;
  message!: string;
  constructor() { }

  ngOnInit(): void {
  }
  submitForm(){
    const message = `Your name is ${this.name}, your email is ${this.email} and your message is ${this.message}`;
    alert(message);
    alert("You're submitted! 😃");
  }
  }

