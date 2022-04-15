import { Component } from '@angular/core';

@Component({
  selector: '[contactUs]',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  isFormSubmitted = false;
  error: Error | null = null;
}
