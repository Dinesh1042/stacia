import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMethodDetailComponent } from './product-method-detail.component';

describe('ProductMethodDetailComponent', () => {
  let component: ProductMethodDetailComponent;
  let fixture: ComponentFixture<ProductMethodDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMethodDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMethodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
