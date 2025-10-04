import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Pessoa } from '../interface/IPessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  pessoasSubject = new BehaviorSubject<Pessoa[]>([]);
  pessoas$: Observable<Pessoa[]> = this.pessoasSubject.asObservable();
  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:3000';
  constructor() { }

  getPessoas(){
    this.httpClient.get<Pessoa[]>(`${this.baseUrl}/pessoas`).subscribe( {
      next:(response: Pessoa[]) => {
        this.pessoasSubject.next(response);
      },
      error:(error) => {
        console.error('Erro ao buscar pessoas', error);
      }
    });
  }
  updatePessoa(p: Pessoa) {
    return this.httpClient.put<Pessoa>(`${this.baseUrl}/pessoas/${p.id}`, p);
  }

  deletePessoa(id: number) {
    this.httpClient.delete<Pessoa[]>(`${this.baseUrl}/pessoas/${id}`).subscribe({
      next: (response: Pessoa[]) => {
        this.pessoasSubject.next(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  retaurarPessoaLista(pessoaOg: Pessoa) {
    const listaPessoas = this.pessoasSubject.getValue();
    const index = listaPessoas.findIndex(p => p.id == pessoaOg.id)
    listaPessoas[index] = pessoaOg
    this.pessoasSubject.next(listaPessoas)
  }

  cadastrarPessoa(pessoaCadastro: Pessoa){
    this.httpClient.post<Pessoa[]>(`${this.baseUrl}/pessoas/cadastrar-pessoa`, pessoaCadastro).subscribe({
      next: (response: Pessoa[]) => {
        console.log('Pessoa cadastrada com sucesso');
        this.pessoasSubject.next(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
