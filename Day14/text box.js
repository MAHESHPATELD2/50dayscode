document.getElementById("myInput").addEventListener("input",function(){
    document.getElementById("para").innerHTML=this.value;
});
 document.getElementById("para").addEventListener("dblclick",function(){
 this.style.color="yellow";
});
document.getElementById("myInput").addEventListener("focus",function(){
    this.style.backgroundColor="lightblue";
});
document.getElementById("myInput").addEventListener("dblclick",function(){
alert("double click detected!");
});
document.getElementById("myInput").addEventListener("blur",function(){
    this.style.backgroundColor="green";
});
// 