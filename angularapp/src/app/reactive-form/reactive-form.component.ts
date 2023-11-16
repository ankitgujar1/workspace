import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormArray,FormControl,FormGroup,Validator } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form1=new FormGroup({
    email:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required]),
    check:new FormControl("",[Validators.required])
  });

  display(){
    console.log(this.form1.value);
  }

}
