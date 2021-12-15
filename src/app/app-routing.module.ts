import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';

import { HomeComponent } from './home/home.component';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';

const routes: Routes = [
  {path:"cadastro", component:CadastroComponent},
  {path:"pagina-produto", component:PaginaProdutoComponent},
  {path:"quem-somos", component:QuemsomosComponent},
  {path:"", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
