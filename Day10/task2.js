let name=prompt("enter the name.");
let age=prompt("please enter your age.");
age=Number(age);
switch(true){
    case age<0||Number.isNaN(age):                                                   
      console.log("Invalid age");
    
    break;
    case age>=18 && age<65:
    console.log("eligible for vote");
    break;
    case age>=65:
    console.log("senior citizens"); 
    break;
    case age>=13&&age<=18:
        console.log("not eligible to vote");
        break;
    default:
       console.log("no special categeory");
}
