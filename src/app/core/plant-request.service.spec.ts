import { TestBed } from '@angular/core/testing';

import { PlantRequestService } from './plant-request.service';

describe('PlantRequestService', () => {
  let service: PlantRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
