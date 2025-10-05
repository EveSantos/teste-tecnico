import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/authentication/login.component';
import { PrimeNG } from 'primeng/config';
import { PessoasComponent } from './components/pessoas/pessoas.component';
import { AuthService } from './auth/auth.service';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { CadastroComponent } from './components/cadastro/cadastro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, PessoasComponent,ButtonModule, RouterModule, Menubar, PessoasComponent,CadastroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'teste-tecnico';
  authService = inject(AuthService);
  // @Output() novoCadastroEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  menu: MenuItem[] | undefined;
  menuLogado: MenuItem[] | undefined;
  resetPessoas = false;
  itemAtivo: string = 'home';
  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
      this.primeng.ripple.set(true);
              this.menu = [
        {
          label: 'Home',
          icon: 'pi pi-home',
          routerLink: '/',
          command: () => this.itemSelecionado('home')
        }
      ]
      this.menuLogado = [
        {
          label: 'Home',
          icon: 'pi pi-home',
          routerLink: '/',
          command: () => this.itemSelecionado('home')
        },
        {
          label: 'Pessoas',
          icon: 'pi pi-user',
          routerLink: '/pessoas',
          command: () => this.itemSelecionado('pessoas')
        },
        {
          label: 'Agenda',
          icon: 'pi pi-calendar',
          command: () => this.itemSelecionado('agenda')
        },
        {
          id: 'plano',
          label: 'Plano de Ação',
          icon: 'pi pi-file',
          routerLink: '/plano-de-acao',
          command: () => this.itemSelecionado('plano')
        }
      ];
  }

  itemSelecionado(nome: string) {
    this.itemAtivo = nome;
  }
}
