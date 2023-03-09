import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrockComponent } from './crock.component';

describe('CrockComponent', () => {
  let component: CrockComponent;
  let fixture: ComponentFixture<CrockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
