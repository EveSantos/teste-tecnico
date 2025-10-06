import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PlanoDeAcaoComponent } from './plano-de-acao.component';
import { provideHttpClient } from '@angular/common/http';

describe('PlanoDeAcaoComponent', () => {
  let component: PlanoDeAcaoComponent;
  let fixture: ComponentFixture<PlanoDeAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanoDeAcaoComponent, BrowserAnimationsModule],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoDeAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
