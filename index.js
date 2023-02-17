const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    console.log('shown.bs.modal')
  myInput.focus()
})

const startCard1 = document.querySelector('#start_card_1');
const startCard2 = document.querySelector('#start_card_2');
const startCard3 = document.querySelector('#start_card_3');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateIfVisible(target) {
  if (isElementInViewport(target)) {
    target.classList.add('animate__backInLeft');
  } else {
    target.classList.remove('animate__backInLeft');
  }
}

animateIfVisible(startCard1);
animateIfVisible(startCard2);
animateIfVisible(startCard3);
window.addEventListener('scroll', ()=>animateIfVisible(startCard1));
window.addEventListener('scroll', ()=>animateIfVisible(startCard2));
window.addEventListener('scroll', ()=>animateIfVisible(startCard3));