import { Injectable } from '@angular/core';

import { DownloadChecklistForm } from '../Models/downloadChecklistForm';

@Injectable({
  providedIn: 'root',
})
export class DownloadChecklistService {
  downloadChecklist(checklistForm: DownloadChecklistForm) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(checklistForm);
        resolve(true);
      }, 2000);
    });
  }
}
