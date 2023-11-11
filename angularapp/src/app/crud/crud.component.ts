import { Component } from "@angular/core";
 import { Pipe,PipeTransform } from "@angular/core";
 
@Component({
    selector:'app-crud',
    templateUrl:'./crud.component.html'
})
export class CrudComponent implements PipeTransform
{
    
    // date=new Date();
    // n:number=1000000;

    transform(value: any, ...args: any[]) {
        
    }
}