import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import prescription from './prescription.json'
import CityVN from './CityVN.json'

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
export class PrescriptionComponent implements OnInit {
// located
cityVN=CityVN.cityvn;
city:any[]=[];
district:any[]=[];
wards?:any[];
medicalfacility=prescription.medical_facility;
// table


// medicine
medicineName=[
  {name:"ten thuoc 1"},
  {name:"ten thuoc 2"},
  {name:"ten thuoc 3"},
  {name:"ten thuoc 4"},
  {name:"ten thuoc 5"},
];
medicineName1='';
show:boolean=false;
table:any;
checkbox!:boolean;
doituong="Người Lớn";

  constructor() {
      this.city=this.cityVN;
      this.district=this.city[0].districts;
      this.wards=this.district[0].wards
  }
  //
    public changeCity(vl:any){
      this.district=this.city[vl.value].districts;
      this.wards=this.district[0].wards;
      console.log(this.district)
      console.log(this.wards)
    }
    public changedistrict(vl:any){
      this.wards=this.district[vl.value].wards
    }
  //
  mdcName(){
    this.show=this.show==true?false:true;
  }
  mdcNamePick(name:string){
    this.medicineName1=name;
    this.show=false;
  }
  checkk(value:any){
    this.doituong=value==false?"Trẻ Nhỏ":"Người Lớn";
    this.checkbox=value;

  }
  submitMDC(){
   let s= alert("hello")

  }



  public submit(){
    alert("hello")
  }
  ngOnInit(): void {
  }

}
