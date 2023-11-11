# Desafios de Projeto - Potência Tech iFood - Programação do Zero
Nesse repositório estão as soluções dos desafios e projetos que fiz durante o bootcamp "Potencia Tech iFood - Programação do Zero" oferecido pela plataforma de ensino [DIO.me](https://www.dio.me).
## 1-DESAFIO-CLASSIFICADOR DE NÍVEL DE HERÓI
### Instrução
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
### Explicação
1. Defini uma classe que encapsula-se dois atributos nome e experiência.
```js
class Heroi {
    constructor(nome, experiencia, nivel) {
        this.nome=nome;
        this.experiencia=experiencia;
    }
}
```
2. Define dois vetores que armazenassem, respectivamente, os limites dos intervalos de experiência entre cada nível e as strings dos níveis.
```js
const niveisValor = [10000, 9000, 8000, 7000, 6000, 5000, 2000, 1000];
const niveisTexto = ["Radiante", "Imortal", "Ascendente", "Platina", "Ouro", "Ouro-prata", "Prata", "Bronze", "Ferro"];
```
