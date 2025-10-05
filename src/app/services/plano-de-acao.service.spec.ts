import { TestBed } from '@angular/core/testing';

import { PlanoDeAcaoService } from './plano-de-acao.service';

describe('PlanoDeAcaoService', () => {
  let service: PlanoDeAcaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanoDeAcaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
