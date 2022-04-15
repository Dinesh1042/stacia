import { Component } from '@angular/core';
import { DownloadChecklistService } from 'src/app/shared/services/download-checklist.service';

@Component({
  selector: 'download-checklist',
  templateUrl: './download-checklist.component.html',
  styleUrls: ['./download-checklist.component.scss'],
})
export class DownloadChecklistComponent {
  isChecklistFormSubmitted = false;
  error: Error | null = null;

  constructor(private downloadChecklistService: DownloadChecklistService) {}

  downloadChecklist() {
    this.downloadChecklistService.downloadChecklistFile();
  }
}
