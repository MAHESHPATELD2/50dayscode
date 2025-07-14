// document.getElementById("myButton").addEventListener("click", function(){ 
// alert("Button was Clicked!");
// });
// document.getElementById("myElement").addEventListener("mouseover",function(){
// this.style.backgroundColor="blue";
// });
// document.getElementById("myElement").addEventListener("mouseout",function(){
//  this.style.backgroundColor="blue";
// });
// document.addEventListener("keydown",function(event){
// console.log("you pressed:"+event.key);
//});
// keyup
// document.getElementById("keyup").addEventListener("keyup",function(event){
// console.log("you pressed:"+event.key);
// });
// Input
// document.getElementById("myinput").addEventListener("input",function(){
//     console.log("Current input:"+this.value);
// });
// change
// document.getElementById("myinput").addEventListener("change",function(){
//     alert("input changed to:"+this.value);
// });
// submit
// document.getElementById("myForm").addEventListener("submit",function(event){
//     event.preventDefault();
//     alert("Form submitted");
// });
// dblclick
// document.getElementById("dblclick").addEventListener("dblclick",function(){
//     alert("double click detected!");
// });
// focus
document.getElementById("myInput").addEventListener("focus",function(){
    this.style.backgroundColor="lightblue";
});
// blur
document.getElementById("myInput").addEventListener("blur",function(){
    this.style.backgroundColor="green";
});
