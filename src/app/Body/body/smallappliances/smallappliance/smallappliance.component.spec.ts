import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallapplianceComponent } from './smallappliance.component';

describe('SmallapplianceComponent', () => {
  let component: SmallapplianceComponent;
  let fixture: ComponentFixture<SmallapplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallapplianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallapplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
