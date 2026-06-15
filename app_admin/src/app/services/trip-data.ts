import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: HttpClient) { }

  getTrips() {
    return this.http.get('http://localhost:3000/api/trips');
  }

  addTrip(trip: any) {
    return this.http.post(
      'http://localhost:3000/api/trips',
      trip
    );
  }

  updateTrip(id: string, trip: any) {
    return this.http.put(
      `http://localhost:3000/api/trips/${id}`,
      trip
    );
  }

  deleteTrip(id: string) {
    return this.http.delete(
      `http://localhost:3000/api/trips/${id}`
    );
  }

}