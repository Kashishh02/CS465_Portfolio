import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDataService } from '../services/trip-data';
import { TripCard } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-list.html',
  styleUrl: './trip-list.css',
})
export class TripList implements OnInit {

  trips: any[] = [];

  constructor(private tripDataService: TripDataService) { }

  ngOnInit(): void {
    this.tripDataService.getTrips().subscribe({
      next: (data: any) => {
        console.log('TRIPS DATA:', data);
        this.trips = data;
      },
      error: (err) => {
        console.log('API ERROR:', err);
      }
    });
  }

}