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

    return this.http.post<IEmp>("https://8081-abbcbfeabdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/Employee",data,{headers:httpHeader});
  }

  Read():Observable<IEmp[]>{
    let httpHeader:HttpHeaders=new HttpHeaders({
      Accept:"application/json"
    })

    return this.http.get<IEmp[]>("https://8081-abbcbfeabdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/Employee",{headers:httpHeader});
  }

  ReadById(id:number):Observable<IEmp>{
    let httpHeader:HttpHeaders=new HttpHeaders({
      Accept:"application/json"
    })

    return this.http.get<IEmp>("https://8081-abbcbfeabdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/Employee/"+id,{headers:httpHeader});
  }

  Update(id:number,data:any):Observable<IEmp>{
    let httpHeader:HttpHeaders=new HttpHeaders({
      Accept:"application/json"
    })

    return this.http.put<IEmp>("https://8081-abbcbfeabdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/Employee/"+id,data,{headers:httpHeader});
  }

  Delete(id:number):Observable<IEmp>{
    let httpHeader:HttpHeaders=new HttpHeaders({
      Accept:"application/json"
    })

    return this.http.delete<IEmp>("https://8081-abbcbfeabdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/Employee/"+id,{headers:httpHeader});
  }

}

export interface IEmp{
  id: number;
  name: string;
  salary: number;
  joinDate: string;
}
