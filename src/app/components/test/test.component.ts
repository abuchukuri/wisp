import { Component, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/common/interfaces/question.i';
import { images } from 'src/app/consts/img.const';
import { questionForms } from 'src/app/consts/question-forms.const';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { IanswerStore } from 'src/app/common/interfaces/answer-store.i';
import { SuccessStateService } from 'src/app/services/success-state.service';

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

  constructor(private testState: SuccessStateService) {}

  ngOnInit(): void {
    this.initiate();
  }

  initiate() {
    const quizTestsCount = Math.floor(Math.random() * (10 - 4 + 1) + 4);
    this.createAnswerStore(quizTestsCount);
    this.createQuiz(quizTestsCount);
    this.currentStep = 0;
    this.initialised = true;
  }

  createAnswerStore(testsCount: number) {
    this.answerStore = [];
    this.testState.testNumber.next(testsCount);
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
    this.testState.next(this.quiz[test].correct === answer);
    setTimeout(() => {
      if (this.quiz[test].correct === answer) {
        this.currentStep++;
        this.testState.testIndex.next(this.currentStep);
        this.testState.testState.next(null);
      } else {
        this.testState.reset();
        this.initiate();
      }
      if (this.currentStep === this.quiz.length) {
        setTimeout(() => {
          this.testState.reset();
          this.initiate();
        }, 2000);
      }
    }, 1500);
  }

  createQuiz(testsCount: number) {
    this.quiz = [];
    for (let i = 0; i < testsCount; i++) {
      const numberToGuess = Math.floor(Math.random() * (images.length - 1 + 1));
      const correct = images[numberToGuess];
      const randomAnswers = this.getPics(numberToGuess);
      this.quiz.push({
        question:
          questionForms[
            Math.floor(Math.random() * (questionForms.length - 1 + 1))
          ] + numberToGuess,
        answers: randomAnswers,
        correct: randomAnswers.indexOf(correct),
      });
    }
  }

  getPics(correct: number) {
    const array = [];
    const storedAnswersIndexes: number[] = [];
    for (let i = 0; i < 3; i++) {
      const answerIndexToStore = Math.floor(Math.random() * (10 + 1));
      const alreadyHaveStored =
        storedAnswersIndexes.filter((i) => i === answerIndexToStore).length >
          0 || answerIndexToStore == correct;
      if (alreadyHaveStored) {
        i--;
        continue;
      }
      storedAnswersIndexes.push(answerIndexToStore);
      array.push(images[answerIndexToStore]);
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
