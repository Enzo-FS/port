'use strict'

const upbutton = document.querySelector(".upall");

window.addEventListener('scroll', function(){
    if(this.window.scrollY>500){
        upbutton.style.visibility="visible";
        upbutton.style.transition="1s"
    }
    else{
        upbutton.style.visibility="hidden";
        upbutton.style.transition="0.5s"
        
    }
})