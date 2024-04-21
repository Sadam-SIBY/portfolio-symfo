const theme = {
    init: function () {
  
        const icon = document.getElementById("icon");
    },
  }
  
  icon.onclick = function(){
      document.body.classList.toggle("dark-theme");
      if(document.body.classList.contains("dark-theme")){
          icon.src ="{{asset('images/sun.png')}}";
      }else{
          icon.src ="{{asset('images/moon.png')}}";
      }
  }