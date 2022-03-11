import { Injectable } from '@angular/core';

import { ContactUsForm } from '../Models/contactUsForm';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  constructor() {}

  sendMessage(contactUsForm: ContactUsForm): Promise<{ message: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: 'You message has delivered to us.' });
        console.log(contactUsForm, 'formSubmitted');
      }, 3000);
    });
  }
}
