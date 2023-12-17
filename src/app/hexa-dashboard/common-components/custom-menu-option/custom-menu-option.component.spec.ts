import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMenuOptionComponent } from './custom-menu-option.component';

describe('CustomMenuOptionComponent', () => {
  let component: CustomMenuOptionComponent;
  let fixture: ComponentFixture<CustomMenuOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomMenuOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMenuOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
