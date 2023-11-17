import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { error } from 'console';



@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }

  SaveData(data:any){ //post
    let responseData:any="";
    let httpHeaders:HttpHeaders=new HttpHeaders({
      Accept:"application/json"
    })

    this.http.post("https://8081-abbcbfeabdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/Employee",data,{headers:httpHeaders})
    .subscribe(res=>{
      responseData=res;

    },
    error=>{
      responseData=error;
    })
    return responseData;
  }

  UpdateData(id:number,data:any){ //put
    let responseData:any="";
    let httpHeaders:HttpHeaders=new HttpHeaders({
      Accept:"application/json"
    })
    this.http.put("https://8081-abbcbfeabdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/Employee/"+id,data,{headers:httpHeaders})
    .subscribe(res=>{
      responseData=res;

    },
    error=>{
      responseData=error;
    })
    return responseData;
  }

  DeleteData(id:number){ //delete
    let responseData:any="";
    let httpHeaders:HttpHeaders=new HttpHeaders({
      Accept:"application/json"
    })
    this.http.delete("https://8081-abbcbfeabdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/Employee/"+id,{headers:httpHeaders})
    .subscribe(res=>{
      responseData=res;

    },
    error=>{
      responseData=error;
    })
    return responseData;
  }

  
  GetData() : Observable<IEmployee[]>{
    let responceData:any="";
    let httpHeaders:HttpHeaders = new HttpHeaders({
      Accept:'application/json'
    })
     return this.http.get<IEmployee[]>("https://8081-abbcbfeabdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/Employee",{headers:httpHeaders})
   
  }

  GetDataById(id:number){ //retrive by id
    
  }
}

export interface IEmployee{
  id:number;
  name:string;
  salary:number;
  joinDate:string;
}
