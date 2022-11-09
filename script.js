const slide = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;


const nextSlide = () => {
    const active = document.querySelector('.active');
    active.classList.remove('active');

    if (active.nextElementSibling) {
        active.nextElementSibling.classList.add('active');
    } else {
        slide[0].classList.add('active')
    }

    setTimeout (() => active.classList.remove('active'))
}

const prevSlide = () => {
    const active = document.querySelector('.active');
    active.classList.remove('active');

    if (active.previousElementSibling) {
        active.previousElementSibling.classList.add('active');
    } else {
        slide[slide.length- 1].classList.add('active')
    }

    setTimeout (() => active.classList.remove('active'))
}


next.addEventListener ('click', e=> {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide,intervalTime)
    }
})

prev.addEventListener ('click', e=> {
    prevSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide,intervalTime)
    }
})

if(auto) {
    slideInterval = setInterval(nextSlide,intervalTime)
}

