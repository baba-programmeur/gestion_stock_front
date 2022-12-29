import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMorrisComponent } from './chart-morris.component';

describe('ChartMorrisComponent', () => {
  let component: ChartMorrisComponent;
  let fixture: ComponentFixture<ChartMorrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartMorrisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartMorrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
