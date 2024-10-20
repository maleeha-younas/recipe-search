document.getElementById('searchBar').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      var menuSection = document.getElementById('menu');
      if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth' });
      }
  }
});


var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: "smooth" });
  }
}



// buttons onclick 
document.getElementById('biryaniButton').addEventListener('click', function() {
  var allSlides = document.querySelectorAll('.swiper-slide');

  for (var i = 0; i < allSlides.length; i++) {
    allSlides[i].style.display = 'none';
  }
  var vegetableCurrySlide = document.querySelector('#biryaniDiv');
  if (vegetableCurrySlide) {
    vegetableCurrySlide.closest('#biryaniDiv').style.display = 'block';
    vegetableCurrySlide.closest('#gallery').scrollIntoView({ behavior: 'smooth' });
  }
});

document.getElementById('biryaniButton').addEventListener('click', function() {
  var allSlides = document.querySelectorAll('.swiper-slide');

  for (var i = 0; i < allSlides.length; i++) {
    allSlides[i].style.display = 'none';
  }
  var vegetableCurrySlide = document.querySelector('#biryaniDiv');
  if (vegetableCurrySlide) {
    vegetableCurrySlide.closest('#biryaniDiv').style.display = 'block';
    vegetableCurrySlide.closest('#gallery').scrollIntoView({ behavior: 'smooth' });
  }
});















