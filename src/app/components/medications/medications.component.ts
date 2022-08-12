import { Component, OnInit } from '@angular/core';
import medications from '../../../assets/data/medication.json';
@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.scss']
})
export class MedicationsComponent implements OnInit {
  home = medications;
  constructor() { }

  ngOnInit(): void {
  }

}
