import { Component, EventEmitter, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Pessoa } from '../../interface/IPessoa';
import { PessoaService } from '../../services/pessoa.service';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-pessoas',
  standalone: true,
  imports: [
    TableModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
    ButtonModule,
    CommonModule,
    CadastroComponent,
    FormsModule,
    Dialog
  ],
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.css'
})
export class PessoasComponent implements OnInit {
  @Input() pessoa: Pessoa | null = null;
  fb = inject(FormBuilder);
  form!: FormGroup;
  listaPessoas: Pessoa[] = []
  clonedPessoa: { [key: string]: Pessoa } = {};
  pessoas$: Observable<Pessoa[]>;
  novoCadastro: boolean = false;
  modalVisible = false;
  pessoaSelecionada: Pessoa | null = null;
  visible: boolean = false;
  editarForm!: FormGroup;

  constructor(private pessoaService: PessoaService) {
    this.pessoas$ = this.pessoaService.pessoas$;
  }

  ngOnInit() {
    this.editarForm = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(''),
      cpf: new FormControl(''),
      email: new FormControl(''),
      escola: new FormControl(''),
      endereco: new FormControl(''),
      nomeSocial: new FormControl(''),
      cnpj: new FormControl(''),
      cidade: new FormControl(''),
      cep: new FormControl(''),
      estado: new FormControl(''),
      pais: new FormControl(''),
      telefone: new FormControl('')
    });
    this.pessoaService.getPessoas();
  }

  salvarPessoa() {
    if (this.editarForm.valid) {
      const pessoaAtualizada: Pessoa = this.editarForm.value;
      this.pessoaService.updatePessoa(pessoaAtualizada);
      this.visible = false;
      this.pessoaSelecionada = null;
    }
  }


  deletarPessoa(id: number) {
    this.pessoaService.deletePessoa(id);
  }

  adicionarPessoas(){
    this.novoCadastro = true;
  }
  voltarParaTabela() {
    this.novoCadastro = false;
  }

  exibirModal(pessoa?: Pessoa) {
    this.editarForm = this.fb.group({
      id: [pessoa?.id || ''],
      nome: [pessoa?.nome || ''],
      email: [pessoa?.email || ''],
      nomeSocial: [pessoa?.nomeSocial || ''],
      cpf: [pessoa?.cpf || ''],
      escola: [pessoa?.escola || ''],
      endereco: [pessoa?.endereco || ''],
      cnpj: [pessoa?.cnpj || ''],
      cidade: [pessoa?.cidade || ''],
      cep: [pessoa?.cep || ''],
      estado: [pessoa?.estado || ''],
      pais: [pessoa?.pais || ''],
      telefone: [pessoa?.telefone || '']
    });
    this.visible = true;
  }


}
