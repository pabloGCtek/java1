import { TestBed } from '@angular/core/testing';

import { SDetalleprodService } from './s-detalleprod.service';

describe('SDetalleprodService', () => {
  let service: SDetalleprodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SDetalleprodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
