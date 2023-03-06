import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeEditComponent } from './office-edit.component';

describe('OfficeEditComponent', () => {
  let component: OfficeEditComponent;
  let fixture: ComponentFixture<OfficeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
