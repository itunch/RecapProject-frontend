import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailResponseModel } from '../models/rentalDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44309/api/rentals/getrentalldto";

  constructor(private httpClient: HttpClient) { }

  getRentallDto(): Observable<RentalDetailResponseModel> {
    return this.httpClient.get<RentalDetailResponseModel>(this.apiUrl)
  }
}
