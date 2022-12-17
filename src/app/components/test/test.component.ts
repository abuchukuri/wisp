import { Component, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/common/interfaces/question.i';
import { images } from 'src/app/consts/img.const';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  imgs = images;
  ar = new Array(4);

  quiz: IQuestion[] = [];

  constructor() {}

  ngOnInit(): void {
    this.createQuiz(4);
    console.log(this.quiz);
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

const questionForms = [
  'what do you think, which one is ',
  'you need to find ',
  'it is so easy to choose ',
];
