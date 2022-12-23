let curus = document.querySelector(".curus");
let curus2 = document.querySelector(".curus2");


document.addEventListener("mousemove",function(e){
    curus.style.cssText = curus2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});


let moon = document.querySelector("#moon");

moon.onclick = () =>{
    document.body.classList.toggle("ahaded")
}

function loader(){
    document.querySelector('.titile').classList.add('fade-out');
}

function ahaded(){
    setInterval(loader, 3000);
}

window.onload = ahaded;