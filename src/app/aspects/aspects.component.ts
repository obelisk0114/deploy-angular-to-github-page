import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aspects',
  templateUrl: './aspects.component.html',
  styleUrls: ['./aspects.component.css']
})
export class AspectsComponent implements OnInit {

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOninit');
  }

}
