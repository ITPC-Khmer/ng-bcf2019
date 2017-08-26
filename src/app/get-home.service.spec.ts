import { TestBed, inject } from '@angular/core/testing';

import { GetHomeService } from './get-home.service';

describe('GetHomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetHomeService]
    });
  });

  it('should be created', inject([GetHomeService], (service: GetHomeService) => {
    expect(service).toBeTruthy();
  }));
});
