import { WORDS } from './../../../data';
import { Component, OnInit } from '@angular/core';
import { Word } from 'src/words';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
})
export class WrapperComponent implements OnInit {
  arrayLetter: Word[] = WORDS;
  newArray: string[] = [];
  count: number = 0;
  count2: number = 5;
  count3: number = 0;

  letterList =
    this.arrayLetter[Math.floor(Math.random() * this.arrayLetter.length)];

  listOfWords: string[] = [];

  alphabet: string[] = String.fromCharCode(...Array(123).keys())
    .slice(65, 91)
    .split('');

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.createElement();
  }

  createElement(): void {
    for (const iterator of this.letterList.nome) {
      this.newArray.push(iterator);
    }
  }

  findLetter(letter: any): boolean {
    if (this.letterList.nome.indexOf(letter) === -1) {
      return false;
    } else {
      return true;
    }
  }

  send(letter: any): void {
    const span: any = document.querySelectorAll('.item');

    let indices: any = [];
    let indexOf = this.letterList.nome.indexOf(letter);

    if (this.findLetter(letter)) {
      while (indexOf !== -1) {
        indices.push(indexOf);
        indexOf = this.letterList.nome.indexOf(letter, indexOf + 1);
      }

      for (let i = 0; i < this.letterList.nome.length; i++) {
        span.forEach((item: any, index: number) => {
          if (index === indices[i]) {
            item.textContent = `${letter}`;
            this.count3++;
          }
        });
      }

      if (this.count3 === this.letterList.nome.length) {
        this.winner();
      }
    } else if (this.count <= 4) {
      this.count++;
      this.count2--;
      console.log(this.count);
    }

    this.listOfWords.push(letter);
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

  winner(): void {
    this.router.navigate(['/winner'], {
      state: {
        count: this.count2,
      },
    });
  }
}
