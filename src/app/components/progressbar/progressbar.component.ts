import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
})
export class ProgressbarComponent implements OnInit {
  @Input() steps: number = 5;
  @Input() stepIndex: number = 3;
  constructor() {}

  ngOnInit(): void {}
}
