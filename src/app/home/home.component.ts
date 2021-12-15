import { Component, OnInit } from '@angular/core';
import { Promocoes } from '../models/promocoes';
import { PromocoesService } from '../services/promocoes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  promocoes = [] as Promocoes[];

  constructor(private promocoesService: PromocoesService) { }

  ngOnInit(): void {
    this.carregarPromocoes();
  }

  carregarPromocoes() {
    this.promocoesService.getPromocoes().subscribe((promocoesRecebidas: Promocoes[]) =>{
      this.promocoes = promocoesRecebidas;
      console.log(this.promocoes);
    })
  }

}
