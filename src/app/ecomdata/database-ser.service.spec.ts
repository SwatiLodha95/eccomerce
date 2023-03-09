import { TestBed } from '@angular/core/testing';

import { DatabaseSerService } from './database-ser.service';

describe('DatabaseSerService', () => {
  let service: DatabaseSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
