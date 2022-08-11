import { Component, OnInit } from '@angular/core';
import question from '../../../assets/data/question.json';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  constructor() { }
  ques = question;
  ngOnInit(): void {
  }

}
