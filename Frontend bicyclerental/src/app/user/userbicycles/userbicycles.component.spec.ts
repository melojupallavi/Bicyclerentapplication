import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbicyclesComponent } from './userbicycles.component';

describe('UserbicyclesComponent', () => {
  let component: UserbicyclesComponent;
  let fixture: ComponentFixture<UserbicyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserbicyclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserbicyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
