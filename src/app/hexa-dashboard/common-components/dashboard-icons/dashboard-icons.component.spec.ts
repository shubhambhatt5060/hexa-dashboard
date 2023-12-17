import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIconsComponent } from './dashboard-icons.component';

describe('DashboardIconsComponent', () => {
  let component: DashboardIconsComponent;
  let fixture: ComponentFixture<DashboardIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
