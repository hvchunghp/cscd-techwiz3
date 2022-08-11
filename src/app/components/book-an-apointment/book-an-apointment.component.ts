import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-an-apointment',
  templateUrl: './book-an-apointment.component.html',
  styleUrls: ['./book-an-apointment.component.scss'],
})
export class BookAnApointmentComponent implements OnInit {
  timeDate = '';
  timeDay = '';
  timeMonth = '';
  timeYear = '';
  phone = '';
  alert() {
    alert('Booking success');
  }
  constructor() {
    let today = new Date();
    let d = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ][new Date().getDay()];
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = String(today.getFullYear()).padStart(2, '0');
    this.timeDay = d;
    this.timeDate = dd;
    this.timeMonth = mm;
    this.timeYear = yyyy;
  }

  ngOnInit(): void {}
}
