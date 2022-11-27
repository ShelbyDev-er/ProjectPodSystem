const items = document.querySelectorAll('.slider-item');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
const navItem = document.querySelector('a.toggle-nav');
const menu = document.querySelector('.menu');
const podMenu = document.querySelector('.pod-menu span');
const juiceMenu = document.querySelector('.juice-menu span');
const accessoryMenu = document.querySelector('.accessory-menu span');
const podOneTimesMenu = document.querySelector('.pod-one-times-menu span');
const overlay = document.querySelector('.overlay');
const podOptionsActive = document.querySelector('.pod-options-wrapper')
const juiceOptionsActive = document.querySelector('.juice-options-wrapper')
const accessoryOptionsWrapper = document.querySelector('.accessory-options-wrapper')
const podOneTimesOptionswrapper = document.querySelector('.pod-one-times-options-wrapper')
// HOMEPAGE SLIDER

// END HOMEPAGE SLIDER

// TABS
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})
// END TABS

// PRODUCT DETAIL SLIDER
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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length };
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}
// END PRODUCT DETAIL SLIDER
