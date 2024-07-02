import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Appservice } from '../app.service';
import { User } from '../interfaces/object.interface';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() productList:any=[];
  @Input() ishow:boolean=false;
  @Output() notifyParent:EventEmitter<User>=new EventEmitter()
  title = 'my-app';
  products: any[] = [];
 

  constructor(private appService:Appservice) { 
    console.log("jka")
  }

  ngOnInit() {
    // this.products = this.appService.getProducts();
  }

  GotoCart(data:User){
    // let data = { name: "Dhulluu", email: "test@123" }
    this.notifyParent.emit(data)
  }
}
