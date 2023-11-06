import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PlantRequestService } from './plant-request.service';

describe('PlantRequestService', () => {
  let service: PlantRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    });
    service = TestBed.inject(PlantRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
