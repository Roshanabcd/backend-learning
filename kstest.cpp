#include<stdio.h>
#include<stdlib.h>
#include<math.h>
#include<time.h>

#define N 20
 
int main(){
    double U[N];
    double Dplus=0,Dminus=0,D;
    int i ,j;
    srand(time(NULL));
    for(i=0;i<N;i++){
        U[i]=(double)rand()/RAND_MAX;

    }
    for (i=0;i<N-1;i++)
    {
        for(j=i+1;j<N;j++)
        {
            if(U[i]>U[j])
            {
                double temp =U[i];
                U[i]=U[j];
                U[j]=temp;

            }
        }
    }
    for (i=0;i<N;i++)
    {
        double d1=((i+1)/(double)N)-U[i];
        double d2=U[i]-(i/(double)N);

        if(d1>Dplus)
        Dplus=d1;
        if(d2>Dminus)
        Dminus=d2;

    }
    D=(Dplus>Dminus)?Dplus:
Dminus;
printf("D+=%f\n",Dplus);
printf("D-=%f\n",Dminus);
printf("D=%f\n",D);
return 0;
}
