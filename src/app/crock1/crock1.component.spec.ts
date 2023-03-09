import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crock1Component } from './crock1.component';

describe('Crock1Component', () => {
  let component: Crock1Component;
  let fixture: ComponentFixture<Crock1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Crock1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Crock1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
