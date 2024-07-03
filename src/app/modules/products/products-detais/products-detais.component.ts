import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-detais',
  templateUrl: './products-detais.component.html',
  styleUrls: ['./products-detais.component.css']
})
export class ProductsDetaisComponent implements OnInit {

  constructor(private productServ:ProductsService) { }

  ngOnInit(): void {
    console.log(this.productServ.getname())
  }

}
