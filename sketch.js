let emitter;

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(width / 2, 250);
}

function draw() {
  background("#facc28");

  if (mouseIsPressed) {
    fill("#4b991a");
    rect(width / 2 - 10, 260, 20, 160, 40);
    let gravity = createVector(0, 0.1);
    emitter.applyForce(gravity);
    emitter.addParticle();
    emitter.run();
  } else {
    noStroke();
    fill(255, 255);
    circle(width / 2, 250, 100);
    fill("#4b991a");
    rect(width / 2 - 10, 260, 20, 160, 40);
  }
}