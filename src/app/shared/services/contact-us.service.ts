import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ContactUsForm } from '../Models/contactUsForm';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  constructor(private httpClient: HttpClient) {}

  sendMessage(contactUsForm: ContactUsForm): Observable<{ message: string }> {
    return this.httpClient.post<{ message: string }>(
      `http://localhost:3000/contact`,
      contactUsForm
    );
  }
}
