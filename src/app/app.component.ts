import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  sString:string='';
  onInput(value:string){
      this.sString=value;
     console.log(this.sString);     
  }
}
