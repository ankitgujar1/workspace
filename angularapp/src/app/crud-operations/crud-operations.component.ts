import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendService } from '../backend.service';
import { IEmployee } from '../backend.service'

@Component({
  selector: 'app-crud-operations',
  templateUrl: './crud-operations.component.html',
  styleUrls: ['./crud-operations.component.css']
})
export class CrudOperationsComponent implements OnInit {
  listData: IEmployee[] = []

  listDataById:any;

  constructor(private http: BackendService) {
    http.GetData().subscribe(success => {
      this.listData = success;
    })

  }

  ngOnInit() {
  }


  onSubmitPost(postForm: NgForm) {

    this.http.SaveData(postForm.value);
  }

  onSubmitPut(putForm: NgForm) {
    // console.log(putForm.value)
    this.http.UpdateData(putForm.value.id, putForm.value);
  }

  onSubmitDelete(deleteForm: NgForm) {
    this.http.DeleteData(deleteForm.value.id);
  }

  onSubmitgetById(getByIdForm:NgForm){
    // console
    // this.http.GetDataById(getByIdForm.value.id);
    // console.log(this.listDataById)

    this.http.GetDataById(getByIdForm.value.id).subscribe(success => {
      this.listData = success;
    })
  }

  

}
