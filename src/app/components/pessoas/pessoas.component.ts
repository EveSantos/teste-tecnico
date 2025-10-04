import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Pessoa } from '../../interface/IPessoa';
import { PessoaService } from '../../services/pessoa.service';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Component({
  selector: 'app-pessoas',
  standalone: true,
  imports: [
    TableModule,
    InputTextModule,
    FormsModule,
    SelectModule,
    ButtonModule,
    CommonModule,
    CadastroComponent],
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.css'
})
export class PessoasComponent implements OnInit{
  listaPessoas: Pessoa[] = []
  clonedPessoa: { [key: string]: Pessoa } = {};
  pessoas$: Observable<Pessoa[]>;
  novoCadastro: boolean = false;
  constructor(private pessoaService: PessoaService) {
    this.pessoas$ = this.pessoaService.pessoas$;
  }

  ngOnInit() {
    this.pessoaService.getPessoas();
  }

  onRowEditInit(pessoa: Pessoa) {
    this.clonedPessoa[pessoa.id.toString()] = { ...pessoa };
  }

  onRowEditSave(pessoa: Pessoa) {
    this.pessoaService.updatePessoa(pessoa).subscribe({
      next: () => {
        delete this.clonedPessoa[pessoa.id.toString()];
      }
    })
  }

  onRowEditCancel(pessoa: Pessoa, index: number) {
    const pessoaOg = this.clonedPessoa[pessoa.id.toString()];
    if(pessoaOg){
      this.pessoaService.retaurarPessoaLista(pessoaOg);
    }
    delete this.clonedPessoa[pessoa.id.toString()];
  }

  deletarPessoa(id: number) {
    this.pessoaService.deletePessoa(id);
  }

  adicionarPessoas(){
    this.novoCadastro = true;
  }
}
