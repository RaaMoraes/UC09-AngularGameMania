import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PaginaProdutoComponent,
    QuemsomosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
