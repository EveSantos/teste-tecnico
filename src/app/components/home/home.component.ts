import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, RouterModule, Menubar],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  authService = inject(AuthService);

  menu: MenuItem[] | undefined;
  menuLogado: MenuItem[] | undefined;


  ngOnInit() {
        this.menu = [
          {
            label: 'Home',
            icon: 'pi pi-home',
            routerLink: '/'
          }
        ]
        this.menuLogado = [
          {
            label: 'Home',
            icon: 'pi pi-home',
            routerLink: '/'
          },
          {
            label: 'Pessoas',
            icon: 'pi pi-user',
            routerLink: '/pessoas'
          },
          {
            label: 'Agenda',
            icon: 'pi pi-calendar'
          },
          {
            label: 'Plano de Ação',
            icon: 'pi pi-file'
          }
      ]
    }
}
