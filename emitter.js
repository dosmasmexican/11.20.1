class Emitter {

    constructor(x, y) {
      this.origin = createVector(x, y+20);
      this.particles = [];
    }
  
    addParticle() {
      this.particles.push(new Particle(this.origin.x, this.origin.y));
    }
  
    applyForce(force) {
      for (let particle of this.particles) {
        particle.applyForce(force);
      }
    }
  
    run() {
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const particle = this.particles[i];
        particle.run();
        if (particle.isDead()) {
          this.particles.splice(i, 1);
        }
      }
    }
  }