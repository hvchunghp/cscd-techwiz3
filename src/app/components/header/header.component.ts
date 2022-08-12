import { Component, OnInit } from '@angular/core';
import dataForAll from '../../../assets/data/dataForAll.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  header = dataForAll;

  constructor() {}

  ngOnInit(): void {}
}
