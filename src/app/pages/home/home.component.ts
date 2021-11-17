import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private location: Router) { }

  ngOnInit(): void {
  }

  jogar(): void {
    this.location.navigate(["/game"]);
  }

}
