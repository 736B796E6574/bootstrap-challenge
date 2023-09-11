let track = document.querySelector('.carousel-track');
let slides = Array.from(track.children);
let nextButton = document.querySelector('.carousel-button--right');
let prevButton = document.querySelector('.carousel-button--left');
let slideWidth = slides[0].getBoundingClientRect().width;

// Set the position of slides next to one another
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});

let currentSlide = 0;

nextButton.addEventListener('click', e => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        track.style.transform = 'translateX(-' + slideWidth * currentSlide + 'px)';
    }
});

prevButton.addEventListener('click', e => {
    if (currentSlide > 0) {
        currentSlide--;
        track.style.transform = 'translateX(-' + slideWidth * currentSlide + 'px)';
    }
});
