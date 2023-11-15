import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) {
    console.log(activatedRoute.snapshot.paramMap.get('id'));
   }
  
  ngOnInit() {
  }

  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];


  onSubmit(contactDetails:NgForm) {
    console.log(contactDetails.value);
    console.log(contactDetails.valid);
  }

}

export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}
