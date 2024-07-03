import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Appservice } from './app.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PieChartComponent } from './modules/dashboard/pie-chart/pie-chart.component';
// import { ProductsModule } from './modules/products/products.module';
// import { DashboardModule } from './modules/dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    // ProductsModule,
    // DashboardModule
  ],
  providers: [Appservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
