import { TestBed, inject } from '@angular/core/testing';

import { DataEntityService } from './data-entity.service';

describe('DataEntityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataEntityService]
    });
  });

  it('should be created', inject([DataEntityService], (service: DataEntityService) => {
    expect(service).toBeTruthy();
  }));
});
