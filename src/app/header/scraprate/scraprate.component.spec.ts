import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScraprateComponent } from './scraprate.component';

describe('ScraprateComponent', () => {
  let component: ScraprateComponent;
  let fixture: ComponentFixture<ScraprateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScraprateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScraprateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
