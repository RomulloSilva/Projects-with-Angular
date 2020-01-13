import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{HomeComponent} from './home/home.component';
//Parte10: criamos a importações para as rotas das páginas.
import {ListagemComponent} from './listagem/listagem.component';
import {FormularioComponent} from './formulario/formulario.component';


const routes: Routes = [

{path: '', component: HomeComponent},
{path: 'home', component: HomeComponent},
//Parte11: criando as rotas.
{path: 'listagem', component: ListagemComponent},
{path: 'formulario', component: FormularioComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
