# Desafios de Projeto - Potência Tech iFood - Programação do Zero
Nesse repositório estão as soluções dos desafios e projetos que fiz durante o bootcamp "Potencia Tech iFood - Programação do Zero" oferecido pela plataforma de ensino [DIO.me](https://www.dio.me).
### Instrução
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo<br>
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
Primeiramente defini uma classe que encapsula-se dois atributos nome e experiência, com o intuito de 
```js
class Heroi {
    constructor(nome, experiencia, nivel) {
        this.nome=nome;
        this.experiencia=experiencia;
    }
}
```
