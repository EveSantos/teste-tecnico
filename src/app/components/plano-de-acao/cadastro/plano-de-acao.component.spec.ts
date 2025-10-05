import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoDeAcaoComponent } from './plano-de-acao.component';

describe('PlanoDeAcaoComponent', () => {
  let component: PlanoDeAcaoComponent;
  let fixture: ComponentFixture<PlanoDeAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanoDeAcaoComponent]
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
