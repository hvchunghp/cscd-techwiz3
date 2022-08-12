import { Component, OnInit } from '@angular/core';
import nerveData from "../../../assets/data/nerve.json";

@Component({
  selector: 'app-nerve',
  templateUrl: './nerve.component.html',
  styleUrls: ['./nerve.component.scss']
})
export class NerveComponent implements OnInit {
  displayMode = "all";

  data = nerveData;

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
