import { TestBed } from '@angular/core/testing';

import { CurrentJobService } from './current-job.service';

describe('CurrentJobService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentJobService = TestBed.get(CurrentJobService);
    expect(service).toBeTruthy();
  });
});
