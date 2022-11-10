import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbicyclesComponent } from './addbicycles.component';

describe('AddbicyclesComponent', () => {
  let component: AddbicyclesComponent;
  let fixture: ComponentFixture<AddbicyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbicyclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbicyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
