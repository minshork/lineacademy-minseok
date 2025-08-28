function subOpen(){
    let bigsub = document.querySelector(".bigSub");
    bigsub.style.height = "100%";
    document.body.style.overflow = "hidden";
}

function subEsc(){
    let bigsub = document.querySelector(".bigSub");
    bigsub.style.height = "0";
    document.body.style.overflow = "auto";
}