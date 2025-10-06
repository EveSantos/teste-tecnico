import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { PlanoDeAcaoService } from './plano-de-acao.service';
import { provideHttpClient } from '@angular/common/http';

describe('PlanoDeAcaoService', () => {
  let service: PlanoDeAcaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(PlanoDeAcaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
