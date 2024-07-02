import { Component } from '@angular/core';
import { User } from './interfaces/object.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicApp';
  title2='';
 title3=""
  submit(){
    this.title3="basic3App";
    alert("helo")
    // this.changeText('hello')
  }

  products = [
    { id: 1, name: 'Product A' ,email:"test@123"},
    { id: 2, name: 'Product B', email: "test@1234" },
    { id: 3, name: 'Product C', email: "test@1235" }
  ];

  changeText(event:any){
    console.log(event)
    this.title2=event.target.value;
  }
  checkout(data:User){
    console.log("data is",data)
  }
}
