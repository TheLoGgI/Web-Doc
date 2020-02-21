// SOURCE: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

setInterval(function() {  
  plusSlides(1)
}, 5000)


  const hero = document.querySelector('.hero')
  const video = document.querySelector('#video')
  const article = document.querySelector('article')

window.addEventListener('scroll', function(e) {
  window.pageYOffset >= window.innerHeight ?  hero.style.position="static" : hero.style.position = "sticky"
  // window.pageYOffset >= window.innerHeight ?  hero.style.position="absolute" : hero.style.position = "sticky"
  

})
