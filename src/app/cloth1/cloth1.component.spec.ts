import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cloth1Component } from './cloth1.component';

describe('Cloth1Component', () => {
  let component: Cloth1Component;
  let fixture: ComponentFixture<Cloth1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cloth1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cloth1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
