import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss'],
})
export class DictionaryComponent implements OnInit {
  dictionary = new FormGroup({
    search: new FormControl(''),
  });
  get search() {
    return this.dictionary.get('search');
  }
  wordsData = [
    'two',
    'one',
    'tree',
    'book',
    'bag',
    'school',
    'girl',
    'boy',
    'toy',
    'fun',
    'bye',
    'love',
    'true',
    'we',
    'I',
    'you',
    'mine',
    'cool',
    'big',
    'tool',
  ];
  constructor() {}

  ngOnInit(): void {}

  rame(rame: any) {
    console.log(rame);
    return true;
  }
}
