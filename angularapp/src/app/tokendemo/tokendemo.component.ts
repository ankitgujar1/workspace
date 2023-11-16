import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-tokendemo',
  templateUrl: './tokendemo.component.html',
  styleUrls: ['./tokendemo.component.css']
})
export class TokendemoComponent implements OnInit {

  // constructor() { }

  ngOnInit() {
  }

  _token:any = ""

    constructor(private http:HttpClient){
        let httpheaders:HttpHeaders = new HttpHeaders({
            Accept:'application/json'
        });
        this.http.post<Idata>("https://8081-abbcbfeabdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/WeatherForecast/auth", 
        {username:'username', password:'password'}, 
        {headers:httpheaders})
        .subscribe(token => 
            {
                {
                  console.log(token);
                  this._token = token
                  console.log(this._token)
                };
            },
            error => {
                console.log(error);
            })
    }

    save()
    {
        let authhttpheaders : HttpHeaders = new HttpHeaders({
            Accept:'application/json',
            Authorization: 'Bearer ${this._token}' 
        })
        this.http.put("https://8081-abbcbfeabdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/WeatherForecast/auth", {}, {headers:authhttpheaders});
    }




}
interface Idata {
  user:string
  password:string
}
