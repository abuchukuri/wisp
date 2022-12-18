import { Component, OnInit } from '@angular/core';
import { images, imagesLat } from 'src/app/consts/img.const';
import {
  questionForms,
  questionFormsLat,
} from 'src/app/consts/question-forms.const';
import { SuccessStateService } from 'src/app/services/success-state.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
})
export class DashComponent implements OnInit {
  loading = true;
  failed = false;
  IsGeo = true;
  images = <any>images;
  questionForms = <any>questionForms;
  imagesLat = <any>imagesLat;
  questionFormsLat = <any>questionFormsLat;
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
