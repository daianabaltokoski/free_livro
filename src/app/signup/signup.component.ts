import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  @Output() swap = new EventEmitter<void>();
  name: string = '';
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private userService: UserService) { }

  async register(event: Event) {
    event.preventDefault();
    console.log(this)
    this.message = await this.userService.registerUser({
      name: this.name,
      email: this.email,
      password: this.password,
    });
  }

  sendNotification(event: Event) {
    event.preventDefault();
    this.swap.emit();
  }
}
