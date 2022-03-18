import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadChecklistComponent } from './download-checklist.component';

describe('DownloadChecklistComponent', () => {
  let component: DownloadChecklistComponent;
  let fixture: ComponentFixture<DownloadChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
