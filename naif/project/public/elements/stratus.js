let stratusCircles = [];
let wisW;
let riseH = 130;
let perspectiveFactor = 0.005;
let doorContent;

function setup() {
  createCanvas(windowWidth, windowHeight);
  wisW = width;
  wisH = height;

  doorContent = createGraphics(wisW, wisH);

  initStratus();

  noLoop();
}

function draw() {
  background(220);
  drawStratus(doorContent, 16);
  initRise();

  image(doorContent, 0, 0);
}

function initStratus() {
  let numberOfCircles = 55;
  for (let i = 0; i < numberOfCircles; i++) {
    let circleX = random(50, width - 50);
    let circleY = height / random(3, 5) + random(-120, 80);
    let r = random(5, 60);
    stratusCircles.push({ x: circleX, y: circleY, r: r });
  }
}

function drawStratus(g, res) {
  let resolution = res;
  let field = [];
  for (let x = 0; x < g.width; x += resolution) {
    field[x / resolution] = [];
    for (let y = 0; y < g.height; y += resolution) {
      field[x / resolution][y / resolution] = densityAtPoint(x, y);
    }
  }

  g.drawingContext.setLineDash([4, 2, 1, 3, 5]);

  for (let x = 0; x < field.length - 1; x++) {
    for (let y = 0; y < field[x].length - 1; y++) {
      let a = createVector(x * resolution, y * resolution);
      let b = createVector((x + 1) * resolution, y * resolution);
      let c = createVector((x + 1) * resolution, (y + 1) * resolution);
      let d = createVector(x * resolution, (y + 1) * resolution);

      let threshold = 0.05;
      let corners = [
        field[x][y] > threshold,
        field[x + 1][y] > threshold,
        field[x + 1][y + 1] > threshold,
        field[x][y + 1] > threshold,
      ];

      drawContour(g, corners, a, b, c, d);
    }
  }

  g.drawingContext.setLineDash([]);
}

function densityAtPoint(x, y) {
  let density = 0;
  for (let circle of stratusCircles) {
    let d = dist(x, y, circle.x, circle.y);
    density += exp(-0.02 * pow(d - circle.r, 2));
  }
  return density;
}

function drawContour(g, corners, a, b, c, d) {
  if (corners[0] === corners[1] && corners[1] === corners[2] && corners[2] === corners[3]) {
    return;
  }

  let points = [a, b, c, d];

  for (let i = 0; i < points.length; i++) {
    if (corners[i] !== corners[(i + 1) % 4]) {
      let p1 = points[i];
      let p2 = points[(i + 1) % 4];
      let midPoint = createVector((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
      g.line(p1.x, p1.y, midPoint.x, midPoint.y);
    }
  }
}

function initRise() {
  let numOfWaves = 10;
  for (let i = 0; i < numOfWaves; i++) {
    let rise = createRise(doorContent, doorContent.height / 2 + i * riseH / 2, i);
    drawRise(doorContent, rise);
  }
}

function createRise(g, y, waveIndex) {
  let points = [];
  let waveAmp = riseH * random(0.15, 0.55);
  let waveFreq = TWO_PI / wisW;

  for (let x = 0; x < wisW; x += 1) {
    let perspectiveOffset = (wisW / 2 - x) * perspectiveFactor * waveIndex;

    let yNoise = noise(x * 0.003, y * 0.005) * riseH;
    let yWave = waveAmp * sin(waveFreq * x);
    let pt = g.createVector(x, y + yNoise + yWave + perspectiveOffset);
    points.push(pt);
  }

  return points;
}

function drawRise(g, rise) {
  let numOfLines = 8;
  for (let i = 0; i < numOfLines; i++) {
    let offset = (riseH / numOfLines) * i;

    let dashLength = map(i, 0, numOfLines - 1, 0, 15);
    g.drawingContext.setLineDash([dashLength, dashLength]);

    g.fill(0, 0, 190, 10);
    g.noFill();
    g.beginShape();
    for (let pt of rise) {
      g.vertex(pt.x, pt.y + offset);
    }
    g.endShape();
  }
  g.drawingContext.setLineDash([]);
}
