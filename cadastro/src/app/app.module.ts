import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Part01: importa o HTTP que vai alimetar as APIs e também o banco de dados.
import{HttpClientModule} from '@angular/common/http';
//Parte02: importa o formulario ja que nosso site utiliza formularios.
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListagemComponent } from './listagem/listagem.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    MenuComponent,
    HomeComponent,
    FormularioComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Parte03: fazer a ligação da importações.
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
