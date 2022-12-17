import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueFireComponent } from './blue-fire.component';

describe('BlueFireComponent', () => {
  let component: BlueFireComponent;
  let fixture: ComponentFixture<BlueFireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueFireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
