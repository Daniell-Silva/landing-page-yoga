
//POPUP VÍDEO HEADLINE---------------------------------

const bgPop = document.querySelector('.bg-pop-video');
function openVideo() {
    bgPop.style.display = 'block';
}
function closePop() {
    bgPop.style.display = 'none';

}


//POPUP VÍDEO HEADLINE---------------------------------


/*let totalSlides = document.querySelectorAll('testimonial--slider-item').length;
let currentSlide = 0;
let slideWidth = document.querySelector('.testimonial--slider-item').clientWidth;
document.querySelector('.testimonial--slider-width').style.width = `${slideWidth * totalSlides}px`;


function goPrev () {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin()
}

function goNext () {
    currentSlide++;
    if (currentSlide > (totalSlides-1)) {
        currentSlide = 0;
    }
    updateMargin()
}

function updateMargin() {
    let newMargin = (currentSlide * clientWidth);
    document.querySelector('.testimonial--slider-width').style.marginLeft = `-${newMargin}px`;
}*/


