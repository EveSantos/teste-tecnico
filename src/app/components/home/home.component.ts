import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { PessoasComponent } from '../pessoas/pessoas.component';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, RouterModule, Menubar, PessoasComponent,CadastroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
}
