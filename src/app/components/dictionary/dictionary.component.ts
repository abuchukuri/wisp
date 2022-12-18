import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss'],
})
export class DictionaryComponent implements OnInit {
  showImgI: null | number = null;
  dictionary = new FormGroup({
    search: new FormControl(''),
  });
  get search() {
    return this.dictionary.get('search');
  }
  wordsData = [
    { text: 'Happy', src: 'assets/gif/happy.gif' },
    { text: 'Brisk', src: 'assets/gif/brisk.gif' },
    { text: 'Love', src: 'assets/gif/love.gif' },
    { text: 'Otter', src: 'assets/gif/otter.gif' },
    { text: 'Cool', src: 'assets/gif/cool.gif' },
    { text: 'Kind', src: 'assets/gif/kind.gif' },
    { text: 'Every Day', src: 'assets/gif/everyday.gif' },
    { text: 'Bored', src: 'assets/gif/bored.gif' },
    { text: 'Angel', src: 'assets/gif/angel.gif' },
    { text: 'Rain', src: 'assets/gif/rain.gif' },
    { text: 'Cupid', src: 'assets/gif/cupid.gif' },
    { text: 'Inspired', src: 'assets/gif/inspired.gif' },
    { text: 'Ghost', src: 'assets/gif/ghost.gif' },
    { text: 'Sunrise', src: 'assets/gif/sunrise.gif' },
    { text: 'Vacation', src: 'assets/gif/vacation.gif' },
    { text: 'Hail', src: 'assets/gif/hail.gif' },
    { text: 'Dolphin', src: 'assets/gif/dolphin.gif' },
  ];
  constructor() {}

  ngOnInit(): void {}

  game(s: number) {
    console.log(s);
  }

  rame(rame: any) {
    console.log(rame);
    return true;
  }
}
