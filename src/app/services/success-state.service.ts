import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SuccessStateService {
  testState = new Subject();

  next(event: any) {
    this.testState.next(event);
  }

  reset() {
    this.testState.next(null);
  }
  constructor() {}
}
