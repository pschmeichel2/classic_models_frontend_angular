import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlineComponent } from './productline.component';

describe('ProductlineComponent', () => {
  let component: ProductlineComponent;
  let fixture: ComponentFixture<ProductlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
