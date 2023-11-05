class Heroi {
    constructor(nome, experiencia, nivel) {
        this.nome=nome;
        this.experiencia=experiencia;
    }
}

const niveisValor = [10000, 9000, 8000, 7000, 6000, 5000, 2000, 1000];
const niveisTexto = ["Radiante", "Imortal", "Ascendente", "Platina", "Ouro", "Ouro-prata", "Prata", "Bronze", "Ferro"];
// Heroi de exemplo
let heroi = new Heroi("Luiz Marcelo", 10001, "");

if (heroi.experiencia <= niveisValor[7]) {
    console.log(`O herói de nome ${heroi.nome} está no nível de ${niveisTexto[8]}.`);
}
else {
    for (let i = 0; i < 8; ++i) {
        if (niveisValor[i] < heroi.experiencia) {
            console.log(`O herói de nome ${heroi.nome} está no nível de ${niveisTexto[i]}.`);
            break;
        }
    }
}