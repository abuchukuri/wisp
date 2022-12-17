import { Component, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/common/interfaces/question.i';
import { images } from 'src/app/consts/img.const';
import { questionForms } from 'src/app/consts/question-forms.const';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { IanswerStore } from 'src/app/common/interfaces/answer-store.i';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  initialised = false;
  currentStep = 0;
  quiz: IQuestion[] = [];
  answerStore: IanswerStore[] = [];

  constructor() {}

  ngOnInit(): void {
    this.createAnswerStore(4);
    this.createQuiz(4);
    this.initialised = true;
  }

  createAnswerStore(testsCount: number) {
    for (let i = 0; i < testsCount; i++) {
      this.answerStore.push({ answered: false, showAnswer: false });
    }
  }

  onAnswer(test: number, answer: number) {
    this.answerStore[test] = {
      answered: true,
      chosenAnswer: answer,
      correctAnswer: this.quiz[test].correct,
      answeredCorrectly: this.quiz[test].correct === answer,
    };
    setTimeout(() => this.currentStep++, 2500);
  }

  createQuiz(testsCount: number) {
    for (let i = 0; i < testsCount; i++) {
      const numberToGuess = Math.floor(
        Math.random() * (questionForms.length - 1 + 1)
      );
      const correct = images[numberToGuess];
      const randomAnswers = this.getPics(numberToGuess);
      this.quiz.push({
        question: questionForms[numberToGuess] + numberToGuess,
        answers: randomAnswers,
        correct: randomAnswers.indexOf(correct),
      });
    }
  }

  getPics(correct: number) {
    const array = [];
    for (let i = 0; i < 3; i++) {
      array.push(images[Math.floor(Math.random() * (10 + 1))]);
    }
    array.push(images[correct]);
    return this.mixUpArray(array);
  }

  mixUpArray(array: any[]) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
}
