import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudComponent } from 'src/app/crud/crud.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private http:CrudComponent,private ar:ActivatedRoute) { }

  ngOnInit() {
  }

}
