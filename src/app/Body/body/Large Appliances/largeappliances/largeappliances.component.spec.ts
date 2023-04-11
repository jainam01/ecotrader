import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeappliancesComponent } from './largeappliances.component';

describe('LargeappliancesComponent', () => {
  let component: LargeappliancesComponent;
  let fixture: ComponentFixture<LargeappliancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeappliancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeappliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
