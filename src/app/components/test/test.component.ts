import { Component, OnInit } from '@angular/core';
import { images } from 'src/app/consts/img.const';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  imgs = images;

  constructor() {}

  ngOnInit(): void {}
}
