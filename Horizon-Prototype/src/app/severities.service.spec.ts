import { TestBed } from '@angular/core/testing';

import { SeveritiesService } from './severities.service';

describe('SeveritiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeveritiesService = TestBed.get(SeveritiesService);
    expect(service).toBeTruthy();
  });
});
