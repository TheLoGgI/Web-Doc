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


// Slide Show timer
setInterval(function() {  
  plusSlides(1)
}, 5000)

function getElementPageHeight(id) {
 return document.getElementById(id).getBoundingClientRect().y


}

// Hide hero video
  const hero = document.querySelector('.hero')
  const video = document.querySelector('#video')

  window.addEventListener('scroll', _ => window.pageYOffset >= window.innerHeight ?  hero.style.position="static" : hero.style.position = "sticky" )
  window.addEventListener('scroll', _ => getElementPageHeight('bruger') <= 0 ?  video.style.position="static" : video.style.position = "sticky" )
  
// Video play knap
const playKnap = document.querySelector('.paralax button')


playKnap.addEventListener('click', event => {

  if (video.paused) {
    video.play()
    playKnap.textContent = '⏸'
  } else {
    video.pause()
    playKnap.textContent = '►'
  }
  
})

// Check for in view
let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.6
}


let callback = (entries, observer) => { 
  entries.forEach(entry => {

    // Hvis vidoen er stoppet
    if (video.paused) {
      // afspil videoen
      video.play()
      video.muted = false
    } 
    
    // Hvis videoen ikke kan ses, stop den
    if (!entry.isIntersecting) {
      video.pause()
    }
 
  });
};

let observer = new IntersectionObserver(callback, options);
observer.observe(video);