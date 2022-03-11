import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMethodCardComponent } from './product-method-card.component';

describe('ProductMethodCardComponent', () => {
  let component: ProductMethodCardComponent;
  let fixture: ComponentFixture<ProductMethodCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMethodCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMethodCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
