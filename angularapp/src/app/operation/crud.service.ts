import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  Create(data:any):Observable<IEmp>{
    let httpHeader:HttpHeaders=new HttpHeaders({
      Accept:"application/json"
    })

    return this.http.
  }
}

export interface IEmp{
  id: number;
  name: string;
  salary: number;
  joinDate: string;
}
