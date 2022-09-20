let menuBtn = document.querySelector('.navigation__btn');
let menu = document.querySelector('.menu');
let navigationLinks = document.querySelector('.navigation__links ') 


    menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        navigationLinks.classList.toggle('active')
    
})

AOS.init();