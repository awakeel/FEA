import { TestBed, inject } from '@angular/core/testing';

import { DropdownMenuService } from './dropdown-menu.service';

describe('DropdownMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DropdownMenuService]
    });
  });

  it('should be created', inject([DropdownMenuService], (service: DropdownMenuService) => {
    expect(service).toBeTruthy();
  }));
});
