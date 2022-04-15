import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DownloadChecklistService } from 'src/app/shared/services/download-checklist.service';

@Component({
  selector: 'download-checklist-form',
  templateUrl: './download-checklist-form.component.html',
  styleUrls: ['./download-checklist-form.component.scss'],
})
export class DownloadChecklistFormComponent {
  @Output('isSubmitted') handleIsSubmitted = new EventEmitter<boolean>();
  @Output('handleError') handleError = new EventEmitter<Error | null>();

  downloadChecklistForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private checklistService: DownloadChecklistService
  ) {
    this.downloadChecklistForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, [Validators.required]],
    });
  }

  async handleDownloadChecklist() {
    if (this.downloadChecklistForm.invalid) return;

    this.loading = true;
    this.downloadChecklistForm.disable();

    const handleSuccess = () => {
      this.handleIsSubmitted.emit(true);
      this.handleError.emit(null);
      this.downloadChecklistForm.enable();
      this.downloadChecklistForm.reset();
      this.loading = false;
    };

    const handleError = (error: Error) => {
      this.handleError.emit(error);
      this.downloadChecklistForm.enable();
      this.loading = false;
    };

    this.checklistService
      .downloadChecklist(this.downloadChecklistForm.value)
      .subscribe({ next: handleSuccess, error: handleError });
  }

  // Form Getters

  get name() {
    return this.downloadChecklistForm.get('name');
  }

  get email() {
    return this.downloadChecklistForm.get('email');
  }

  get phoneNumber() {
    return this.downloadChecklistForm.get('phoneNumber');
  }
}
