import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { PieChartComponent } from '../dashboard/pie-chart/pie-chart.component';
import { ProductsDetaisComponent } from './products-detais/products-detais.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  {path:':id',component:ProductsDetaisComponent}
];

@NgModule({
  declarations: [
    ProductsComponent,
    PieChartComponent,
    ProductsDetaisComponent
  ],
  imports: [CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsModule { }
