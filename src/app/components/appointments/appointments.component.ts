import { Component, OnInit } from '@angular/core';
import appointment from '../../../assets/data/appointment.json';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit {
  timeDay = '';
  timeNextDay = '';
  timeAfterNextDay = '';
  timeMonth = '';
  arr = appointment.array[0];

  docInfo = appointment;

  change(value: any) {
    this.arr = appointment.array[value.value];
  }

  constructor() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var nextdd = String(today.getDate() + 1).padStart(2, '0');
    var afterNextdd = String(today.getDate() + 2).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    this.timeDay = dd;
    this.timeMonth = mm;
    this.timeNextDay = nextdd;
    this.timeAfterNextDay = afterNextdd;
  }

  ngOnInit(): void {}
}
