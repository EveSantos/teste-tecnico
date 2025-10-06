import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { StepperModule } from 'primeng/stepper';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../interface/IPessoa';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    StepsModule,
    ButtonModule,
    StepperModule,
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    SelectModule,
    InputNumberModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit {
  fb = inject(FormBuilder);
  pessoasService = inject(PessoaService);
  @Output() pessoaCadastrada = new EventEmitter<void>();

  cadastroForm = this.fb.group({
    nome: new FormControl('', [Validators.required]),
    nomeSocial: new FormControl(''),
    cpf: new FormControl(null, [Validators.required]),
    cnpj: new FormControl(''),
    escola: new FormControl(null, [Validators.required]),
    endereco: new FormControl('', [Validators.required]),
    cidade: new FormControl(''),
    cep: new FormControl(''),
    estado: new FormControl(null),
    pais: new FormControl(null),
    telefone: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  countries: any[] | undefined;

  selectedCountry: string | undefined;

  ngOnInit() {
    this.countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];
  }

  test(){
    console.log(this.cadastroForm.errors)
  }
  onSubmit() {
    const formValue = this.cadastroForm.value;
    const idNovo = uuidv4();
    const pessoa: Pessoa = {
      id: idNovo,
      nome: formValue.nome || '',
      nomeSocial: formValue.nomeSocial || '',
      cpf:  formValue.cpf || 0,
      cnpj: formValue.cnpj || '',
      escola: formValue.escola || '',
      endereco: formValue.endereco || '',
      cidade: formValue.cidade || '',
      cep: formValue.cep || '',
      estado: formValue.estado || '',
      pais: formValue.pais || '',
      telefone: formValue.telefone || '',
      email: formValue.email || '',
    };

    if(this.cadastroForm.valid){
      this.pessoasService.cadastrarPessoa(pessoa);
      this.pessoaCadastrada.emit();
    }
  }

}
