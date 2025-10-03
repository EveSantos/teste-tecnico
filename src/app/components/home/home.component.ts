import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { PessoasComponent } from '../pessoas/pessoas.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, RouterModule, Menubar, PessoasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  authService = inject(AuthService);
  menu: MenuItem[] | undefined;
  menuLogado: MenuItem[] | undefined;

  itemAtivo: string = 'home';

  ngOnInit() {
    this.menu = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => this.itemSelecionado('home')
      }
    ]
    this.menuLogado = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => this.itemSelecionado('home')
      },
      {
        label: 'Pessoas',
        icon: 'pi pi-user',
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
        command: () => this.itemSelecionado('plano')
      }
    ];
  }

  itemSelecionado(nome: string) {
    this.itemAtivo = nome;
  }
}
