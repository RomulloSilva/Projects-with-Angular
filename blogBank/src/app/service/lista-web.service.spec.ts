import { TestBed } from '@angular/core/testing';

import { ListaWebService } from './lista-web.service';

describe('ListaWebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaWebService = TestBed.get(ListaWebService);
    expect(service).toBeTruthy();
  });
});
