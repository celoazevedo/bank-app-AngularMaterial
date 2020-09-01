import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmHomeComponent } from './atm-home.component';

describe('AtmHomeComponent', () => {
  let component: AtmHomeComponent;
  let fixture: ComponentFixture<AtmHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
