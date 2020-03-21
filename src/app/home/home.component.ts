import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dates = ["Jan 2020", "Feb 2020", "Mar 2020"];
  today: number = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
