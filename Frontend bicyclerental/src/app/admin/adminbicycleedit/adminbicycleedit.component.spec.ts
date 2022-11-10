import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbicycleeditComponent } from './adminbicycleedit.component';

describe('AdminbicycleeditComponent', () => {
  let component: AdminbicycleeditComponent;
  let fixture: ComponentFixture<AdminbicycleeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminbicycleeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminbicycleeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
