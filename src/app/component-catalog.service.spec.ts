import { TestBed, inject } from '@angular/core/testing';

import { ComponentCatalogService } from './component-catalog.service';

describe('ComponentCatalogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentCatalogService]
    });
  });

  it('should be created', inject([ComponentCatalogService], (service: ComponentCatalogService) => {
    expect(service).toBeTruthy();
  }));
});
