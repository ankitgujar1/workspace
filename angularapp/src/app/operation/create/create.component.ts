import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private http:CrudService,private r:Router) { }

  ngOnInit() {
  }

  onSubmitPost(postForm:NgForm){
    this.http.Create(postForm.value)
    .subscribe(()=>{
      this.r.navigate(['read']);
    })
  }

}
