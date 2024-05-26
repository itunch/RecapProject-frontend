import { Component, OnInit } from '@angular/core';
import { RentalDetail } from '../../models/rentalDetail';
import { RentalService } from '../../services/rental.service';

@Component({
  selector: 'app-rentaldetails',
  templateUrl: './rentaldetails.component.html',
  styleUrl: './rentaldetails.component.css'
})
export class RentaldetailsComponent implements OnInit {
  rentals: RentalDetail[] = [];
  dataLoaded = false;
  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
    this.getRentallDto();
  }

  getRentallDto() {
    this.rentalService.getRentallDto().subscribe(response => {
      this.rentals = response.data
      this.dataLoaded = true
    })
  }



}

