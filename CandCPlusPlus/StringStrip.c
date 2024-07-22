#include <stdlib.h>
#include <stdio.h>
#include <string.h>
int getStr(char* out, char* input)
{
    int len = 0;
    while( *input != '\n')
    {
        *out = *input;
        out++;
        input++;
        len++;
    }
    len++;
    *out = '\0';

    return len;
}

int main()
{
    char source[] = "1 Menu1\n2 Menu2\ngoto 4\n3 Menu3\n4 return\n";
    char items[64];
    char* pt;
    int len;
    char ch;

    pt = strstr(source, "goto");
    printf("%s", pt);
    ch = *(pt + 5);
    printf("%c", ch);
    pt += 6;
    printf("%s", pt);
    pt = strchr(pt, ch);
    printf("%s", pt);
    pt += 2;
    printf("%s", pt);



    return 0;
}