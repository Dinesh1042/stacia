import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DownloadChecklistService } from 'src/app/shared/services/download-checklist.service';

@Component({
  selector: 'download-checklist-form',
  templateUrl: './download-checklist-form.component.html',
  styleUrls: ['./download-checklist-form.component.scss'],
})
export class DownloadChecklistFormComponent {
  @Output('isSubmitted') handleIsSubmitted = new EventEmitter();

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

    try {
      await this.checklistService.downloadChecklist(
        this.downloadChecklistForm.value
      );
      this.handleIsSubmitted.emit(true);
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
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
