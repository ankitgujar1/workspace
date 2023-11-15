import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private h: ServicesService) { }

  ngOnInit() {
  }

  handleRoute() {
    this.route.navigate(["/form", 23]);
    console.log(this.h.sayHello());
  }

}
