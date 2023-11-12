class Heroi {
    constructor ( nome, experiencia ) {
        this.nome=nome;
        this.experiencia=experiencia;
    }
}

const nivelValor = [10000, 9000, 8000, 7000, 5000, 2000, 1000];
const nivelTexto = ["Radiante", "Imortal", "Ascendente", "Platina", "Ouro", "Prata", "Bronze", "Ferro"];

let heroi = new Heroi( "Luiz Marcelo", 1001 );

if ( heroi.experiencia <= nivelValor[nivelValor.length-1 ]) {
    console.log(`O herói de nome ${heroi.nome} está no nível de ${nivelTexto[nivelTexto.length-1]}.`);
}
else {
    for ( let i = 0; i < nivelValor.length; ++i ) {
        if ( heroi.experiencia > nivelValor[i] ) {
            console.log(`O herói de nome ${heroi.nome} está no nível de ${nivelTexto[i]}.`);
            break;
        }
    }
}
