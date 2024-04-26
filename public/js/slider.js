
const slider = {
    imagesElements: [],
  
    currentPosition: 0,
  
    init: function () {
  
        slider.generateImages();
  
        
        slider.imagesElements = document.querySelectorAll('.slider .slider__img');
  
        slider.addEvents();
    },
  
    generateImages: function () {
        const sliderImagesNames = [
            "oboulot.png",
            "connexion.png",
            "profiloboulot.png",
            "bord.png",
            "classe.png",
            "btp.png",
            "exo.png",
            "addQuestion.png",
            "eleve.png",
            "reponse.png",
            "correction.png",
            "oboulotBack.png",
            "oboulotBack2.png",

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
    },
  
    addEvents: function () {
    
        const sliderButtons = document.querySelectorAll('.slider__btn');
  

        const previousSliderButton = sliderButtons[0];
        previousSliderButton.addEventListener('click', slider.handleClickPreviousSlide);
  
 
        const nextSliderButton = sliderButtons[1];
        nextSliderButton.addEventListener('click', slider.handleClickNextSlide);
    },
  

    handleClickPreviousSlide: function () {
        slider.goToSlide(slider.currentPosition - 1);
    },
  
    handleClickNextSlide: function () {
        slider.goToSlide(slider.currentPosition + 1);
    },
  
    goToSlide: function (newPosition) {
        slider.imagesElements[slider.currentPosition].classList.remove('slider__img--current');
  
        slider.currentPosition = newPosition;
  
    
        if (slider.currentPosition < 0) {
            slider.currentPosition = slider.imagesElements.length - 1;
        }
  
 
        if (slider.currentPosition > slider.imagesElements.length - 1) {
            slider.currentPosition = 0;
        }
  
        slider.imagesElements[slider.currentPosition].classList.add('slider__img--current');
    }
  }



