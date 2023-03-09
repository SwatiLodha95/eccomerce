import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footware1Component } from './footware1.component';

describe('Footware1Component', () => {
  let component: Footware1Component;
  let fixture: ComponentFixture<Footware1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Footware1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footware1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
