#include <stdio.h>
#include <string.h>

#define MAX_NIVEL 9

enum Nivel {IMORTAL = 100, LENDARIO = 90, DIAMANTE = 80, OURO = 50, PRATA = 20, BRONZE = 10};
int nivelValor[] = {IMORTAL, LENDARIO, DIAMANTE, OURO, PRATA, BRONZE};
char nivelTexto[][MAX_NIVEL] = {{"Imortal"}, {"Lendario"}, {"Diamante"}, {"Ouro"}, {"Prata"}, {"Bronze"}, {"Ferro"}};

int getInt() {
    int n;
    scanf("%d", &n);
    return n;
}

void ranking(int qv, int qd) {
    int saldoVitorias = qv - qd;
    
    if(saldoVitorias <= nivelValor[5]) {
        printf("O Herói tem de saldo de %d está no nível de %s.\n", saldoVitorias, nivelTexto[6]);
    }
    else {
        for (int i = 0; i < 6; i++) {
            if (nivelValor[i] < saldoVitorias) {
                printf("O Herói tem de saldo de %d está no nível de %s.\n", saldoVitorias, nivelTexto[i]);
                break;
            }
        }
    }
}


int main() {
    printf("Quantidade de vitorias: ");
    const int q1 = getInt();
    
    printf("Quantidade de derrotas: ");
    const int q2 = getInt();
    
    ranking(q1, q2);
    
    return 0;
}