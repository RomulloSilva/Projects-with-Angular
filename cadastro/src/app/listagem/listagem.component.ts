import { Component, OnInit } from '@angular/core';

//Parte12: importa o serviço.
import{UsuarioService} from '../servicos/usuario.service';
import{Usuario} from '../model/Usuario';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {


  public listaUser: Usuario[]// buscar a lista de usuários através da classe criada.
  //Parte13: criando var "busca" para invocar os servicos criados.
  constructor(private busca:UsuarioService) { }

  ngOnInit() {


    //Parte14: Invocando os serviços(Funções criadas no usuários.service) através da var "busca".
    this.busca.recuperaTodos().subscribe((res:Usuario[])=>{
      this.listaUser =res;
    })
  }

}
