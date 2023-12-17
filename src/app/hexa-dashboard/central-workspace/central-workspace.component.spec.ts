import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralWorkspaceComponent } from './central-workspace.component';

describe('CentralWorkspaceComponent', () => {
  let component: CentralWorkspaceComponent;
  let fixture: ComponentFixture<CentralWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralWorkspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
