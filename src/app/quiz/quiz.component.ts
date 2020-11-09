import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Quiz } from '../model.product';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  score:number = 0;
  mode:string='quiz';

  quizInfo:Quiz[];

  constructor(private quizService:QuizService) { }  // DI for QuizService so we dont have to create object

  ngOnInit(): void {
  }

  loadQuiz() : void{
    this.quizService.loadQuestionDetails().subscribe(data=>{
      data.forEach(q=>{
        this.questionRef.addControl(String(q.id),new FormControl(null, [Validators.required]));
      })
      this.quizInfo=data});
      this.mode='quiz';
  }


  questionRef = new FormGroup(
    {
      // ans: new FormControl(),
    }
  )

  checkAns()
  {
    this.score = 0;
    for (const i in this.questionRef.value) {
      if(parseInt(this.questionRef.value[i]) === this.quizInfo[parseInt(i)-1].correctIndex) {
        this.score++;
      }
    }
    this.mode='result';
  }
}
