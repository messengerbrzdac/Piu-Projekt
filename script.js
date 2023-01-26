var banner = document.getElementById("banner");
var images = banner.getElementsByTagName("img");
var current = 0;

setInterval(
  function() {
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
    current = (current + 1) % images.length;
    images[current].style.display = "block";
  }, 
  3000
);