import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from 'src/app/shared/services/contact-us.service';

@Component({
  selector: 'contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss'],
})
export class ContactUsFormComponent implements OnInit {
  @Output('onSubmitted') onSubmitted = new EventEmitter<boolean>();
  @Output('handleError') handleError = new EventEmitter<Error | null>();

  contactUsForm!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private contactUsService: ContactUsService
  ) {}

  ngOnInit(): void {
    this.contactUsForm = this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required]],
      company: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required]],
    });
  }

  async submitHandler() {
    if (this.contactUsForm.invalid) return;

    this.loading = true;
    this.contactUsForm.disable();

    const handleSuccess = () => {
      this.onSubmitted.emit(true);
      this.handleError.emit(null);
      this.contactUsForm.reset();
      this.contactUsForm.enable();
      this.loading = false;
    };

    const handleError = (error: Error) => {
      this.handleError.emit(error);
      this.contactUsForm.enable();
      this.loading = false;
    };

    this.contactUsService
      .sendMessage(this.contactUsForm.value)
      .subscribe({ next: handleSuccess, error: handleError });
  }

  // Form Getters

  get firstName() {
    return this.contactUsForm.get('firstName');
  }

  get lastName() {
    return this.contactUsForm.get('lastName');
  }

  get company() {
    return this.contactUsForm.get('company');
  }

  get phoneNumber() {
    return this.contactUsForm.get('phoneNumber');
  }

  get email() {
    return this.contactUsForm.get('email');
  }

  get message() {
    return this.contactUsForm.get('message');
  }
}
