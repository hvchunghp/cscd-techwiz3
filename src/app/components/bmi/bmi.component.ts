import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss'],
})
export class BMIComponent implements OnInit {
  cann!: number;
  chieuc!: number;
  info = {
    cannang: 0,
    cn: false,
    chieucao: 0,
    cc: false,
  };
  textColor = '';
  bmi = '';

  kqBMI!: number;
  constructor() {}
  ketqua() {
    this.kqBMI = this.cann / ((this.chieuc / 100) * 2);
    console.log(this.kqBMI + ' ' + this.cann + ' ' + this.chieuc);
    this.info.cn = this.cann == undefined ? true : false;
    this.info.cc = this.chieuc == undefined ? true : false;
    if (this.kqBMI < 18.5) {
      this.bmi =
        ', you need to work hard to eat enough nutrients and live in moderation';
      this.textColor = '#93B4D7';
    } else if (this.kqBMI > 18.5 && this.kqBMI < 24.9) {
      this.bmi =
        'Nomal, please continue to maintain your current diet and activities';
      this.textColor = '#8FC59F';
    } else if (this.kqBMI >= 25 && this.kqBMI < 29.9) {
      this.bmi = 'OverWeight, you should adjust your diet and exercise hard';
      this.textColor = '#FAD548';
    } else if (this.kqBMI >= 30 && this.kqBMI < 34.9) {
      this.bmi =
        'Opese, you need consuming fewer calories, eating healthily, exercising more, and watching your weight can help reduce body weight.';
      this.textColor = '#E7985F';
    } else if (this.kqBMI >= 35) {
      this.bmi =
        'Extremely Obese, you need consuming fewer calories, eating healthily, exercising more, and watching your weight can help reduce body weight.';
      this.textColor = '#D55C5B';
    }
  }

  ngOnInit(): void {}
}
