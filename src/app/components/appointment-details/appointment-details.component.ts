import { Component, OnInit } from '@angular/core';
import appointmentDetails from "../../../assets/data/appointment-details.json"

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss']
})
export class AppointmentDetailsComponent implements OnInit {
  displayMode = "upcoming";
  data = appointmentDetails;
  alertFeedback() {
    alert("Your feedback has been sent");
  };
  alertCancel() {
    alert("Your have cancelled the appointment")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
