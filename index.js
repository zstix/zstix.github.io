// I know I could have done this randomly, but I needed this specific set of colors
// to reproduce an effect I created about 20 years ago.
const colors = [
  "#800000",
  "#FF0000",
  "#808000",
  "#FFFF00",
  "#008000",
  "#00FF00",
  "#008080",
  "#00FFFF",
  "#000080",
  "#0000FF",
  "#0000FF",
  "#FF00FF",
  "#808040",
  "#FFFF80",
  "#004040",
  "#00FF80",
  "#0080FF",
  "#80FFFF",
  "#004080",
  "#8080FF",
  "#8000FF",
  "#FF0080",
  "#804000",
  "#FF8040",
];

// TODO: recursion not side-effects
let pos = { x: 300, y: 300 };

// TODO: make this more functional
const drawSquiggle = (ctx, color, length = 100) => {
  const size = 3;
  ctx.fillStyle = color;

  for (let i = 0; i <= length; i++) {
    ctx.fillRect(pos.x, pos.y, size, size);
    pos.x += (Math.round(Math.random() * 2) - 1) * size;
    pos.y += (Math.round(Math.random() * 2) - 1) * size;

    // keep in bounds
    if (pos.x <= 0) pos.x = 0;
    if (pos.y <= 0) pos.y = 0;
    if (pos.x >= window.innerWidth) pos.x = window.innerWidth;
    if (pos.y >= window.innerHeight) pos.y = window.innerHeigh;
  }
};

const render = (container) => {
  // clear out container
  container.innerHTML = "";

  // create canvas / context
  const canvas = document.createElement("canvas");
  container.appendChild(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.backgroundColor = "white";
  const ctx = canvas.getContext("2d");

  // draw!
  const duration = 1000;
  pos.x = 300;
  pos.y = 300;

  for (let i = 0; i <= duration; i++) {
    const index = Math.round(Math.random() * colors.length);
    const color = colors[index];
    drawSquiggle(ctx, color);
  }
};

const backgroundContainer = document.querySelector(".background-container");

render(backgroundContainer);
