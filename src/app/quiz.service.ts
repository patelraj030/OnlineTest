import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from './model.product';

@Injectable({
  providedIn: 'root'  // It is equal to providers : [QuizService]
})
export class QuizService {

  constructor(private httpClient:HttpClient) { } //DI for HttpClient

  loadQuestionDetails():Observable<Quiz[]>{
      return this.httpClient.get<Quiz[]>("http://localhost:3000/Questions");
}

}