import { Component } from '@angular/core';
import { TripList } from './trip-list/trip-list';
import { TripEdit } from './trip-edit/trip-edit';

@Component({
  selector: 'app-root',
  imports: [TripList, TripEdit],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}