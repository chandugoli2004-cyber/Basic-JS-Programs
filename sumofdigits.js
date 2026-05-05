let N=1234;
let sum=0;

while(N>0){
    let d=N%10;
    sum=sum+d;
    N=Math.floor(N/10);
    
}
console.log("sum of digits:",sum);