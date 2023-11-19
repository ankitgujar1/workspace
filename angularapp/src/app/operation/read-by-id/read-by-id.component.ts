import { Component, OnInit } from '@angular/core';
import { CrudService, IEmp } from '../crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-by-id',
  templateUrl: './read-by-id.component.html',
  styleUrls: ['./read-by-id.component.css']
})
export class ReadByIdComponent implements OnInit {

  constructor(private http:CrudService,private ar:ActivatedRoute) { }

  list:IEmp;
  id:number;

  ngOnInit() {
    const tid=this.ar.snapshot.paramMap.get('id');
    this.id=Number(tid);
    this.http.ReadById(this.id)
    .subscribe(res=>{
      this.list=res;
    })
  }

}


// constructor(private ms:MovieserviceService,private ar:ActivatedRoute) { }
//   moviedata:Imovie
//   id:number
//   ngOnInit() {
//     const tid=this.ar.snapshot.paramMap.get('id')
//     this.id=Number(tid)
//     this.ms.getMovie(this.id).subscribe((data: Imovie)=>{
//       this.moviedata=data
//       console.log(this.moviedata);
//     })
//   }
