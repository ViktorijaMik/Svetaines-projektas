!(function () {

  // Atsidaro knygu virseliu foto
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

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        modal.style.display = "none";
      }
    });
  
  })();


//   jQuery(document).ready(function(){
//     if (jQuery(window).width() < 770) {
//         jQuery("a[data-lightbox]").attr('href', '').css({'cursor': 'pointer', 'pointer-events' : 'none'});
//     }
//  });


