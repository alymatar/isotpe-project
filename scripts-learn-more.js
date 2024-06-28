let lastScrollTop = 0;
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
       
        header.style.top = "-60px"; 
    } else {
       
        header.style.top = "0"; 
    }
    lastScrollTop = st <= 0 ? 0 : st; 
});
