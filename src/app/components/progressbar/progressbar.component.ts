import { Component, Input, OnInit } from '@angular/core';
import { SuccessStateService } from 'src/app/services/success-state.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
})
export class ProgressbarComponent implements OnInit {
  @Input() steps: any = 0;
  @Input() stepIndex: any = 0;
  constructor(public testState: SuccessStateService) {
    testState.testNumber.subscribe(
      (e) => (console.log('aq', e), (this.steps = e))
    );
    testState.testIndex.subscribe(
      (e) => (console.log('aq', e), (this.stepIndex = e))
    );
  }

  ngOnInit(): void {}
}
