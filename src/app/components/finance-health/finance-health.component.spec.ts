import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceHealthComponent } from './finance-health.component';

describe('FinanceHealthComponent', () => {
  let component: FinanceHealthComponent;
  let fixture: ComponentFixture<FinanceHealthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceHealthComponent]
    });
    fixture = TestBed.createComponent(FinanceHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
