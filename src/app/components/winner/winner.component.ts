import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {
  count: any; 

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.count = history.state.count;
  }

  inicio(): void {
    this.router.navigate(["/home"])
  }
}
