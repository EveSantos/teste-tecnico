import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Plano } from '../interface/IPlanoAcao';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanoDeAcaoService {
  planosSubject = new BehaviorSubject<Plano[]>([]);
  planos$: Observable<Plano[]> = this.planosSubject.asObservable();
  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:3000';
  constructor() { }

  getPlanos(){
    this.httpClient.get<Plano[]>(`${this.baseUrl}/planos`).subscribe( {
      next: (response: Plano[])=>{
        this.planosSubject.next(response)
      },
      error:(error) => {
        console.error('Erro ao buscar planos', error);
      }
    })
  }

  cadastrarPlano(planoCadastro: Plano){
    this.httpClient.post<Plano[]>(`${this.baseUrl}/planos/cadastrar-plano`, planoCadastro).subscribe({
      next: (response: Plano[]) => {
        this.planosSubject.next(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
