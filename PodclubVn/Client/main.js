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

let mybutton = document.getElementById("goTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
