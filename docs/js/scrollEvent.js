document.querySelector(".TOP").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

document.addEventListener("DOMContentLoaded", () => {
    let ib = document.querySelector("#sec1");
    ib.style.opacity = "1";
    ib.style.scale = "1";
})

function scr_evt(){
    let winscr = window.scrollY;

    let e1 = document.getElementById("e1");
    let e1Top = e1.offsetTop;

    let e2 = document.getElementById("e2");
    let e2_arr = document.querySelectorAll(".sec2Box");
    let e2Top = e2.offsetTop;
    
    let e3 = document.getElementById("e3");
    let e3_arrt = document.querySelectorAll(".prdTextBox");
    let e3_arri = document.querySelectorAll(".prdImgBox");
    let e3Top = e3.offsetTop + 100;

    let e4 = document.getElementById("e4");
    let e4_arr = document.querySelectorAll(".e4_arr");
    let e4Top = e4.offsetTop + 1240;

    let e5 = document.getElementById("e5");
    let e5_arr = document.querySelectorAll(".sec4img");
    let e5Top = e5.offsetTop + 2200;


    // e1
    if(winscr > e1Top && winscr < e1Top + 1000){
        e1.style.scale = "1";
        e1.style.opacity = "1";
    }
    else{
        e1.style.scale = "0";
        e1.style.opacity = "0";
    }

    // e2
    if(winscr > e2Top && winscr < e2Top + 1000){
        e2_arr[0].style.transform = "translateX(0)";
        e2_arr[0].style.opacity = "1";

        e2_arr[1].style.transform = "translateY(0)";
        e2_arr[1].style.opacity = "1";

        e2_arr[2].style.transform = "translateY(0)";
        e2_arr[2].style.opacity = "1";

        e2_arr[3].style.transform = "translateY(0)";
        e2_arr[3].style.opacity = "1";

        e2_arr[4].style.transform = "translateX(0)";
        e2_arr[4].style.opacity = "1";
    }
    else{
        e2_arr[0].style.transform = "translateX(-15%)";
        e2_arr[0].style.opacity = "0";

        e2_arr[1].style.transform = "translateY(15%)";
        e2_arr[1].style.opacity = "0";

        e2_arr[2].style.transform = "translateY(-15%)";
        e2_arr[2].style.opacity = "0";

        e2_arr[3].style.transform = "translateY(15%)";
        e2_arr[3].style.opacity = "0";

        e2_arr[4].style.transform = "translateX(15%)";
        e2_arr[4].style.opacity = "0";
    }

    // e3
    if(winscr > e3Top && winscr < e3Top + 1000){
        e3_arri.forEach((e3_arr) => {
            e3_arr.style.opacity = "1";
            e3_arr.style.scale = "1";
        })

        e3_arrt[0].style.transform = "translateX(0)";
        e3_arrt[0].style.opacity = "1";

        e3_arrt[1].style.transform = "translateX(0)";
        e3_arrt[1].style.opacity = "1";
    }
    else{
            e3_arri.forEach((e3_arr) => {
            e3_arr.style.opacity = "0";
            e3_arr.style.scale = "0";
        })

        e3_arrt[0].style.transform = "translateX(-30%)";
        e3_arrt[0].style.opacity = "0";

        e3_arrt[1].style.transform = "translateX(30%)";
        e3_arrt[1].style.opacity = "0";
    }

    // e4
    if(winscr > e4Top && winscr < e4Top + 800){
        e4.style.opacity = "1";
        e4.style.transform = "rotateX(0)";

        e4_arr[0].style.transform = "translateX(0)";
        e4_arr[0].style.opacity = "1";
    }
    else{
        e4.style.opacity = "0";
        e4.style.transform = "rotateX(-90deg)";

        e4_arr[0].style.transform = "translateX(15%)";
        e4_arr[0].style.opacity = "0";
    }
    if(winscr > e4Top + 200 && winscr < e4Top + 1000){
        let e4_2 = document.getElementById("e4_2");

        e4_2.style.opacity = "1";
        e4_2.style.transform = "rotateX(0)";

        e4_arr[1].style.transform = "translateX(0)";
        e4_arr[1].style.opacity = "1";
    }
    else{
        let e4_2 = document.getElementById("e4_2");

        e4_2.style.opacity = "0";
        e4_2.style.transform = "rotateX(-90deg)";

        e4_arr[1].style.transform = "translateX(15%)";
        e4_arr[1].style.opacity = "0";
    }
    if(winscr > e4Top + 300 && winscr < e4Top + 1100){
        e4_arr[2].style.transform = "translateX(0)";
        e4_arr[2].style.opacity = "1";
    }
    else{
        e4_arr[2].style.transform = "translateX(15%)";
        e4_arr[2].style.opacity = "0";
    }

    // e5
    if(winscr > e5Top){
        e5.style.transform = "rotateX(0)";
        e5.style.opacity = "1";

        if(winscr > e5Top + 100){
            let e5_2 = document.getElementById("e5_2");

            e5_2.style.transform = "rotateX(0)";
            e5_2.style.opacity = "1";
        }
        else{
            let e5_2 = document.getElementById("e5_2");

            e5_2.style.transform = "rotateX(-90edg)";
            e5_2.style.opacity = "0";
        }

        if(winscr > e5Top + 200){
            e5_arr.forEach((e5arr, i) => {
                e5arr.style.transitionDelay = `${0.3 * i}s`;
                e5arr.style.transform = "rotateY(0)";
                e5arr.style.opacity = "1";

                e5arr.addEventListener("mouseenter", () => {
                    e5arr.style.transitionDelay = `0.1s`;
                    e5arr.style.transform = "translateY(-10%)";
                })
                e5arr.addEventListener("mouseleave", () => {
                    e5arr.style.transitionDelay = `0.1s`;
                    e5arr.style.transform = "translateY(0)";
                })
            })
        }
        else{
            e5_arr.forEach((e5arr) => {
                e5arr.style.transform = "rotateY(180deg)";
                e5arr.style.opacity = "0";
            })
        }
    }
    else{
        e5.style.transform = "rotateX(-90deg)";
        e5.style.opacity = "0";
    }

    // 디버깅용
    // let topiner = document.querySelector(".TOP");
    // topiner.innerHTML = winscr;
    // console.log(e4Top);
}

window.addEventListener("scroll", scr_evt);