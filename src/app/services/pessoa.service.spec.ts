import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { PessoaService } from './pessoa.service';
import { provideHttpClient } from '@angular/common/http';

describe('PessoaService', () => {
  let service: PessoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(PessoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
