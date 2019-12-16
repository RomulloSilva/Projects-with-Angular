import { Component, OnInit } from '@angular/core';

//Aqui acontece a importação
import{tarefa} from '../model/tarefas';
//Aqui fazemos a importação do serviço que vai conversar com o site
import {ListaWebService} from '../service/lista-web.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  //criando o objeto novo.
  minhaTarefa: tarefa[]; //"Tarefa" é o nome da classe que criamos na pasta model tarefas.ts. Quando temos []é uma array.

// Injetando o serviço(porquê não fui eu que dei new e sim o própio angular) dentro do parametro do constructor.
  constructor(private servicoLista: ListaWebService) {

   }
  
 
  ngOnInit() {

    console.log("Chamando a função que recupera a lista");
    this.obterTodasAsTarefas();
    console.log("Verificação se está tudo ok");
    console.log(this.minhaTarefa);

  }

  // Criando um método para invocar o serviço e verificar se os dados que vierem da URL estão no formato da classe Tarefa.
  public obterTodasAsTarefas(){
    this.servicoLista.obterTarefas().subscribe((resultado: tarefa[])=>{
      this.minhaTarefa = resultado;
    });
  }


}
