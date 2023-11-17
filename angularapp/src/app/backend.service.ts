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

  constructor(private http: HttpClient) { }

  SaveData(data: any) { //post
    let responseData: any = "";
    let httpHeaders: HttpHeaders = new HttpHeaders({
      Accept: "application/json"
    })

    this.http.post("https://8081-abbcbfeabdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/Employee", data, { headers: httpHeaders })
      .subscribe(res => {
        responseData = res;

      },
        error => {
          responseData = error;
        })
    return responseData;
  }

  // save(data:any){
  //   let r:any="";
  //   let httpHeaders:HttpHeaders=new HttpHeaders({
  //     Accept:"application/json"
  //   })

  //   this.http.post("",data,{headers:httpHeaders})
  //   .subscribe(res=>{
  //     r=res;
  //   },
  //   err=>{
  //     r=err;
  //   })
  //   return r;
  // }

  UpdateData(id: number, data: any) { //put
    let responseData: any = "";
    let httpHeaders: HttpHeaders = new HttpHeaders({
      Accept: "application/json"
    })
    this.http.put("https://8081-abbcbfeabdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/Employee/" + id, data, { headers: httpHeaders })
      .subscribe(res => {
        responseData = res;

      },
        error => {
          responseData = error;
        }
      )
    return responseData;
  }

  // update(id: number, data: any) {
  //   let r: any = "";
  //   let httpHeaders: HttpHeaders = new HttpHeaders({
  //     Accept: "application/json"
  //   })

  //   this.http.put("url" + id, data, { headers: httpHeaders })
  //     .subscribe(res => {
  //       r = res;
  //     },
  //       e => {
  //         r = e;
  //       })
  //   return r;
  // }

  DeleteData(id: number) { //delete
    let responseData: any = "";
    let httpHeaders: HttpHeaders = new HttpHeaders({
      Accept: "application/json"
    })
    this.http.delete("https://8081-abbcbfeabdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/Employee/" + id, { headers: httpHeaders })
      .subscribe(res => {
        responseData = res;

      },
        error => {
          responseData = error;
      })
    return responseData;
  }

  // delete(id: number) {
  //   let r: any = "";
  //   let h: HttpHeaders = new HttpHeaders({
  //     Accept: "application/json"
  //   })

  //   this.http.delete("url" + id, { headers: h })
  //     .subscribe(res => {
  //       r = res;
  //     },
  //       e => {
  //         r = e;
  //     })
  //     return r;
  // }

  GetData(): Observable<IEmployee[]> {
    let responceData: any = "";
    let httpHeaders: HttpHeaders = new HttpHeaders({
      Accept: 'application/json'
    })
    return this.http.get<IEmployee[]>("https://8081-abbcbfeabdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/Employee", { headers: httpHeaders })

  }

  // get():Observable<IEmployee[]>{
  //   let httpHeaders:HttpHeaders=new HttpHeaders({
  //     Accept:"application/json"
  //   })

  //   return this.http.get<IEmployee[]>("url",{headers:httpHeaders});

  // }

  GetDataById(id: number): Observable<IEmployee[]> { //retrive by id https://8081-abbcbfeabdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/Employee/8
    let responceData: any = "";
    let httpHeaders: HttpHeaders = new HttpHeaders({
      Accept: 'application/json'
    })
    return this.http.get<IEmployee[]>("https://8081-abbcbfeabdfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/Employee/" + id, { headers: httpHeaders });
  }

  // getbyid(id:number):Observable<IEmployee[]>{
  //   let httpHeaders:HttpHeaders=new HttpHeaders({
  //     Accept:"application/json"
  //   })

  //   return this.http.get<IEmployee[]>("url"+id,{headers:httpHeaders});
  // }

  


  

















}

export interface IEmployee {
  id: number;
  name: string;
  salary: number;
  joinDate: string;
}
