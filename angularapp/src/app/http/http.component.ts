import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { error } from 'console';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  _http:HttpClient=null;
  constructor(http:HttpClient){ 
    this._http=http;
    this._http.get("https://8080-abbcbfeabdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/Employee").subscribe((data)=>{
      console.log(data);
    },(error)=>{
      console.log(error);
    });
  }




  ngOnInit() {
  }
 
}
