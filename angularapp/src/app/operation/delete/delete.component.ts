import { Component, OnInit } from '@angular/core';
import { CrudService, IEmp } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

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

  onSubmitDelete(deleteForm:NgForm){
    this.http.Delete(this.list.id)
    .subscribe(()=>{
      this.r.navigate(['read']);
    })
  }

}
