import { ThrowStmt } from "@angular/compiler";
import { Component } from "@angular/core";
import { timeStamp } from "console";
 
@Component({
    selector:'app-crud',
    templateUrl:'./crud.component.html'
})
export class CrudComponent
{
  indiData:object = {email:" ",password:" ",isReady:false};
  email:string = " "
  password:string = ""
  isReady:boolean = false;

  userData:object[]=[{}];

  

  dataHandler(event){
 let id = event.target.id;

 if(id == "btn1"){
     console.log(this.email);
     console.log(this.password);
     console.log(this.isReady);
     this.userData.push({email:this.email,password:this.password,isReady:this.isReady})
     console.log(this.userData)
 }
 else if(id=="upbtn"){

  


 }
 else if(id=="emId"){
    if(this.userData.length > 1){
     let data= this.userData.find(x=>x.email == this.email);
     this.password = data.password;
     this.isReady= data.isReady;
    }
}

}
} 