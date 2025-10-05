import { Component } from '@angular/core';
import { PlanoDeAcaoService } from '../../../services/plano-de-acao.service';
import { Observable } from 'rxjs';
import { Plano } from '../../../interface/IPlanoAcao';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Dialog } from 'primeng/dialog';
import { PlanoDeAcaoComponent } from '../cadastro/plano-de-acao.component';
@Component({
  selector: 'app-tabela-acao',
  standalone: true,
  imports: [
    TableModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    Dialog,
    PlanoDeAcaoComponent
  ],
  templateUrl: './tabela-acao.component.html',
  styleUrl: './tabela-acao.component.css'
})
export class TabelaAcaoComponent {
  planos$: Observable<Plano[]>;

  novoCadastroPlano: boolean = false;

  constructor(private planoService: PlanoDeAcaoService) {
    this.planos$ = this.planoService.planos$;
  }

  ngOnInit() {
    this.planoService.getPlanos();
  }

  adicionarPlanos(){
    this.novoCadastroPlano = true;
  }

  voltarParaTabela() {
    this.novoCadastroPlano = false;
  }
}
