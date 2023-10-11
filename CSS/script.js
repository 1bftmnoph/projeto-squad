const imgs = document.getElementById("img");
const img = document.querySelectorALL("#img img");

let idx = 0;

function carrossel(){
    id++;

    if(idx>img.length - 1){
        idx = 0;
    }

    imgs.style.transform = 'translateX(&{-idx*500}px)';

}

setInterval(carrossel, 1800);