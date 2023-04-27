import { TestBed } from '@angular/core/testing';

import { SPedidoService } from './s-pedido.service';

describe('SPedidoService', () => {
  let service: SPedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SPedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
