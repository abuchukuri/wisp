import { Component, Input, OnInit } from '@angular/core';
import { SuccessStateService } from 'src/app/services/success-state.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
})
export class ProgressbarComponent implements OnInit {
  @Input() steps: number = 5;
  @Input() stepIndex: number = 3;
  constructor(public testState: SuccessStateService) {}

  ngOnInit(): void {}
}
