import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cosmatics1Component } from './cosmatics1.component';

describe('Cosmatics1Component', () => {
  let component: Cosmatics1Component;
  let fixture: ComponentFixture<Cosmatics1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cosmatics1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cosmatics1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
