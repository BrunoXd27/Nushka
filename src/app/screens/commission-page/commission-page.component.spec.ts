import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionPageComponent } from './commission-page.component';

describe('CommissionPageComponent', () => {
  let component: CommissionPageComponent;
  let fixture: ComponentFixture<CommissionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommissionPageComponent]
    });
    fixture = TestBed.createComponent(CommissionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
