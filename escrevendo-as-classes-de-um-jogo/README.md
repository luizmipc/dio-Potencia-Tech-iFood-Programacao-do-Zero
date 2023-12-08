# 3-DESAFIO-ESCREVENDO AS CLASSES DE UM JOGO
## Instrução
Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:<br>

- nome<br>
- idade<br>
- tipo (ex: guerreiro, mago, monge, ninja )<br>

Além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:<br>

- exibir a mensagem: "o {tipo} atacou usando {ataque}")<br>
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe<br>
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:<br>

se mago -> no ataque exibir (usou magia)<br>
se guerreiro -> no ataque exibir (usou espada)<br>
se monge -> no ataque exibir (usou artes marciais)<br>
se ninja -> no ataque exibir (usou shuriken)<br>

Formato de Saída: "o {tipo} atacou usando {ataque}".
## Explicação
1. Declarei e inicializei dois vetores que armazenassem, respectivamente, os nomes das classes de herói e os nomes das formas de ataque das classes de herói.
```js
const tipos = ["mago", "guerreiro", "monge", "ninja"];
const ataques = ["magia", "espada", "artes marciais", "shuriken"];
```
2. Defini uma classe que encapsula três atributos do herói (nome, idade e tipo) e um método que exibe a forma de ataque de um tipo de herói.
```js
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
```
3. Instanciei a classe _Heroi_ com atributos iniciais.
```js
let heroi = new Heroi ( "Luiz Marcelo", 21, tipos[3] );
```
4. Apliquei o método atacar do objeto heroi.
```js
heroi.atacar();
```
