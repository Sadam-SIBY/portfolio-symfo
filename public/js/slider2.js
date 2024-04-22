
const slider2 = {
    imagesElements: [],
  
    currentPosition: 0,
  
    init: function () {
  
        slider2.generateImages2();
  
        
        slider2.imagesElements = document.querySelectorAll('.slider2 .slider__img');
  
        slider2.addEvents();
    },
  
    generateImages2: function () {
        const sliderImagesNames2 = [
            "btp.png",
            "exo.png",
            "addQuestion.png",
            "eleve.png",
            "reponse.png",
            "correction.png"

        ];

        const slider2 = document.querySelector('section.slider2');
    
  
        let isFirstPass = true;
  
        for (const imgName of sliderImagesNames2) {

            const newImg = document.createElement('img'); 

            newImg.src = '/Job/siby/public/images/' + imgName;           

            newImg.classList.add('slider__img'); 
  
            if (isFirstPass === true) {
                newImg.classList.add('slider__img--current');
            }

            slider2.append(newImg);
            isFirstPass = false;
        }

       
    },
  
    addEvents: function () {
    
        const slider2Buttons = document.querySelectorAll('.slider__btn');
  

        const previousSliderButton = slider2Buttons[0];
        previousSliderButton.addEventListener('click', slider2.handleClickPreviousSlide);
  
 
        const nextSliderButton = slider2Buttons[1];
        nextSliderButton.addEventListener('click', slider2.handleClickNextSlide);
    },

    handleClickPreviousSlide: function () {
        slider2.goToSlide(slider2.currentPosition - 1);
    },
  
    handleClickNextSlide: function () {
        slider2.goToSlide(slider2.currentPosition + 1);
    },
  
    goToSlide: function (newPosition) {
        slider2.imagesElements[slider2.currentPosition].classList.remove('slider__img--current');
  
        slider2.currentPosition = newPosition;
  
    
        if (slider2.currentPosition < 0) {
            slider2.currentPosition = slider2.imagesElements.length - 1;
        }
  
 
        if (slider2.currentPosition > slider2.imagesElements.length - 1) {
            slider2.currentPosition = 0;
        }
  
        slider2.imagesElements[slider2.currentPosition].classList.add('slider__img--current');
    }
  }