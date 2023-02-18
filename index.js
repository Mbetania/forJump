function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
let cards = document.querySelectorAll('.carta');

function checkCards() {
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    if (isElementInViewport(card)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  }
}

// Ejecute la función en la carga de la página y cada vez que se desplaza la página

window.addEventListener('scroll', checkCards);

// const section = document.querySelector('#info-container');
// const cartContainer = document.querySelector('.cart-container');

// section.addEventListener('mouseover', () => {
//   cartContainer.classList.add('animate__backInLeft');
// });

// section.addEventListener('mouseout', () => {
//   cartContainer.classList.remove('animate__backInLeft');
// });
