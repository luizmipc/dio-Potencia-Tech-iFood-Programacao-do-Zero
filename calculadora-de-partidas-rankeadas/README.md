# 2-DESAFIO-CALCULADORA DE PARTIDAS RANKEADAS
## Instrução
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)<br>

Se vitórias for menor do que 10 = Ferro<br>
Se vitórias for entre 11 e 20 = Bronze<br>
Se vitórias for entre 21 e 50 = Prata<br>
Se vitórias for entre 51 e 80 = Ouro<br>
Se vitórias for entre 81 e 90 = Diamante<br>
Se vitórias for entre 91 e 100= Lendário<br>
Se vitórias for maior ou igual a 101 = Imortal<br>

Formato de Saída: "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

## Explicação
1. Declarei e inicializei dois vetores que armazenassem, respectivamente, os limites dos intervalos de quantidade de vitórias entre cada nível e os nomes dos níveis.
```js
const nivelValor = [100, 90, 80, 50, 20, 10];
const nivelTexto = ["Imortal", "Lendario", "Diamante", "Ouro", "Prata", "Bronze", "Ferro"];
```
2. Defini a função _ranking_ que exibe na tela a quantidade de vitórias - quantidade de derrotas e o nível do herói conforme o parâmetro da função (quantidade de vitórias e quantidade de derrotas).
```js
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
```
3. Declarei e inicializei duas variáveis, uma para a quantidade de vitórias e a outra para a quantidade de derrotas.
```js
let q1 = 150; // quantidade vitórias
let q2 = 40; // quantidade derrotas
```
4. Apliquei a função _ranking_ com dois argumentos: q1 (para a quantidade de vitórias) e q2 (para a quantidade de derrotas).
```js
ranking ( q1, q2 );
```
