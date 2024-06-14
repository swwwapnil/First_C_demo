# First_C_demo
This is my first Git Repository.
Author - Swapnil Panchal
#include <stdio.h>

int main() {
    int totalOutcomes = 0;

    for (int digit1 = 0; digit1 <= 9; digit1++) {
        for (int digit2 = 0; digit2 <= 9; digit2++) {
            for (int digit3 = 0; digit3 <= 9; digit3++) {
                for (int digit4 = 0; digit4 <= 9; digit4++) {
                    printf("%d%d%d%d\n", digit1, digit2, digit3, digit4);
                    totalOutcomes++;
                }
            }
        }
    }

    printf("Total possible outcomes: %d\n", totalOutcomes);
    return 0;
}
