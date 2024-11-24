import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  @Output() swap = new EventEmitter<void>();

  sendNotification(event: Event) {
    event.preventDefault();
    this.swap.emit();
  }
}
