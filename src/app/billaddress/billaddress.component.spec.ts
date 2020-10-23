import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilladdressComponent } from './billaddress.component';

describe('BilladdressComponent', () => {
  let component: BilladdressComponent;
  let fixture: ComponentFixture<BilladdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilladdressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilladdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
