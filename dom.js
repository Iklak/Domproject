const decrementbtn=document.getElementById("decrement");
const incrementbtn=document.getElementById("increment");
const display=document.getElementById("display");
const reset=document.getElementById(reset);

decrementbtn.addEventListener('click',()=>{
    const value=Number(display.innerText);
    if(value>0){
        display.innerText=value-1;
    }else{
        alert("negative number");
    }
})