import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmaticsComponent } from './cosmatics.component';

describe('CosmaticsComponent', () => {
  let component: CosmaticsComponent;
  let fixture: ComponentFixture<CosmaticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosmaticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CosmaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
