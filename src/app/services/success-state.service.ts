import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SuccessStateService {
  banTime = 0;
  emptyLives = new BehaviorSubject<boolean>(false);
  lives = 5;
  testState = new Subject();

  testNumber = new Subject();
  testIndex = new Subject();

  next(event: any) {
    this.testState.next(event);
  }

  reset() {
    this.testState.next(null);
    this.testNumber.next(0);
    this.testIndex.next(0);
  }

  incorrect() {
    this.lives -= 1;
    if (this.lives === 0) {
      this.emptyLives.next(true);
      setTimeout(() => ((this.lives = 5), this.emptyLives.next(false)), 25000);
    }
  }

  constructor() {
    this.testState.subscribe(() =>
      setTimeout(() => this.testState.next(null), 3000)
    );
  }
}
