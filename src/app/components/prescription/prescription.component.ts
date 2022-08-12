import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import prescription from './prescription.json'
import CityVN from './CityVN.json'
import dataForAll from '../../../assets/data/dataForAll.json'


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
  medical_name:any[]=prescription.medical_name;


  // table
  doctorDt=dataForAll.doctor;
  doctorIMG=dataForAll.doctor[0].image;
  ddtt=dataForAll.doctor[0].title;
  ddDesc=dataForAll.doctor[0].desc[0].content;

  medicineName=[
    {name:"medicine 1"},
    {name:"medicine 2"},
    {name:"medicine 3"},
    {name:"medicine 4"},
    {name:"medicine 5"},

  ];
  medicineName1='';
  show:boolean=false;
  table:any;
  checkbox!:boolean;
  doituong="Người Lớn";

  forminput={
    fullname:'',
    Specificaddress:'',
    dateFrom:'',
    dateTo:'',
  }


  constructor() {
      this.city=this.cityVN;
      this.district=this.city[0].districts;
      this.wards=this.district[0].wards;
      console.log(this.medicalfacility)

  }
  //

  public submit(){
      this.forminput.fullname
      this.forminput.Specificaddress
      this.forminput.dateFrom
      this.forminput.dateTo


    console.log(this.forminput.fullname
      +this.forminput.Specificaddress+
      this.forminput.dateFrom+
      this.forminput.dateTo)
  }
  changeDT(vl:any){
    this.doctorIMG=this.doctorDt[vl.value].image;
    this.ddtt=this.doctorDt[vl.value].title;
    this.ddDesc=this.doctorDt[vl.value].desc[0].content;
  }
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


  ngOnInit(): void {
  }

}
