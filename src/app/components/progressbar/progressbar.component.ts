import { Component, Input, OnInit } from '@angular/core';
import { SuccessStateService } from 'src/app/services/success-state.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
})
export class ProgressbarComponent implements OnInit {
  steps: any = 0;
  stepIndex: any = 0;

  get lives() {
    return this.testState.lives;
  }

  constructor(public testState: SuccessStateService) {
    testState.testNumber.subscribe((e) => (this.steps = e));
    testState.testIndex.subscribe((e) => (this.stepIndex = e));
  }

  ngOnInit(): void {}
}
