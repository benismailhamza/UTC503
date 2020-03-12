#include <stdio.h>

int main(void) {
    int n = 5;
    int factorielle = 0;

    // factorielle de N = N * (N - 1) * (N - 2) * ( N - i) * ... 1

boucle:

    if (n > 1 ) {

        factorielle = n * (n - 1);
        n--;

        if (n = 1) {
            goto fin;
        }

        goto boucle;

    }

fin:

printf(" La factorielle de %d est égale à %d\n", n, factorielle);

}