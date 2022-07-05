import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContectsSummaryComponent } from './contects-summary.component';

describe('ContectsSummaryComponent', () => {
  let component: ContectsSummaryComponent;
  let fixture: ComponentFixture<ContectsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContectsSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContectsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
