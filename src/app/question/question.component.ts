import { ApiService } from './../api.service';
import { Question } from './../model/question.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  text: string;
  correctAnswer: string;
  wrongAnswer1: string;
  wrongAnswer2: string;
  wrongAnswer3: string;

  constructor(private apiService: ApiService) { }
  ngOnInit() { }

  post() {
    let question = new Question();

    // question.id = Math.round(Math.random() * 100);
    question.text = this.text;
    question.correctAnswer = this.correctAnswer;
    question.wrongAnswer1 = this.wrongAnswer1;
    question.wrongAnswer2 = this.wrongAnswer2;
    question.wrongAnswer3 = this.wrongAnswer3;
    this.apiService.postQuestion(question);
  }
}
