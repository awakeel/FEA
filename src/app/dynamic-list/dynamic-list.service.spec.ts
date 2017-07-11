import { TestBed, inject } from '@angular/core/testing';

import { DynamicListService } from './dynamic-list.service';

describe('DynamicListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicListService]
    });
  });

  it('should be created', inject([DynamicListService], (service: DynamicListService) => {
    expect(service).toBeTruthy();
  }));
});
