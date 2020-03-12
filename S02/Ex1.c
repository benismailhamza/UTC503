#include <stdio.h>

int main(void) {
    
    int n = 5;
    int factorielle = n;
    int saut = n;
    
    // factorielle de N = N * (N - 1) * (N - 2) * ( N - i) * ... 1

boucle:

    if ( saut > 1 ) {
        
        factorielle = factorielle * (saut - 1);
        saut--;
        
        goto boucle;

    }

fin:

printf(" La factorielle de %d est égale à %d\n", n, factorielle);

}