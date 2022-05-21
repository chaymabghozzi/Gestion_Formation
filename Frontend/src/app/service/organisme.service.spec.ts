import { TestBed } from '@angular/core/testing';

import { OrganismeService } from './organisme.service';

describe('OrganismeService', () => {
  let service: OrganismeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganismeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
