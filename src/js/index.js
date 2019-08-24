import plain from './plain';
import rainbow from './rainbow';

import '../scss/main.scss';

const controls = document.querySelector('.controls');
const backgroundContainer = document.querySelector('.background-container');
const backgrounds = [plain, rainbow];

const updateColorElements = (color = 'black') => {
  const colorElements = document.querySelectorAll('.js-colors');
  const colorClass = color === 'black'
    ? 'black-on-white'
    : 'white-on-black';

  colorElements.forEach((el) => {
    el.classList.remove('black-on-white');
    el.classList.remove('white-on-black');
    el.classList.add(colorClass);
  });
}

const init = (backgrounds, controls, backgroundContainer) => {
  // create controls
  backgrounds.forEach((bg) => {
    const control = document.createElement('div');
    control.classList.add('control');
    control.classList.add('js-colors');
    control.setAttribute('style', bg.style);
    controls.appendChild(control);
  });

  // render one
  const { color, render } = backgrounds[0];
  render(backgroundContainer)
  updateColorElements(color);

  // todo click controls
};

init(backgrounds, controls, backgroundContainer);