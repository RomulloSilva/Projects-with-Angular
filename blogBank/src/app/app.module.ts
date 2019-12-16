import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { BarraDeNavegacaoComponent } from './barra-de-navegacao/barra-de-navegacao.component';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RodapeComponent } from './rodape/rodape.component';
import { BuscaComponent } from './busca/busca.component';
import { TarefasComponent } from './tarefas/tarefas.component';

import {HttpClientModule} from '@angular/common/http'//Importando da biblioteca um objeto que faz a comunicação com a URL onde encontra nosso dados em formato Json.

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    BarraDeNavegacaoComponent,
    HomeComponent,
    FormularioComponent,
    RodapeComponent,
    BuscaComponent,
    TarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //Aqui criamos a importação do HTTP client, para conseguirmos buscar objetos por URL na web como quando usamos o fetch.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
