!(function () {

    var modal = document.getElementById("myModal");
  
    var image = document.getElementById("image");
  
    var span = document.getElementsByClassName("close")[0];
  
    image.onclick = function () {
      modal.style.display = "block";
    }
  
    span.onclick = function () {
      modal.style.display = "none";
    }
  
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
  })();