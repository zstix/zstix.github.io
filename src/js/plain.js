// It's so boring

const color = '#eee';

const render = (container) => {
  // clear out styles
  container.setAttribute('style', '');
  container.innerHTML = '';

  container.setAttribute('style', `background-color: ${color}`);
};

export default {
  color: 'black',
  render,
  style: `background-color: ${color}`
};