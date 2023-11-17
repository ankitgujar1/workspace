import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-crud-operations',
  templateUrl: './crud-operations.component.html',
  styleUrls: ['./crud-operations.component.css']
})
export class CrudOperationsComponent implements OnInit {

  constructor(private http:BackendService) { }

  ngOnInit() {
  }

  name:string;
  salary:number;
  joinDate:string;

  onSubmit(contactForm:NgForm){
    this.name=contactForm.value.name;
    this.name=contactForm.value.salary;
    this.joinDate=contactForm.value.joinDate
  }





}
