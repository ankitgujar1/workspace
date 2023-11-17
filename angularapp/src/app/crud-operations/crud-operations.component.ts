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


  onSubmitPost(postForm:NgForm){
    // console.log(postForm.value)
    this.http.SaveData(postForm.value);
  }

  onSubmitPut(putForm:NgForm){
    this.http.UpdateData(putForm.)
  }



}
