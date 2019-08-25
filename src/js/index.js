import plain from './plain';
import rainbow from './rainbow';
import mapSimple from './mapSimple';

import '../scss/main.scss';

const backgrounds = [plain, rainbow/*, mapSimple*/];

const controls = document.querySelector('.controls');
const backgroundContainer = document.querySelector('.background-container');

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

const setActive = (bg, backgroundContainer) => {
  const { color, render } = bg;
  render(backgroundContainer)
  updateColorElements(color);
};

const init = (backgrounds, controls, backgroundContainer) => {
  // create controls
  backgrounds.forEach((bg) => {
    const control = document.createElement('div');
    control.classList.add('control');
    control.classList.add('js-colors');
    control.setAttribute('style', bg.style);
    controls.appendChild(control);
  });

  // render one at random
  // const index = Math.round(Math.random() * backgrounds.length);
  const index = 2;
  setActive(backgrounds[index], backgroundContainer);

  // todo click controls
  controls.querySelectorAll('.control').forEach((control, index) => {
    control.addEventListener('click', (e) => {
      setActive(backgrounds[index], backgroundContainer);
    });
  });
};

init(backgrounds, controls, backgroundContainer);