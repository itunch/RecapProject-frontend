import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from '../../models/carResponseModel';
import { CarService } from '../../services/car.service';
import { CarDetail } from '../../models/carDetail';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];
  carDetails: CarDetail[] = [];
  dataLoaded = false;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
    this.getCarDetails();
  }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true
    });
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe(response => {
      this.carDetails = response.data
      this.dataLoaded = true;
    })
  }

}
