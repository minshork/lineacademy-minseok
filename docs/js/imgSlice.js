let imgSlide = {
    imgCnt: 100 / 7,
    page: 1,
    maxPage: 5,
    imgBox: document.querySelector(".imgBox"),
    curPage: document.querySelector(".curPage"),
    curPageBar: document.querySelector(".cur_pageBar"),

    movingImg(){
        this.imgBox.style.transform = `translateX(${-(this.imgCnt * this.page)}%)`;
        let displayPage = this.page;
        if(displayPage === 0) displayPage = this.maxPage;
        if(displayPage === this.maxPage + 1) displayPage = 1;
        this.curPage.innerHTML = displayPage.toString().padStart(2, '0');
        let displayBar = 20 * this.page;
        if(displayBar === 0) displayBar = 100;
        if(displayBar === 120) displayBar = 20; 
        this.curPageBar.style.width = `${displayBar}%`;
    },

    prev(){
        this.page--;
        this.movingImg();
        clearInterval(imgTimer);
    },

    next(){
        this.page++;
        this.movingImg(); 
        clearInterval(imgTimer);
    },
}
imgSlide.imgBox.addEventListener("transitionend", () => {
    if(imgSlide.page === 0){
        imgSlide.imgBox.style.transition = "none";
        imgSlide.page = imgSlide.maxPage;
        imgSlide.movingImg();
        imgSlide.imgBox.offsetHeight;
        imgSlide.imgBox.style.transition = "all 0.5s linear";
    }
    else if(imgSlide.page === imgSlide.maxPage + 1){
        imgSlide.imgBox.style.transition = "none";
        imgSlide.page = 1;
        imgSlide.movingImg();
        imgSlide.imgBox.offsetHeight;
        imgSlide.imgBox.style.transition = "all 0.5s linear";
    }
});

let imgTimer = setInterval(() => {
    if (imgSlide.page < imgSlide.maxPage + 1) {
        imgSlide.page++;
        imgSlide.movingImg();
    }
}, 4000);



