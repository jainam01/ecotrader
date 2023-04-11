import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilecomputerComponent } from './mobilecomputer.component';

describe('MobilecomputerComponent', () => {
  let component: MobilecomputerComponent;
  let fixture: ComponentFixture<MobilecomputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilecomputerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilecomputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
