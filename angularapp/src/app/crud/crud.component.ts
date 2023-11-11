import { Component } from "@angular/core";
 import { Pipe,PipeTransform } from "@angular/core";
 
@Component({
    selector:'app-crud',
    templateUrl:'./crud.component.html'
})
export class CrudComponent
{
    
    // date=new Date();
    n:number=1000000;

    emp:object[]=[
        {empId:6,name:"ankit",loc:"saoner",salary:1000},
        {empId:2,name:"mustafa",loc:"saoner",salary:2000},
        {empId:3,name:"pooja",loc:"saoner",salary:3200}
    ]

    user:object[]=[{}];

}