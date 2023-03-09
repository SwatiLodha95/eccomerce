import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fasion1Component } from './fasion1.component';

describe('Fasion1Component', () => {
  let component: Fasion1Component;
  let fixture: ComponentFixture<Fasion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fasion1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fasion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
