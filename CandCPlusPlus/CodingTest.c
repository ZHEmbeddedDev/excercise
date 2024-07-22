#include <stdlib.h>
#include <stdio.h>


int main()
{
    int size = 3;
    int imgs[3][3] = {
        { 1, 2, 3 },
        { 4, 5, 6 },
        { 7, 8, 9 }
    };

    int rotate[3][3];

    for(int i = 0; i < size; i++ )
    {
        for(int j = 0; j < size; j++ )
            printf("%d, ", imgs[i][j]);
        printf("\n");
    }
    printf("\n");

    for(int i = 0; i < size; i++)
        for(int j = 0; j < size; j++)
            rotate[j][i] = imgs[i][size - 1 - j];
    
    for(int i = 0; i < size; i++ )
    {
        for(int j = 0; j < size; j++ )
            printf("%d, ", rotate[i][j]);
        printf("\n");
    }

    return 0;
}
