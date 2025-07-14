//functions
let num=prompt("enter a number:");
let x=function(){
    if(num%2==0){
    return"even number";
    }
    else{
    return"odd number";
    }
}
    console.log(x(num));
//arrow function
let n=prompt("enter a number:");
let e=()=>{
    if(n%2==0){
    return"even number";
    }
    else{
    return"odd number";
    }
}
    console.log(e(n));
    //arrow tarnary
    let n1=9;
    let y=()=>{
        return(n1%2==0)? "even":"odd";
    }
    console.log(y(n1));
    //factorial
    let num1=prompt("enter a number:");
    let res=function(){
         let res=1;
         for(i=1;i<=5;i++){
            res*=i
         }
         return res;
           }
           console.log(res(5));
//
let num2=prompt("enter a number");
let x2=function(){
if(num2%3==0&&num2%5==0){
    return"FizzBuzz";
 }
 else if(num2%3==0){
    return"Fizz";
 }
 else if(num2%5==0){
    return"Buzz";
 }
else{
    return"itself";
}
}
     console.log(x2(num2));
     //
     let num3=prompt("enter a number");
let x3=()=>{
if(num2%3==0&&num2%5==0){
    return"FizzBuzz";
 }
 else if(num3%3==0){
    return"Fizz";
 }
 else if(num3%5==0){
    return"Buzz";
 }
else{
    return"itself";
}
}
     console.log(x3(num3));    
    
