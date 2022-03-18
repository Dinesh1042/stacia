import { TestBed } from '@angular/core/testing';

import { DownloadChecklistService } from './download-checklist.service';

describe('DownloadChecklistService', () => {
  let service: DownloadChecklistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadChecklistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
