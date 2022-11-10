import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbookingdisplayComponent } from './userbookingdisplay.component';

describe('UserbookingdisplayComponent', () => {
  let component: UserbookingdisplayComponent;
  let fixture: ComponentFixture<UserbookingdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserbookingdisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserbookingdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
