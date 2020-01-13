import { Component, OnInit } from '@angular/core';

/*parte25: fazer as importações dos objetos usuários, Activated e o servico*/
import { Usuario } from '../model/Usuario';
import {ActivatedRoute} from '@angular/router';
import {UsuarioService} from '../servicos/usuario.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  //Parte26: Criar variavei para invocar o objeto e o ID.
  public usuario: Usuario = new Usuario();
  private id: number;

  //Parte27: Criar a rota pelo objeto activated e uma var para conversar com o serviço, dentro do construtor.
  constructor(private rota: ActivatedRoute, private busca: UsuarioService) { }

  ngOnInit() {

    /*Parte28: criamos uma função que se inicia com a página por isso esta dentro do OnInit, usando o ID como parâmetro*/
    this.id = this.rota.snapshot.params["id"];
    console.log("Veio como parametro o valor = "+this.id);

    this.busca.recuperaDetalhe(this.id).subscribe((res:Usuario)=>{
      this.usuario = res;
      console.log("RECUPERADO!");
      console.log(this.usuario);
    });

  }
  //Parte29:Criar a função que envia as alterações feitas nos dados dos usuários.
  enviarAlteracoes(){
    this.busca.atualiza(this.usuario).subscribe(
      (res)=>{
        console.log("Atualizado com sucesso");
      },
      (err)=>{
        console.log("Erro ao atualizar");
        console.log(err);
      });
  }

}
