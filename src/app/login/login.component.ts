import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { SigninComponent } from '../signin/signin.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, SignupComponent, SigninComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public showLogin: boolean = true

  swapShowLogin(): void {
    this.showLogin = !this.showLogin;
  }
}
