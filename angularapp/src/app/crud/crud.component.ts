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
        {empId:1,name:"ankit",loc:"saoner",salary:1000},
        {empId:1,name:"mustafa",loc:"saoner",salary:2000},
        {empId:1,name:"pooja",loc:"saoner",salary:32}
    ]

}