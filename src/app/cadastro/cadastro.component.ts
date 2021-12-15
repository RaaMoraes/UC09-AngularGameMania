import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadastro } from '../models/cadastro';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor( private router: Router , private cadastroService: CadastroService) { }

  ngOnInit(): void {
  }

  cadastroModel = new Cadastro();

  mensagem = "";

  onSubmit() {
    //console.log(this.cadastroModel)

    this.cadastroService.cadastro(this.cadastroModel).subscribe((response) => {
      this.mensagem = "Login realizado com sucesso!";
      this.router.navigateByUrl("/")
    }, (error) => {
      this.mensagem = error.error;
      
    })
      
  
  }
}
