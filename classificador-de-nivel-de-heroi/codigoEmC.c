#include <stdio.h>
#include <string.h>

#define MAX_NOME 20
#define MAX_NIVEL 11

enum Nivel {RADIANTE = 10000, IMORTAL = 9000, ASCENDENTE = 8000, PLATINA = 7000, OURO = 6000, OURO_PRATA = 5000, PRATA = 2000, BRONZE = 1000};

struct Heroi {
    char nome[MAX_NOME];
    int experiencia;
    char nivel[MAX_NIVEL];
};

int getInt()
{
    int n;
    printf("Experiencia do heroi: ");
    scanf("%d", &n);
    return n;
}

int main() {
    int niveisValor[] = {RADIANTE, IMORTAL, ASCENDENTE, PLATINA, OURO, OURO_PRATA, PRATA, BRONZE};
    char niveisTexto[][MAX_NIVEL] = {{"Radiante"}, {"Imortal"}, {"Ascendente"}, {"Platina"}, {"Ouro"}, {"Ouro-prata"}, {"Prata"}, {"Bronze"}, {"Ferro"}};
    struct Heroi heroi;
    printf("Nome do heroi: ");
    fgets(heroi.nome, MAX_NOME, stdin);
    heroi.nome[strcspn(heroi.nome, "\n")] = 0;
    heroi.experiencia = getInt();
    
    if (heroi.experiencia <= BRONZE) {
        printf("O herói de nome %s está no nível de %s.\n", heroi.nome, niveisTexto[8]);
    }
    else {
        for (int i = 0; i < 8; ++i)
        {
            if(niveisValor[i] < heroi.experiencia) {
                printf("O herói de nome %s está no nível de %s.\n", heroi.nome, niveisTexto[i]);
                break;
            }
        }
    }
    
    return 0;
}
