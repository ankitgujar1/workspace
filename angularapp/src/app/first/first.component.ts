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

  names:object[]=[
    {fname:"raghav",lname:"singh",age:2},
    {fname:"raghav",lname:"singh",age:2},
    {fname:"raghav",lname:"singh",age:2},
    {fname:"raghav",lname:"singh",age:2},
]

  // employees:object[]=
  // colorStyle:string="color:green"
  // twoway:string="g";
  // save(event){
  //   console.log(event.target.value);
  // }


  nme:string="deepa";
     values:string =' ';

     isValid:boolean = true;

     onKey(event){
      console.log(event.target.value);
      this.values = event.target.value;
     }
     
     days:string[] =["Mon","Tue","Wed","Thu","Fri","Sat","Sun"] 
     dropValue:string= "";

     SetDropValue(event){
      this.dropValue = event.target.value;
     }
     students:object[] = [
      {name:'Deepak',gender:'male'},
      {name:'Deepa',gender:'female'},
      {name:'Ashok',gender:'male'},
      {name:'Anshu',gender:'female'},
   
      ]

     save(event:any){
      console.log(event);
       this.values = event.target.value;
     }



}
