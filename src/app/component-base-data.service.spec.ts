import { TestBed, inject } from '@angular/core/testing';

import { ComponentBaseDataService } from './component-base-data.service';

describe('ComponentBaseDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentBaseDataService]
    });
  });

  it('should be created', inject([ComponentBaseDataService], (service: ComponentBaseDataService) => {
    expect(service).toBeTruthy();
  }));
});
