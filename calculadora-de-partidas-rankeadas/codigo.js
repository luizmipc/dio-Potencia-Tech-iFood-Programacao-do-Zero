const nivelValor = [100, 90, 80, 50, 20, 10];
const nivelTexto = ["Imortal", "Lendario", "Diamante", "Ouro", "Prata", "Bronze", "Ferro"];

function ranking ( qv, qd ) {
    let saldoVitorias = qv - qd;
    
    if ( saldoVitorias <= nivelValor[nivelValor.length-1] ) {
        console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivelTexto[nivelTexto.length-1]}.`);
    }
    else {
        for ( let i = 0; i < nivelValor.length; i++ ) {
            if ( saldoVitorias > nivelValor[i] ) {
                console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivelTexto[i]}.`);
                break;
            }
        }
    }
}
// Caso de exemplo
let q1 = 150; // quantidade vitórias
let q2 = 40; // quantidade derrotas
ranking ( q1, q2 );
