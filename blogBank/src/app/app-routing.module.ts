import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Sempre que for fazer importação devemos digitar o nome do componente em letras maiúscula. Obedecendo o template " import{NomeDoComponente} from 'CaminhoParaOComponente'" */
import{HomeComponent} from './home/home.component'; //vazendo a importação da pagina home
import{FormularioComponent} from './formulario/formulario.component';//vazendo a importação da pagina formulario. 
import{BuscaComponent} from './busca/busca.component';//vazendo a importação da pagina buscar
import{TarefasComponent} from './tarefas/tarefas.component';

const routes: Routes = [
/*Criando */
{path: '', redirectTo:'home', pathMatch: 'full'},
{ path: 'home', component: HomeComponent},// definimos a rota para a página home
{path: 'formulario', component: FormularioComponent},// definimos a rota para a página formulario
{path: 'busca', component: BuscaComponent},
{path: 'tarefas', component: TarefasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
