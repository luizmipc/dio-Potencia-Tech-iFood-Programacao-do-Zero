const tipos = ["mago", "guerreiro", "monge", "ninja"];
const ataques = ["magia", "espada", "artes marciais", "shuriken"];

class Heroi {
    constructor ( nome, idade, tipo ) {
        this.nome=nome;
        this.idade=idade;
        this.tipo=tipo;
    }
    atacar() {
        for ( let i = 0; i < tipos.length; i++ ) {
            if ( this.tipo == tipos[i] ) {
                console.log(`O ${this.tipo} atacou usando ${ataques[i]}.`);
                break;
            }
        }
    }
}

// caso de exemplo
let heroi = new Heroi ( "Luiz Marcelo", 21, tipos[3] );
heroi.atacar();
