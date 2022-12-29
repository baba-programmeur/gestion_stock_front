import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPeityComponent } from './chart-peity.component';

describe('ChartPeityComponent', () => {
  let component: ChartPeityComponent;
  let fixture: ComponentFixture<ChartPeityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartPeityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartPeityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
