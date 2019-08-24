import '../scss/main.scss';

const $controls = document.querySelector('.controls');

const updateColorElements = (color = 'black') => {
  const $colorElements = document.querySelectorAll('.js-colors');
  const colorClass = color === 'black'
    ? 'black-on-white'
    : 'white-on-black';

  $colorElements.forEach((el) => {
    console.log('el', el);
    el.classList.remove('black-on-white');
    el.classList.remove('white-on-black');
    el.classList.add(colorClass);
  });
}

updateColorElements();