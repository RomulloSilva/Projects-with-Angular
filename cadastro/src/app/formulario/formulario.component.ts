import { Component, OnInit } from '@angular/core';
//Part17: importar a classe usuario.
import{Usuario} from '../model/Usuario';
import { UsuarioService } from '../servicos/usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  //Parte18 criar var para invocar o objeto Usuario.
  public usuario:Usuario = new Usuario();

  //Parte20:
  constructor(private busca: UsuarioService) { }

  ngOnInit() {

  }

    /*Parte21: Criar função que enviar os dados e tem menssagem de erro caso o email seja duplicado e outra de sucesso.(tem de ser fora do ngOnInit)*/
    enviarDados(){
      this.busca.insere(this.usuario).subscribe(
        res=>{
          console.log("Inserido com sucesso");
        },
        error=>{
          console.log("Erro ao enserir");
        }
      );
    }

  }
