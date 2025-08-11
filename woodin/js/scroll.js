function started() {
    let sec1 = document.getElementById("sec1");
    let sec2 = document.getElementById("sec2");

    
    let navHeight = 100;
    let sy = window.scrollY;
    let s1 = sec1.offsetTop;
    let s2 = sec2.offsetTop;

    if(sy >= (s1 - navHeight) && sy < (s2 - navHeight)){
        let sec1Box = document.querySelector(".sec1BG");
        sec1Box.style.width = "100%";
    }

    if(sy >= (s2 - (navHeight + 100))){
        let sec2Box = document.querySelectorAll("#sec2 .sec2");
        let sec2Txbox = document.querySelectorAll(".sec2Tx div");
        // sec2Box[0].style.top = "50%";
        // sec2Box[0].style.opacity = "1";
        sec2Txbox.forEach((txBox, idx) => {
            txBox.style.opacity = "1";
            txBox.style.transform = "translateY(0px)";
            txBox.style.transitionDelay = (0.2 * idx) + "s";
        });
        sec2Box[1].style.transform= "scale(1)";
    }
    else{
        let sec2Box = document.querySelectorAll("#sec2 .sec2");
        let sec2Txbox = document.querySelectorAll(".sec2Tx div");
        // sec2Box[0].style.top = "60%";
        // sec2Box[0].style.opacity = "0";
        sec2Txbox.forEach((txBox, idx) => {
            txBox.style.opacity = "0";
            txBox.style.transform = "translateY(30px)";
            txBox.style.transitionDelay = (0.2 * idx) + "s";
        });
        sec2Box[1].style.transform= "scale(1.05)";
    }
}
started();

window.addEventListener("scroll", started);