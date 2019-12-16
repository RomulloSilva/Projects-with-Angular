export class tarefa{
    private nome: string;
    private responsavel: string;
    public constructor(nome: string, responsavel: string){
        this.nome = nome;
        this.responsavel = responsavel;
    }
    
    public getNome(): string{
        return this.nome;
    }
    public getResponsavel(): string{
        return this.responsavel
    }
    public setNome(nome: string): void{
        this.nome = nome;
    }
    public setResponsavel(responsavel: string): void{
        this.responsavel = responsavel;
    }
    





}