const color = '#eee';

const render = (container) => {
  // clear out container
  container.innerHTML = '';

  // make a blank boring background
  const div = document.createElement('div');
  container.appendChild(div);
  div.style.width = '100%';
  div.style.height = '100%';
  div.style.backgroundColor = color;
};

export default {
  color: 'black',
  render,
  style: `background-color: ${color}`
};