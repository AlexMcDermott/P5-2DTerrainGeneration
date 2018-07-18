let t;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSL);
  t = new Terrain(20, 0.005, 0.25);
  t.draw();
}

function draw() {
  t.smartDraw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  t.draw();
}

function mousePressed() {
  t.pressed();
  return true;
}
