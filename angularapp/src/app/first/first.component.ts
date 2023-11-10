import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  arr:string[]=["ankit","mustafa"];
  // colorStyle:string="color:green"
  // twoway:string="g";
  // save(event){
  //   console.log(event.target.value);
  // }



}
