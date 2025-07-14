let number=prompt("enter your number");
if(number>=0){
if(number%2==0){
 alert("number is positive and even.");
}
else{
    alert("number is positive and odd.");
}
}
else if(number<0){
    if(number%2==0){
        alert("number is negative and even.");
    }
    else{
        alert("number is negative and odd.");
    }
}
else{
    alert("number is Zero and even.");
}