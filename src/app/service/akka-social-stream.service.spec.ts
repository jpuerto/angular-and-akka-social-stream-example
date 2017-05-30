import { TestBed, inject } from '@angular/core/testing';

import { AkkaSocialStreamService } from './akka-social-stream.service';

describe('AkkaSocialStreamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AkkaSocialStreamService]
    });
  });

  it('should be created', inject([AkkaSocialStreamService], (service: AkkaSocialStreamService) => {
    expect(service).toBeTruthy();
  }));
});
