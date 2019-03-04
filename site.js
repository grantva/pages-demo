      let counter = 0;
      const btn = document.getElementById("btn");
      const body = document.getElementsByTagName("body")[0];
      btn.addEventListener("click", swapColors);
      
      function swapColors(){
        body.setAttribute("class", counter % 2 == 0 ? "dark" : "light");
        counter++;
      }
