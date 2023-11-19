import { Component, OnInit } from '@angular/core';
import { CrudService, IEmp } from '../crud.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  list:IEmp[]=[]

  constructor(private http:CrudService) { 
    http.Read()
    .subscribe(s=>{
      this.list=s;
    })
  }

  ngOnInit() {
  }

}
