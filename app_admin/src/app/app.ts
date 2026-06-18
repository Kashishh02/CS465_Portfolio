import { Component } from '@angular/core';
import { LoginComponent } from './login/login';
import { TripList } from './trip-list/trip-list';
import { TripEdit } from './trip-edit/trip-edit';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, TripList, TripEdit],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(public authService: AuthService) {}

}