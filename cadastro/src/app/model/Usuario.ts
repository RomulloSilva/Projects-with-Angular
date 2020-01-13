/*Parte04: Criar o model onde ficara o modelo do objeto a ser alimentado no banco de dados, ou seja nosso usuario será cadastrado e seus dados iram para nosso banco e  tambem para exibir as informações (APIs)*/


//parte05: Criando o objeto que é idéntico aos dados a serem puxados.
export class Usuario{
    public idUsuario: number;
    public nome: string;
    public telefone: string;
    public email: string;
    public senha: string;
}