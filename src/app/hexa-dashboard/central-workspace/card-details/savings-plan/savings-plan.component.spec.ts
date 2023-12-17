import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsPlanComponent } from './savings-plan.component';

describe('SavingsPlanComponent', () => {
  let component: SavingsPlanComponent;
  let fixture: ComponentFixture<SavingsPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingsPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
