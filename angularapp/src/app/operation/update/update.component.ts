import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudComponent } from 'src/app/crud/crud.component';
import { CrudService, IEmp } from '../crud.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  list:IEmp;
  id:number;

  constructor(private http:CrudService,private ar:ActivatedRoute,private r:Router) { }

  ngOnInit() {
    const tid=this.ar.snapshot.paramMap.get('id');
    this.id=Number(tid);
    this.http.ReadById(this.id)
    .subscribe(res=>{
      this.list=res;
      console.log(this.list)
    })
  }


  onSubmitUpdate(updateForm:NgForm){
    this.list=updateForm.value;
    
  }

}
