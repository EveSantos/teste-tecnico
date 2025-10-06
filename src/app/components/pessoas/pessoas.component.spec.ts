import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { PessoasComponent } from './pessoas.component';
import { provideHttpClient } from '@angular/common/http';

describe('PessoasComponent', () => {
  let component: PessoasComponent;
  let fixture: ComponentFixture<PessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoasComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
