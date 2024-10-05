/*console.log
(document.getElementById("element")
);*/

let n = 0;
console.log(n);

n=n+1;
console.log(n);

function buttonPressed() {
    n=n +30;
    document.getElementById("element").style.left = (n + 100)+"px";
    document.getElementById("element").style. top= (n +50)+"px"
}


function neuesElement() {
    let div = document.createElement("div");
    div.classList.add('random');
    document.body.appendChild(div);
}

function starteAnimation() {
    let element = document.getElementById('kreis2');
    element.style.animationPlayState = "running";
   
}

window.addEventListener("scroll", starteAnimation);