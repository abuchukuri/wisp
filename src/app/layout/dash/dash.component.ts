import { Component, OnInit } from '@angular/core';
import { SuccessStateService } from 'src/app/services/success-state.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
})
export class DashComponent implements OnInit {
  loading = true;
  failed = false;
  constructor(public testState: SuccessStateService) {}

  ngOnInit(): void {
    this.testState.testState.subscribe((e) => {
      if (!e && e !== null) {
        setTimeout(() => {
          this.failed = true;
        }, 1500);
      }
    });
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }
}
