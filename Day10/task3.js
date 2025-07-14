//loops
let n=5;
for(let i=0;i<=n;i++)
    console.log("iteration",+i);
//even number
for(let i=1;i<=20;i++)
    if(i%2==0)
        console.log(i)
//sum of numbers
let sum=0;
let n1=100;
for(let i=0;i<=n1;i++)
    sum+=i
    console.log(sum);
//multiple of 2  
let i=0;
for(i=0;i<=10;i++){
    console.log(i*3);      
}
//for..of for loop
const fruits=["apple","banana","cherry"];
for(const fruit of fruits){
    console.log(fruit);
}
//while loop
let count=0;
while(count<3){
    console.log("count is:"+count);
    count++;
}
