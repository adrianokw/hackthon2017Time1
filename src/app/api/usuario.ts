export class Usuario{
    id: any;
    nome: any;
    
    constructor(){
        this.id = this.obterId();
        this.nome = "Carlos Alberto de Nobrega";
    }

    obterId(){
        var min = 1;
        var max = 999;
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}