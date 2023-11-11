import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent  {

  constructor() { }

  ngOnInit() {
  }
  indiData:object={email:" ",password:" ",isReady:false};
  userData:object[]=[{email:" ",password:" ",isReady:false}];

  dataHandler(event){
      let ids:string  = event.target.id;
      let data:any = event.target.value;

  switch (ids)                                      
  {
    case "emId":
      this.indiData={...this.indiData,email:data};
      break;
    case "psId":
      this.indiData={...this.indiData,password:data};
      break;
    case "chId":
      let chkVal = event.target.checked
      this.indiData={...this.indiData,isReady: chkVal};
      break;
    case "btn1":

      // console.log(this.indiData);
       this.userData.push(this.indiData);
      // // this.userData.push(this.userData);
      // console.log(this.userData);
      // console.log("aaaa");
      break;

      case "upbtn":
        // let value = this.userData.find(x=>x.email == this.indiData.email)  
        //         console.log(value);

        
      break;
    default:
      break;
   
  }
  console.log(event.target.id);
  }

}
