class Particle {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.acceleration = createVector(0, 0);
      this.velocity = createVector(random(-2, 2), random(-4, 4));
      this.lifespan = 255;
      this.mass = 1;
    }
  
    run() {
      this.update();
      this.show();
    }
  
    applyForce(force) {
      let f = force.copy();
      f.div(this.mass);
      this.acceleration.add(f);
    }
  
    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
      this.lifespan -= 2.0;
    }
  
    show() {
      noStroke();
      fill(255, this.lifespan);
      circle(this.position.x, this.position.y, 20);
    }
  
    isDead() {
      return this.lifespan < 0.0;
    }
  }