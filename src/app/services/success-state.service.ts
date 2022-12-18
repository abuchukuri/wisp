import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SuccessStateService {
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
  constructor() {}
}
