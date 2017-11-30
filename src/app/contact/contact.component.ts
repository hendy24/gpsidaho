import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  submitted = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log('Email has been submitted');
  }



}
