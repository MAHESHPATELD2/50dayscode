const counterValue=document.getElementById('counterValue');
const decrementBtn=document.getElementById('decrementBtn');
const incrementBtn=document.getElementById('incrementBtn');
let count=0;
incrementBtn.addEventListener('click',function(){
    count++;
    counterValue.innerHTML=count;
});
decrementBtn.addEventListener('click',function(){
    count--;
    counterValue.innerHTML=count;
});
