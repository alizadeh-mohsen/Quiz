import { Question } from './model/question.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api = 'http://localhost:57916/api/questions';
  constructor(private httpClient: HttpClient) { }

  public postQuestion(question: Question) {
    console.log(question);
    this.httpClient.post(this.api, question)
      .subscribe(res => console.log(res));
  }
}
