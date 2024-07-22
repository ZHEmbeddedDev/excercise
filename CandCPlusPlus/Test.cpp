#include <stdio.h>
#include <vector>
#include <iostream>
#include <bits/stdc++.h>
using namespace std;

template <class T> class Array {
private:
    T* ptr;
    int size;

public:
    Array(T arr[], int s);
    void print();
};

template <class T> Array<T>::Array(T arr[], int s)
{
    ptr = new T[s];
    size = s;
    for (int i = 0; i < size; i++)
        ptr[i] = arr[i];
}

template <class T> void Array<T>::print()
{
    for (int i = 0; i < size; i++)
        cout << " " << *(ptr + i);
    cout << endl;
}

class solution
{
public:    
public:
    int getDigit(char c)
    {
        int ret = c - '0';
        if(ret >= 0 && ret <= 9)
            return ret;
        else
            return -1; 
    };

    int myAtoi(string s) {
       long result = 0;
       int temp;

       int len = s.length();
       int index = 0;
       int num;
       char neg = 0;
       char flag = 0;

        while(index < len )
        {
            if(!flag)
            {
                if(s[index] == ' ' || s[index] == '+')
                {
                    index++;
                    continue;
                }
                else if(s[index] == '-')
                {
                    index++;
                    neg = 1;
                    continue;
                }
            }
            
            {
                num = getDigit(s[index]);
                if(num < 0)
                    break;
                else
                {
                    flag = 1;
                    result = result * 10 + num;
                }
                index++;
            }
        }

        if(neg)
            result = -result;
        return (int)result; 
    }
    
    void merge(vector<int>&num1, int m, vector<int>&num2, int n)
    {
        if (m >= num1.size())
            m = num1.size();

        if( n >= num2.size())
            n = num2.size();

        for( int i = 0; i < m - num1.size(); i++)
            num1.pop_back();

        for( auto it = num2.cbegin(); it!= num2.cbegin() + n; it++)
        {
            num1.push_back(*it);
        }

        for(auto it = num1.cbegin(); it!= num1.cend(); it++)
        {
            cout << *it << endl;
        }
    };

    bool isPalindrome(int x) {
        char s[64];
        int index = 0;
        bool ret = true;
        bool neg = false;

        if (x < 0)
        {
            x = -x;
            neg = true;
        }

        while(x)
        {
            s[index] = '0' + (x % 10);
            x = x / 10;
            index++; 
        }

        if (neg)
        {
            s[index] = '-';
            index++;
        }

        cout << s << endl;
        for(int i = 0; i < index / 2; i++)
        {
            if(s[i] != s[index - 1 - i])
                ret = false;
        }
        
        return ret;
    }
    // void rotate( int size, int img[][])
    // {
    //     int rotate[size][size];

    //     for(int i = 0; i < size; i++)
    //     {
    //         for(int j = 0; j < size; j++)
    //             rotate[i][j] = img[size - 1 -j][size - 1 - i]
    //     } 

    //     img = rotate;
    // };
    // int reverse(int x) {
    //     char neg = 0;
    //     int reverse = 0;
    //     int temp;
        
    //     if(x < 0)
    //     {
    //         // set flag if x is a negtive number
    //         neg = 1;
    //         x = -x;
    //     }
        
        
    //     while(x)
    //     {
    //         temp = x % 10 ;
    //         reverse = reverse * 10 + temp;
    //         x /= 10;
    //     }
    //     if(neg)
    //         reverse = -reverse;
    //     return reverse;
    // };
};


int main()
{
    solution s;
    s.isPalindrome(-121);
    // cout << s.reverse(123) << endl;
    // cout << s.reverse(-123) << endl;
    // cout << s.reverse(120) << endl;
    // int size = 3;
    // int img[size][size] = {
    //     { 1, 2, 3 },
    //     { 4, 5, 6 },
    //     { 7, 8, 9 }
    // };

    // for(int i = 0; i < size; i++ )
    // {
    //     for(int j = 0; j < size; j++ )
    //         printf("%d", img[i][j]);
    // }

    // s.rotate(size, img);
    // for(int i = 0; i < size; i++ )
    // {
    //     for(int j = 0; j < size; j++ )
    //         printf("%d", img[i][j]);
    // }


    // vector<int>number1 = {7,8,9,1,3,2,4};
    // vector<int>number2 = {1,8,9,10};

    // s.merge(number1, 2, number2, 2);

    // int arr[5] = { 1, 2, 3, 4, 5 };
    // Array<int> a(arr, 5);
    // a.print();
    // float floatArr[4] = { 1.3, 2.4, 5.33, 2.09};
    // Array<float> b(floatArr, 4);
    // b.print();

    return 0;
}
// int main()
// {
//     union Data{
//         long lData;
//         unsigned char cData[4]; 
//     };
    
//     Data endian;

//     endian.lData = 0x0D0C0B0A;

//     printf("%X", endian.cData[0]);

//     return (0);
// }
