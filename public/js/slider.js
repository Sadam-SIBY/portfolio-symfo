/**
 * Module slid
 */
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
            "correction.png"

        ];
  
        const slider = document.querySelector('section.slider');
  
        let isFirstPass = true;
  
        // Boucle sur le tableau d'images à afficher
        for (const imgName of sliderImagesNames) {
            // On crée une nouvelle balise img
            const newImg = document.createElement('img'); // <img>
            // On lui donne le chemin vers le fichier image
            newImg.src = '/Job/siby/public/images/' + imgName; // <img src="img/...">
            // On lui applique les classes qui vont bien
            newImg.classList.add('slider__img'); // <img src="img/..." class="slider__img">
  
            if (isFirstPass === true) {
                newImg.classList.add('slider__img--current');
            }
  
            // Insère l'élément newImg à la fin de notre élément slider
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



