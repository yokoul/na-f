let particules = [];
let attracteurs = [];
let repulseurs = [];
let nbParticules = 50;
let nbAttracteurs = 8;
let nbRepulseurs = 15;

function setup() {
  createCanvas(800, 800);
	pixelDensity(2);

  for (let i = 0; i < nbParticules; i++) {
    particules.push(new Particule(random(width), random(height)));
  }
  
  for (let i = 0; i < nbAttracteurs; i++) {
    attracteurs.push(createVector(random(width), random(height)));
  }

  for (let i = 0; i < nbRepulseurs; i++) {
    repulseurs.push(createVector(random(width), random(height)));
  }
  background(20);
}

function draw() {

for (let i = particules.length - 1; i >= 0; i--) {
  let p = particules[i];

  for (let a of attracteurs) {
		push();
		noStroke();
		fill(20, 2);
    ellipse(a.x, a.y, 12, 12);
		pop();
  }

  for (let r of repulseurs) {
		push();
		noStroke();
		fill(20, 4);
    ellipse(r.x, r.y, 16, 16);
		pop();
  }

		for (let p of particules) {
			p.checkProximity(attracteurs, random(125, 170), color(0, 0, 255, 50), color(255, 255, 0, 50));  // Bleu à Jaune
			p.checkProximity(repulseurs, random(120, 160), color(0, 255, 0, 50), color(255, 0, 255, 50));  // Vert à Magenta
    for (let a of attracteurs) {
      p.attracted(a);
    }
    for (let r of repulseurs) {
      p.repulsed(r);
    }
    p.update();
    p.show();
  }
	
  if (p.isDead()) {
    particules.splice(i, 1); 
    particules.push(new Particule(random(width), random(height))); 
  	}
	}
}

class Particule {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.lifespan = 250;  
    this.col = color(0, 0, 255, 50);  
  }

  attracted(target) {
    let force = p5.Vector.sub(target, this.pos);
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    force.setMag(0.55 / distance);
    this.acc.add(force);
  }

  repulsed(target) {
    let force = p5.Vector.sub(this.pos, target); // Notez que nous avons inversé l'ordre ici
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    
    let strength = 50 / (distance * distance); // La force de répulsion est plus forte lorsque la distance est plus courte
    force.setMag(strength);
    this.acc.add(force);

    let rotation = force.copy();
    rotation.rotate(HALF_PI);
    rotation.setMag(strength * 0.5); 
    this.acc.add(rotation);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(3);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifespan -= 2;
  }

  isDead() {
    return this.lifespan <= 0;
  }

	checkProximity(targets, proximityThreshold, startCol, endCol) {
		for (let target of targets) {
			let d = this.pos.dist(target);
			if (d < proximityThreshold) {
				let lerpAmount = map(d, 0, proximityThreshold, 1, 0); // Convertit la distance en une valeur entre 1 et 0
				this.col = lerpColor(startCol, endCol, lerpAmount);
			}
		}
	}

  show() {
    stroke(this.col);
    strokeWeight(0.75);
    point(this.pos.x, this.pos.y);
  }
}

