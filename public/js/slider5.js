
const sliderImagesNames = [
    "oshop1.png",
    "oshop2.png",
];

const slider = document.querySelector('section.slider');

let isFirstPass = true;

for (const imgName of sliderImagesNames) {
    const newImg = document.createElement('img');
    newImg.src = '/Job/portfolio/public/images/' + imgName;
    newImg.classList.add('slider__img'); 
    if (isFirstPass === true) {
        newImg.classList.add('slider__img--current');
    }
    slider.append(newImg);
    isFirstPass = false;
}

imagesElements: [],
currentPosition = 0;


imagesElements = document.querySelectorAll('.slider .slider__img');

const sliderButtons = document.querySelectorAll('.slider__btn');

const previousSliderButton = sliderButtons[0];
previousSliderButton.addEventListener('click', handleClickPreviousSlide);


const nextSliderButton = sliderButtons[1];
nextSliderButton.addEventListener('click', handleClickNextSlide);



function handleClickPreviousSlide(event){
   


    goToSlide(currentPosition - 1);
}

function handleClickNextSlide(event){

    goToSlide(currentPosition + 1);
}

 function goToSlide(newPosition) {

    imagesElements[currentPosition].classList.remove('slider__img--current');

   currentPosition = newPosition;


    if (currentPosition < 0) {
    currentPosition = imagesElements.length - 1;
    }

    if (currentPosition > imagesElements.length - 1) {
        currentPosition = 0;
    }

   imagesElements[currentPosition].classList.add('slider__img--current');
}
