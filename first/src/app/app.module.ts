import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MenuComponent } from './menu/menu.component';
import { VideosComponent } from './videos/videos.component';
import { RodapeComponent } from './rodape/rodape.component';
import {CorpoComponent} from './corpo/corpo.component';
import { FormularioComponent} from './formulario/formulario.component';
import { TituloComponent } from './titulo/titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    CorpoComponent,
    FormularioComponent,
    MenuComponent,
    VideosComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
