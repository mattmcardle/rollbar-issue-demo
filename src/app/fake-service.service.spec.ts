import { TestBed, inject } from '@angular/core/testing';

import { FakeServiceService } from './fake-service.service';

describe('FakeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeServiceService]
    });
  });

  it('should be created', inject([FakeServiceService], (service: FakeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
