import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http'; //importamos o a biblioteca HTTP do angula para esse serviço, se comunicar com o site onde a URL ira levar.

@Injectable({
  providedIn: 'root'
})
export class ListaWebService {

  //Isso é chamado de Injeção de Dependência, nos parâmetros do constructor.
  constructor( private http: HttpClient) { }

public obterTarefas(){
  return this.http.get("http://www.professorisidro.com.br/tarefas.php");//URL onde esta os dados em arquivo Json que são do tipo any.
}

}
