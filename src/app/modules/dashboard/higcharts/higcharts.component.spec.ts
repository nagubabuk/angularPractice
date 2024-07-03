import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigchartsComponent } from './higcharts.component';

describe('HigchartsComponent', () => {
  let component: HigchartsComponent;
  let fixture: ComponentFixture<HigchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HigchartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HigchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
