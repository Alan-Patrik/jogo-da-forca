import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-words-used',
  templateUrl: './words-used.component.html',
  styleUrls: ['./words-used.component.css']
})
export class WordsUsedComponent implements OnInit {
  @Input() letter: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
