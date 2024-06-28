/*document.addEventListener('scroll', function() {
    const section1 = document.querySelector('.section1');
    const text = document.querySelector('.center-text');
    const content = document.querySelector('.content');
    
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;

    if (scrollPosition < windowHeight) {
        text.style.transform = `translateY(-${scrollPosition / 3}px)`;
        section1.style.background = `linear-gradient(to bottom, #ffcccc ${100 - (scrollPosition / windowHeight) * 100}%, #cceeff ${(scrollPosition / windowHeight) * 100}%)`;
        text.style.opacity = 1 - (scrollPosition / windowHeight);
        content.style.opacity = 0;
        content.style.transform = 'translateY(100px)';
    } else {
        text.style.transform = `translateY(-${windowHeight / 3}px)`;
        text.style.opacity = 0;
        content.style.opacity = 1;
        content.style.transform = 'translateY(0)';
    }
});*/


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');


hiddenElements.forEach((el)=>observer.observe(el));
