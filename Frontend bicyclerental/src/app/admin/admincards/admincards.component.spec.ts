import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincardsComponent } from './admincards.component';

describe('AdmincardsComponent', () => {
  let component: AdmincardsComponent;
  let fixture: ComponentFixture<AdmincardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
