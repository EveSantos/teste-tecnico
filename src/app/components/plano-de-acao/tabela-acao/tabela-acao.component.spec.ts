import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAcaoComponent } from './tabela-acao.component';

describe('TabelaAcaoComponent', () => {
  let component: TabelaAcaoComponent;
  let fixture: ComponentFixture<TabelaAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaAcaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
