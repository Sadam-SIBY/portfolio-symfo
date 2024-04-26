const theme = {
    init: function () {
  
        const icon = document.getElementById("icon");
    },
  }
  
  icon.onclick = function(){
      document.body.classList.toggle("dark-theme");
      if(document.body.classList.contains("dark-theme")){
          icon.src ='/Job/portfolio/public/images/sun.png';
      }else{
          icon.src ='/Job/portfolio/public/images/moon.png';
      }
  }