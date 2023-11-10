import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Ankit';
  n="Hello World"
  n1:number=10;
  n2:number=10;
  n3:number=this.n1+this.n2;

  
}
