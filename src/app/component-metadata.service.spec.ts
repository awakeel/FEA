import { TestBed, inject } from '@angular/core/testing';

import { ComponentMetadataService } from './component-metadata.service';

describe('ComponentMetadataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentMetadataService]
    });
  });

  it('should be created', inject([ComponentMetadataService], (service: ComponentMetadataService) => {
    expect(service).toBeTruthy();
  }));
});
