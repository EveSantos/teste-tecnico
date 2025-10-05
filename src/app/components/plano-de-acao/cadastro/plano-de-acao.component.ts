import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { PlanoDeAcaoService } from '../../../services/plano-de-acao.service';
import { Plano } from '../../../interface/IPlanoAcao';

import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-plano-de-acao',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    StepperModule,
    SelectModule,
    Toast,
    TableModule
  ],
  templateUrl: './plano-de-acao.component.html',
  styleUrls: ['./plano-de-acao.component.css'],
  providers: [MessageService]
})
export class PlanoDeAcaoComponent implements OnInit {
  form!: FormGroup;
  fb = inject(FormBuilder);
  messageService = inject(MessageService);
  @Output() planoCadastrada = new EventEmitter<void>();
  planosService = inject(PlanoDeAcaoService);

  ngOnInit(): void {
    this.form = this.fb.group({
      plano: ['', [Validators.required]],
      objetivos: this.fb.array(
        Array.from({ length: 6 }).map(() =>
          this.fb.group({
            selecionado: [false],
            nome: [''],
            novoProblema: this.fb.group({
              descricaoProblema: [''],
              resultado: [''],
              etapa: [''],
              possuiCausa: [''],
              prioridade: [''],
              categoria: ['']
            }),
            problemas: this.fb.array([])
          })
        )
      )
    });
  }

  get objetivos(): FormArray {
    return this.form.get('objetivos') as FormArray;
  }

  getProblemas(i: number): FormArray {
    return this.objetivos.at(i).get('problemas') as FormArray;
  }

  addProblema(i: number) {
    const objetivo = this.objetivos.at(i) as FormGroup;
    const novoProblema = objetivo.get('novoProblema') as FormGroup;
    const problemas = this.getProblemas(i);

    if (novoProblema.valid) {
      problemas.push(this.fb.group({ ...novoProblema.value }));
      novoProblema.reset();
    }
  }

  prioridades = [
    { label: 'Alta', value: 'alta' },
    { label: 'Média', value: 'media' },
    { label: 'Baixa', value: 'baixa' }
  ];

  etapas = [
    { label: 'Etapa A', value: 'etapaA' },
    { label: 'Etapa B', value: 'etapaB' }
  ];

  causas = [
    { label: 'Sim', value: 'sim' },
    { label: 'Não', value: 'nao' }
  ];

  categorias = [
    { label: 'Categoria 1', value: 'cat1' },
    { label: 'Categoria 2', value: 'cat2' }
  ];

  onSubmit(): void {
    if (this.form.valid) {
      const { plano, objetivos } = this.form.value;
      const selecionados = objetivos
        .filter((obj: any) => obj.selecionado)
        .map((obj: any) => ({
          nome: obj.nome,
          problemas: obj.problemas
        }));

      const planoCadastro: Plano = {
        plano,
        objetivos: selecionados
      };


      this.planosService.cadastrarPlano(planoCadastro);
      this.planoCadastrada.emit();
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Formulário inválido',
        detail: 'Preencha todos os campos obrigatórios antes de prosseguir.'
      });
    }
  }

}
