let escBtns = document.querySelectorAll(".escBtn");
let closeBtn = document.querySelector(".closeBtn");
let startBtn = document.querySelector(".startBtn");    

escBtns[0].addEventListener("click", () => {
    let rvE = document.querySelectorAll(".reviewEvent");
    rvE[0].style.display = "none";
});
escBtns[1].addEventListener("click", () => {
    let rvE = document.querySelectorAll(".reviewEvent");
    rvE[1].style.display = "none";
});
window.addEventListener("DOMContentLoaded", () => {
    let rvE = document.querySelectorAll(".reviewEvent");
    rvE.forEach((RVE) => {
        RVE.style.display = "block";
    });
});

startBtn.addEventListener("click", () => {
    let submenu = document.querySelector(".submenu");
    submenu.style.height = "100%";
});
closeBtn.addEventListener("click", () => {
    let submenu = document.querySelector(".submenu");
    submenu.style.height = "0%";
});