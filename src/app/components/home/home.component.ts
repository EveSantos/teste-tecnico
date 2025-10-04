import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Menubar } from 'primeng/menubar';
import { PessoasComponent } from '../pessoas/pessoas.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { Pessoa } from '../../interface/IPessoa';
import { PessoaService } from '../../services/pessoa.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    RouterModule,
    Menubar,
    PessoasComponent,
    CadastroComponent,
    TableModule,
    CommonModule,
    CardModule,
    ScrollPanelModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  authService = inject(AuthService);
  pessoas$: Observable<Pessoa[]>;
  totalPessoas: number = 0;

  constructor(private pessoaService: PessoaService) {
    this.pessoas$ = this.pessoaService.pessoas$;
  }
  ngOnInit() {
    this.pessoaService.pessoas$.subscribe(pessoas => {
      this.totalPessoas = pessoas.length;
      console.log('Total de pessoas:', this.totalPessoas);
    });
    this.pessoaService.getPessoas();
  }
}
