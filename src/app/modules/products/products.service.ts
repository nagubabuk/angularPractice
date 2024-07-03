import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  name:string=''
  constructor() {
    console.log("called product service")
   }
  logging(name:string){
    this.name=name;
    console.log("name is",name)
  }
  getname(){
    return this.name
  }
}
