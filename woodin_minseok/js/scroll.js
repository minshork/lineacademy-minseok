let cons = false;
function started() {
    let sec1 = document.getElementById("sec1");
    let sec2 = document.getElementById("sec2");
    let sec3 = document.getElementById("sec3");
    let sec4 = document.getElementById("sec4");
    let sec5 = document.getElementById("sec5");
    
    

    
    let navHeight = 60;
    let sy = window.scrollY;
    let s1 = sec1.offsetTop;
    let s2 = sec2.offsetTop;
    let s3 = sec3.offsetTop;
    let s4 = sec4.offsetTop;
    let s5 = sec5.offsetTop;

    // 디버깅
    // let db = document.querySelector(".debug1");
    // db.innerHTML = sy;
    // if(cons === false){
    //     console.log(s1);
    //     console.log(s2);
    //     console.log(s3);
    //     console.log(s4);
    //     console.log(s5);
    //     cons = true;
    // }
    

    if(sy >= (s1 - navHeight) && sy < (s2 - navHeight)){
        let sec1Box = document.querySelector(".sec1Bg");
        sec1Box.style.width = "100%";
    }

    if(sy >= (s2 - navHeight) && sy < (s3 - navHeight)){
        let sec2Box = document.querySelectorAll("#sec2 .sec2");
        let sec2Txbox = document.querySelectorAll(".sec2Tx div");

        sec2Txbox.forEach((txBox, idx) => {
            txBox.style.opacity = "1";
            txBox.style.transform = "translateY(0px)";
            txBox.style.transitionDelay = (0.2 * idx) + "s";
        });
        sec2Box[1].style.transform= "scale(0.9)";
    }
    else{
        let sec2Box = document.querySelectorAll("#sec2 .sec2");
        let sec2Txbox = document.querySelectorAll(".sec2Tx div");

        sec2Txbox.forEach((txBox, idx) => {
            txBox.style.opacity = "0";
            txBox.style.transform = "translateY(30px)";
            txBox.style.transitionDelay = (0.2 * idx) + "s";
        });
        sec2Box[1].style.transform= "scale(1)";
    }

    if(sy >= (s3 - navHeight) && sy < (s4 - navHeight)){
        let cenTx = document.querySelectorAll(".cenBox div");

        cenTx.forEach((cen, idx) => {
            cen.style.opacity = "1";
            cen.style.transform = "translateY(0px)";
            cen.style.transitionDelay = (0.2 * idx) + "s";
        })
        // console.log("성공");
    }
    else{
        let cenTx = document.querySelectorAll(".cenBox div");

        cenTx.forEach((cen, idx) => {
            cen.style.opacity = "0";
            cen.style.transform = "translateY(30px)";
            cen.style.transitionDelay = (0.2 * idx) + "s";
        })
    }

    if(sy >= (s4 - navHeight) && sy < (s5 - navHeight - 60)){
        let nav = document.getElementById("nav");
        let logo = document.querySelector(".wdlogo");
        let sec4Tx = document.querySelectorAll(".sec4Tx div, .sec4Img");


        nav.style.color = "white";
        logo.src = "./woodin/udin_logo2.png";
        sec4Tx.forEach((tx, idx) => {
            tx.style.opacity = "1";
            tx.style.transitionDelay = (0.2 * idx) + "s";
        })
    }
    else{
        let nav = document.getElementById("nav");
        let logo = document.querySelector(".wdlogo");
        let sec4Tx = document.querySelectorAll(".sec4Tx div, .sec4Img");

        nav.style.color = "black";
        logo.src = "./woodin/udin_logo.png";
        sec4Tx.forEach((tx, idx) => {
            tx.style.opacity = "0";
            tx.style.transitionDelay = (0.2 * idx) + "s";
        })

    }
}
started();

window.addEventListener("scroll", started);
