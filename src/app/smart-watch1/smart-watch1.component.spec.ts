import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartWatch1Component } from './smart-watch1.component';

describe('SmartWatch1Component', () => {
  let component: SmartWatch1Component;
  let fixture: ComponentFixture<SmartWatch1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartWatch1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartWatch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
