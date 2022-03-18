import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadChecklistFormComponent } from './download-checklist-form.component';

describe('DownloadChecklistFormComponent', () => {
  let component: DownloadChecklistFormComponent;
  let fixture: ComponentFixture<DownloadChecklistFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadChecklistFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadChecklistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
