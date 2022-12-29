import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartFlotComponent } from './chart-flot.component';

describe('ChartFlotComponent', () => {
  let component: ChartFlotComponent;
  let fixture: ComponentFixture<ChartFlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartFlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartFlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
