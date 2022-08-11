import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BMIComponent implements OnInit {
  info={
    cannang:0,cn:false,
    chieucao:0,cc:false
  }
  bmi='';

  kqBMI?:number;
  constructor() { }
  ketqua(){
    this.kqBMI=this.info.cannang/((this.info.chieucao/100)*2);
    this.info.cn=this.info.cannang==0?true:false;
    this.info.cc=this.info.chieucao==0?true:false;
    console.log(this.kqBMI)
    if(this.kqBMI<18.5){
      this.bmi='UnderWeight';
    }else if(this.kqBMI >18.5 && this.kqBMI < 24.9){
      this.bmi='Nomal';
    }else if(this.kqBMI > 25 && this.kqBMI < 29.9){
      this.bmi='OverWeight';
    }else if(this.kqBMI > 30 && this.kqBMI < 34.9){
      this.bmi='Opese';
    }else if(this.kqBMI > 35 ){
      this.bmi='Extremly Opese';    }
  }

  ngOnInit(): void {
  }

}


