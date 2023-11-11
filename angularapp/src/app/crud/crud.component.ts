import { Component } from "@angular/core";
 
 
@Component({
    selector:'app-crud',
    templateUrl:'./crud.component.html'
})
export class CrudComponent
{
    indiData:object = {email:" ",password:" ",isReady:false};
    userData:object[]=[{email:" ",password:" ",isReady:false}];
 
    dataHandler(event){
       let ids:string = event.target.id;
       let data:any = event.target.value;
       
        switch (ids) {
            case "emId":
             this.indiData = {...this.indiData,email:data};
             if(this.userData.length != 0){
             let value =this.userData.find(x=>x.email == this.indiData.email);
 
           
             }
                break;
                case "psId":
                    this.indiData={...this.indiData,password: data}
                break;
                case "chId":
                   let chkVal = event.target.checked;
                    this.indiData={...this.indiData,isReady: chkVal}
                break;
               
                case "btn1":
                 
                 this.userData.push(this.indiData);
               
                break;
                case "upbtn":
                 
                // this.userData.forEach((value,indx,arr)=>{
                //   if(value.email == this.indiData.email){
                   
                //   }
                // });
                this.userData.forEach((value,indx,arr)=>{
                    if(value.email==this.indiData.email){
                        console.log("same");
                    }
                })
                 //console.log(value);
                 this.userData.push(this.indiData);
               
                break;
       
            default:
                break;
        }
        console.log(event.target.id);
  }
}