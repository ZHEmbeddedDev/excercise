#include <stdio.h>
#include <iostream>
template <typename T>
class Calculator{
    T add(T a, T b)
    {
        return a + b;
    };
    T subtract(T a, T b)
    {
        return a - b;
    };
};

int main()
{
    union Data{
        long lData;
        unsigned char cData[4]; 
    };
    
    Data endian;

    endian.lData = 0x0D0C0B0A;

    printf("%X", endian.cData[0]);

    return (0);
}