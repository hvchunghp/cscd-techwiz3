import { Component, OnInit } from '@angular/core';
// import 'animate.css';
@Component({
  selector: 'app-pop-up-chat',
  templateUrl: './pop-up-chat.component.html',
  styleUrls: ['./pop-up-chat.component.scss']
})
export class PopUpChatComponent implements OnInit {

  openForm1:string='none';
  constructor() { }
  openForm() {
    this.openForm1=this.openForm1=='none'?'block':'none';
  }
  
   closeForm() {
    this.openForm1='none';
  }
  ngOnInit(): void {
  }

}
