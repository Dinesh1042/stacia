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

  contactUsForm!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private contactUsService: ContactUsService
  ) {}

  ngOnInit(): void {
    this.contactUsForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required]],
    });
  }

  async submitHandler() {
    if (this.contactUsForm.invalid) return;

    this.loading = true;
    this.contactUsForm.disable();

    try {
      await this.contactUsService.sendMessage(this.contactUsForm.value);
      this.onSubmitted.emit(true);
      this.contactUsForm.reset();
    } catch (error) {
      console.log(error);
    }

    this.contactUsForm.enable();
    this.loading = false;
  }

  // Form Getters

  get name() {
    return this.contactUsForm.get('name');
  }

  get email() {
    return this.contactUsForm.get('email');
  }

  get message() {
    return this.contactUsForm.get('message');
  }
}
