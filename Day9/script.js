//variables
let name="mahesh";
console.log(name);
const pi=3.14;
console.log(pi);
var age=20;
console.log(age);
//type of variables
console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(pi))
//logical operator
let a=true;
let b=false;
console.log(a&&b);
console.log(a||b);
console.log(!a);
//comparision operator
console.log(5=="5");
console.log(5==="5");
console.log(10>5);
//arithimatic operator
let result1=10+5;
let result2=10-5;
let result3=10*5;
let result4=10/5;
let result5=10%5;
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
//ternary operator
let ages=18;
let status=(ages>=18)?"Adult":"Minor";
console.log(status);
//assignment operator
let x=10;
console.log(x+=5);
console.log(x-=5);
console.log(x*=5);
console.log(x/=5);
console.log(x%=5);
//conditional statements
let agel=18;
if(agel>=18){
console.log("you can vote");
}
else{
console.log("you are too young to vote");
}
//else-if and nested conditions
//else-if
let temperature=25;
if(temperature>30){
    console.log("Its very Hot!");
}
else if(temperature>20){
    console.log("Its Warm");
}
else{
    console.log("Its cold");
}
//Nested if 
let agem=25;
let isstudent=true;
if(agem<30){
    if(isstudent){
        console.log("young student");
    }
    else{
        console.log("young non-student");
    }
}