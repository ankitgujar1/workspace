import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
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
    // let responseData:any="";
    // let httpHeaders:HttpHeaders=new HttpHeaders({
    //   Accept:"application/json"
    // })
    // this.http.put("",data,{})
  }

  DeleteData(id:number){ //delete
    
  }

  GetData(){ //retrive all
    
  }

  GetDataById(id:number){ //retrive by id
    
  }
}
