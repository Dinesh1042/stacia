import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { DownloadChecklistForm } from '../Models/downloadChecklistForm';

@Injectable({
  providedIn: 'root',
})
export class DownloadChecklistService {
  constructor(private httpClient: HttpClient) {}

  downloadChecklist(
    checklistForm: DownloadChecklistForm
  ): Observable<{ message: string }> {
    return this.httpClient
      .post<{ message: string }>(
        `http://localhost:3000/download-checklist`,
        checklistForm
      )
      .pipe(tap(() => this.downloadChecklistFile()));
  }

  downloadChecklistFile() {
    const anchorEl = document.createElement('a');
    anchorEl.setAttribute('href', 'assets/pdf/checklist.pdf');
    anchorEl.setAttribute('download', 'checklist.pdf');
    anchorEl.setAttribute('target', '_blank');
    anchorEl.click();
    anchorEl.remove();
  }
}
