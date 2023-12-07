# 1-DESAFIO-CLASSIFICADOR DE NÍVEL DE HERÓI
## Instrução
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:<br>
Se XP for menor do que 1.000 = Ferro<br>
Se XP for entre 1.001 e 2.000 = Bronze<br>
Se XP for entre 2.001 e 5.000 = Prata<br>
**Adaptado**: Se XP for entre 5.001 e 7.000 = Ouro<br>
Se XP for entre 7.001 e 8.000 = Platina<br>
Se XP for entre 8.001 e 9.000 = Ascendente<br>
Se XP for entre 9.001 e 10.000= Imortal<br>
Se XP for maior ou igual a 10.001 = Radiante<br>

Formato de Saída: "O Herói de nome **{nome}** está no nível de **{nivel}**"
## Explicação
1. Defini uma classe que encapsula dois atributos do herói (nome e experiência).
```js
class Heroi {
    constructor ( nome, experiencia ) {
        this.nome=nome;
        this.experiencia=experiencia;
    }
}
```
2. Declarei a inicializei dois vetores que armazenassem, respectivamente, os limites dos intervalos de experiência entre cada nível e os nomes dos níveis.
```js
const nivelValor = [10000, 9000, 8000, 7000, 5000, 2000, 1000];
const nivelTexto = ["Radiante", "Imortal", "Ascendente", "Platina", "Ouro", "Prata", "Bronze", "Ferro"];
```
3. Declarei e inicializei uma instância da classe 'Heroi' com o nome 'Luiz Marcelo' e experiência 10001.
```js
let heroi = new Heroi( "Luiz Marcelo", 10001 );
```
4. Utilizei uma estrutura de decisão para determinar, separadamente, o nível Ferro e os demais, uma vez que a condição do laço de repetição for não abrange o nível Ferro.
```js
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
```
5. Utilizei um laço de iteração _for_ para determinar o nível do herói com base nas condições definidas. Dentro desse laço, uma estrutura _if_ verifica em qual intervalo de experiência o herói se encaixa e print o nível correspondente. Este método permite uma verificação abrangente e eficiente do nível do herói. Dessa forma, evita-se uma estrutura de decisão _if-else if_ ou _switch case_. 
```js
for ( let i = 0; i < nivelValor.length; ++i ) {
    if ( heroi.experiencia > nivelValor[i] ) {
        console.log(`O herói de nome ${heroi.nome} está no nível de ${nivelTexto[i]}.`);
        break;
    }
}
```
