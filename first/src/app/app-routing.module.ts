import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



/*Aqui fazemos a importação dos componentes do site */
import { MenuComponent } from './menu/menu.component';
import { VideosComponent } from './videos/videos.component';
import {CorpoComponent} from './corpo/corpo.component';
import { FormularioComponent} from './formulario/formulario.component';



const routes: Routes = [

{path: "", redirectTo: 'corpo', pathMatch: 'full'},
{path: 'corpo', component: CorpoComponent },
{path: 'menu', component: MenuComponent},
{path: 'videos', component: VideosComponent },
{path: 'formulario', component: FormularioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
