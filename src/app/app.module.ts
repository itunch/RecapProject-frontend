import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ColorsComponent } from './components/colors/colors.component';
import { RentalsComponent } from './components/rentals/rentals.component';
import { CustomersComponent } from './components/customers/customers.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
import { RentaldetailsComponent } from './components/rentaldetails/rentaldetails.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    BrandsComponent,
    ColorsComponent,
    RentalsComponent,
    CustomersComponent,
    NaviComponent,
    RentaldetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
