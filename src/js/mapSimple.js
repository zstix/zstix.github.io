const paperColor = '#F1E9DE';

const radToDeg = a => a * 180 / Math.PI;

const point = (x, y) => ({ x, y });

const getAngle = (a, b) =>
  Math.atan2(b.y - a.y, b.x - a.x);

const getDist = (a, b) => {
  const x = a.x - b.x;
  const y = a.y - b.y;
  return Math.sqrt(x * x + y * y);
};

const getPoint = (point, rad, dist) => ({
  x: Math.cos(rad) * dist + point.x,
  y: Math.sin(rad) * dist + point.y
});

const drawLine = (ctx, a, b) => {
  ctx.beginPath();
  ctx.moveTo(a.x, a.y)
  ctx.lineTo(b.x, b.y);
  ctx.stroke();
};

const drawLines = (ctx, points) => {
  points.forEach((point, i) => {
    if (i === 0) return false;
    drawLine(ctx, points[i - 1], point);
  });
};

const drawPoint = (ctx, { x, y }, color = "red") => {
  ctx.strokeStyle = color || "#F00";
  ctx.fillStyle = color || "#FFF";
  ctx.beginPath();
  ctx.arc(x, y, 2, 0, 8 * Math.PI);
  ctx.stroke();
  ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.fillStyle = "#FFF";
}

const drawPoints = (ctx, points) =>
  points.map(p => drawPoint(ctx, p));

const messyLine = (ctx, start, end, seg, mess = 0.1) => {
  const segDist = getDist(start, end) / seg;
  let points = [start];
  for (let i = 1; i < seg; i++) {
    const prevPoint = points[i - 1];
    const a1 = getAngle(prevPoint, end);
    const a2 = a1 + (Math.random() * mess) - (mess / 2);
    points.push(getPoint(prevPoint, a2, segDist));
  }
  points.push(end);
  drawLines(ctx, points);
};

const messyHouse = (ctx, x, y, size, a1 = 0.2, a2 = -0.5, pitch = 0.6, mess = 15) => {
  // house points
  const points = {
    sideTopLeft: point(x, y),
    sideTopRight: point(x + size, y + (size * a1)),
    sideBottomRight: point(x + size, y + size + (size * a1)),
    sideBottomLeft: point(x, y + size),
    frontTopRight: point(x + (size * 2), (y + size * a1) + (size * a2)),
    frontBottomRight: point(x + (size * 2), (y + (size * a1)) + size + (size * a2)),
    roofLeft: point(x + (size * pitch * (pitch * 1.6)), y - (size * pitch)),
    roofRight: point(x + (size * pitch * (pitch * 4)), y - (size))
  }

  // fill area
  ctx.beginPath();
  // side
  ctx.moveTo(points.sideTopLeft.x, points.sideTopLeft.y);
  ctx.lineTo(points.sideTopRight.x, points.sideTopRight.y);
  ctx.lineTo(points.sideBottomRight.x, points.sideBottomRight.y);
  ctx.lineTo(points.sideBottomLeft.x, points.sideBottomLeft.y);
  ctx.lineTo(points.sideTopLeft.x, points.sideTopLeft.y);
  // front
  ctx.moveTo(points.sideTopRight.x, points.sideTopRight.y);
  ctx.lineTo(points.frontTopRight.x, points.frontTopRight.y);
  ctx.lineTo(points.frontBottomRight.x, points.frontBottomRight.y);
  ctx.lineTo(points.sideBottomRight.x, points.sideBottomRight.y);
  ctx.lineTo(points.sideTopRight.x, points.sideTopRight.y);
  // front roof
  ctx.moveTo(points.frontTopRight.x, points.frontTopRight.y);
  ctx.lineTo(points.roofRight.x, points.roofRight.y);
  ctx.lineTo(points.roofLeft.x, points.roofLeft.y);
  ctx.lineTo(points.sideTopRight.x, points.sideTopRight.y);
  ctx.lineTo(points.frontTopRight.x, points.frontTopRight.y);
  // side roof
  ctx.moveTo(points.roofLeft.x, points.roofLeft.y);
  ctx.lineTo(points.sideTopLeft.x, points.sideTopLeft.y);
  ctx.lineTo(points.sideTopRight.x, points.sideTopRight.y);
  ctx.lineTo(points.roofLeft.x, points.roofLeft.y);
  ctx.fill();

  // draw lines
  messyLine(ctx, points.sideTopLeft, points.sideTopRight, mess); // top side
  messyLine(ctx, points.sideTopRight, points.sideBottomRight, mess); // front side
  messyLine(ctx, points.sideBottomRight, points.sideBottomLeft, mess); // bottom side
  messyLine(ctx, points.sideBottomLeft, points.sideTopLeft, mess); // back side
  messyLine(ctx, points.sideTopRight, points.frontTopRight, mess); // front top
  messyLine(ctx, points.sideBottomRight, points.frontBottomRight, mess); // front bottom
  messyLine(ctx, points.frontBottomRight, points.frontTopRight, mess); // front right
  messyLine(ctx, points.sideTopLeft, points.roofLeft, mess); // back roof
  messyLine(ctx, points.sideTopRight, points.roofLeft, mess); // front roof left
  messyLine(ctx, points.frontTopRight, points.roofRight, mess); // front roof right
  messyLine(ctx, points.roofLeft, points.roofRight, mess); // top roof
};

const render = (container) => {
  // clear out styles
  container.setAttribute('style', '');
  container.innerHTML = '';

  container.setAttribute('style', `background-color: ${paperColor}`);

  // create canvas / context
  const canvas = document.createElement('canvas');
  container.appendChild(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');

  // initial art settings
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 2;
  ctx.fillStyle = paperColor;

  // draw!
  messyHouse(ctx, 100, 200, 20)
};

export default {
  color: 'white',
  render,
  style: `background-color: ${paperColor}` // TODO: better icon
};