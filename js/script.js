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


// fade in fade out tarp puslapių
window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});


