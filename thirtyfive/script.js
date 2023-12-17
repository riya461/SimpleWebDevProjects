const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const slides = document.querySelectorAll('.imagez');

let index = 0;

prev.addEventListener('click', () => {
    prevSlide();
    
}
);

next.addEventListener('click', () => {
    nextSlide();
    
}
);

function prevSlide() {
    if (index === 0) {
        index = slides.length - 1;
    } else {
        index--;
    }

    changeSlide();
}

function nextSlide() {
    if (index === slides.length - 1) {
        index = 0;
    } else {
        index++;
    }

    changeSlide();
}

function changeSlide() {
    slides.forEach((slide) => {
    console.log(slide);

        slide.classList.remove('active');
    });

    slides[index].classList.add('active');
}


//