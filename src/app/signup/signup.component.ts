import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  @Output() swap = new EventEmitter<void>();

  sendNotification(event: Event) {
    event.preventDefault();
    this.swap.emit();
  }
}
