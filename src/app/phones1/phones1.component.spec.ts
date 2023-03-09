import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Phones1Component } from './phones1.component';

describe('Phones1Component', () => {
  let component: Phones1Component;
  let fixture: ComponentFixture<Phones1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Phones1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Phones1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
