import { Component } from "@angular/core";
 
 
@Component({
    selector:'app-crud',
    templateUrl:'./crud.component.html'
})
export class CrudComponent
{
    date=new Date();
    n:number=1000000;
}