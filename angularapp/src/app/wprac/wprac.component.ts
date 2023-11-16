import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wprac',
  templateUrl: './wprac.component.html',
  styleUrls: ['./wprac.component.css']
})
export class WpracComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  n:number=10;
  m:number=10;
  x:number=this.n+this.m;

}
