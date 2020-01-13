/*Parte06: Criamos o serviço que vai */

import { Injectable } from '@angular/core';
//Parte07: importar a classe para o serviço
import{Usuario} from '../model/Usuario'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
//Parte08: como vamos utilizar o serviço HTTP devemos injetar o objeto HttpClient assim nossos serviços poderam buscar as informações.
  constructor(private http:HttpClient) { }


/**Parte09: criar metodos/servicos que irão chamar as informações(dados)*/
  recuperaTodos(){
    //Aqui essa função vai retornar todos os usuários.
    return this.http.get('http://cloud.professorisidro.com.br:8088/usuario/all');

  }

  recuperaDetalhe(id:number){//Como queremos a info através do id, criamos uma var "id" do tipo number.
    //Essa função vai retornar a informação através do is
    return this.http.get("http://cloud.professorisidro.com.br:8088/usuario/"+id)

  }


  public insere(usuario:Usuario){
    //Parte19: criando o serviço "post" que vai adicionar o cadastro do usuário.
    return this.http.post("http://cloud.professorisidro.com.br:8088/usuario/new",usuario);

  }
  //Parte30: criando o serviço put para
  public atualiza(usuario: Usuario){
    return this.http.put("http://cloud.professorisidro.com.br:8088/usuario", usuario)
    }


}
