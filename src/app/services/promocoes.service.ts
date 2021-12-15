import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocoes } from '../models/promocoes';

@Injectable({
  providedIn: 'root'
})
export class PromocoesService {

  //variavel criada para armazenar o endereço da API
  url = "http://localhost:3000/promocoes";

  //insere a dependencia HttpClient
  constructor(private httpClient: HttpClient) { }

  //variavel que aramazena as config dos headers da requisição 
  httpOptions = {
    headers: new HttpHeaders ({ 'Content-Type': 'aplication/json' })
  }

  //metodo get, retorna as noticias da API
  getPromocoes(): Observable<Promocoes[]>{
    return this.httpClient.get<Promocoes[]>(this.url);
  }
}
