import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {

  email = '';
  password = '';
  loginFailed = false;

  constructor(private authService: AuthService) {}

  onLogin(): void {
    this.loginFailed =
      !this.authService.login(this.email, this.password);
  }
}