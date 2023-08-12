// CLASS //
class Door {
    constructor(x, y, numDoors = 1, orientation = 'horizontal', color = [0, 0, 0]) {
        this.x = x;
        this.y = y;
        this.numDoors = numDoors;
        this.orientation = orientation;
        this.color = color;
        this.g = doorContent;
    }

    drawDoor(color, doorBd) {
        push();
        translate(this.x, this.y);
        noFill();
        stroke(color);
        strokeWeight(doorBd);

        let w = (this.orientation == 'horizontal') ? doorW * this.numDoors + gap * (this.numDoors - 1) : doorW;
        let h = (this.orientation == 'vertical') ? doorH * this.numDoors + gap * (this.numDoors - 1) : doorH;

        beginShape();
        vertex(-doorW / 2, -doorH);
        vertex(doorW / 2, -doorH);
        vertex(doorW / 2, 0);
        vertex(-doorW / 2, 0);
        endShape(CLOSE);
        pop();
    }

    drawCtx(col1, col2, doorBd) {
        let cadrPl = random(-30, 30) * m;
        let cadrPr = random(-30, 30) * m;
        let cadrPh = random(-30, 30) * m;

        push();
        translate(this.x, this.y);
        stroke(col1);
        strokeWeight(doorBd / 2);
        fill(col2);
        if (random() < 0.5) {
            beginShape();
            vertex(-doorW / 2, -doorH);
            vertex(-doorW / 2 - cadrPl, -doorH - cadrPl);
            vertex(-doorW / 2 - cadrPl, 0 - cadrPl);
            vertex(-doorW / 2, 0);
            endShape(CLOSE);
        }
        if (random() < 0.5) {
            beginShape();
            vertex(doorW / 2, -doorH);
            vertex(doorW / 2 + cadrPr, -doorH - cadrPr);
            vertex(doorW / 2 + cadrPr, 0 - cadrPr);
            vertex(doorW / 2, 0);
            endShape(CLOSE);
        }
        if (random() < 0.15) {
            beginShape();
            vertex(-doorW / 2, -doorH);
            vertex(-doorW / 2 - cadrPh, -doorH - cadrPh);
            vertex(doorW / 2 + cadrPh, -doorH - cadrPh);
            vertex(doorW / 2, -doorH);
            endShape(CLOSE);
        }
        pop();
    }

    // // Fonction pour dessiner la structure
    // drawStruct(color, strokeW) {
    //     push();
    //     stroke(color);
    //     strokeWeight(strokeW);

    //     drawContinuousLine(this.x - doorW / 2, this.y - doorH, this.x - doorW / 2 + depth, this.y - doorH - depth, 50);
    //     drawContinuousLine(this.x + doorW / 2, this.y - doorH, this.x + doorW / 2 + depth, this.y - doorH - depth, 50);
    //     drawContinuousLine(this.x - doorW / 2 + depth, this.y - doorH - depth, this.x + doorW / 2 + depth, this.y - doorH - depth, 50);
    //     drawContinuousLine(this.x + doorW / 2 + depth, this.y - doorH - depth, this.x + doorW / 2 + depth, doorH + depth, 50);

    //     pop();
    // }

    // // Fonction pour dessiner la structure inversée
    // drawStructInv(color, strokeW) {
    //     push();
    //     stroke(color);
    //     strokeWeight(strokeW);

    //     drawContinuousLine(this.x - doorW / 2, this.y - doorH, this.x - doorW / 2 + depth, this.y - doorH - depth, 50);
    //     drawContinuousLine(this.x + doorW / 2, this.y - doorH, this.x + doorW / 2 + depth, this.y - doorH - depth, 50);
    //     drawContinuousLine(this.x - doorW / 2 + depth, this.y - doorH - depth, this.x + doorW / 2 + depth, this.y - doorH - depth, 50);
    //     drawContinuousLine(this.x + doorW / 2 + depth, this.y - doorH - depth, this.x + doorW / 2 + depth, doorH + doorH / 1.75 , 50);

    //     pop();
    // }

    drawStruct(color, strokeW) {
        push();
        stroke(color);
        strokeWeight(strokeW);
        rndBend(this.x - doorW / 2, this.y - doorH, this.x - doorW / 2 + depth, this.y - doorH - depth, deviation);
        rndBend(this.x + doorW / 2, this.y - doorH, this.x + doorW / 2 + depth, this.y - doorH - depth, deviation);
        rndBend(this.x - doorW / 2 + depth, this.y - doorH - depth, this.x + doorW / 2 + depth, this.y - doorH - depth, deviation);
        rndBend(this.x + doorW / 2 + depth, this.y - doorH - depth, this.x + doorW / 2 + depth, doorH + depth, deviation);
        pop();
    }

    drawStructInv(color, strokeW) {
        push();
        stroke(color);
        strokeWeight(strokeW);
        rndBend(this.x - doorW / 2, this.y - doorH, this.x - doorW / 2 + depth, this.y - doorH - depth, deviation);
        rndBend(this.x + doorW / 2, this.y - doorH, this.x + doorW / 2 + depth, this.y - doorH - depth, deviation);
        rndBend(this.x - doorW / 2 + depth, this.y - doorH - depth, this.x + doorW / 2 + depth, this.y - doorH - depth, deviation);
        rndBend(this.x + doorW / 2 + depth, this.y - doorH - depth, this.x + doorW / 2 + depth, doorH + doorH / 1.75 , deviation);
        pop();
    }

    drawDoorShdw(color) {
        let shdwA = noise(this.y * 0.1);
        push();
        translate(this.x, this.y);
        noFill();
        stroke(color);
        strokeWeight(doorBd);
        beginShape();
        stroke(random(0, 20), random(30, 50));
        drawingContext.setLineDash([0, 2 * m, 3 * m]);
        vertex(-doorW / 2, 0);
        rndBendVertex(-doorW / 2, 0, doorW / 2, 0, deviation);
        vertex(doorW / 2, 0);
        rndBendVertex(doorW / 2, 0, doorW / 2 - shdwL * shdwA, shdwL / 2, deviation);
        vertex(doorW / 2 - shdwL * shdwA, shdwL / 2);
        rndBendVertex(doorW / 2 - shdwL * shdwA, shdwL / 2, -doorW / 2 - shdwL * shdwA, shdwL / 2, deviation);
        vertex(-doorW / 2 - shdwL * shdwA, shdwL / 2);
        rndBendVertex(-doorW / 2 - shdwL * shdwA, shdwL / 2, -doorW / 2, 0, deviation);
        vertex(-doorW / 2, 0);
        endShape(CLOSE);
        pop();
    }

    drawDoorShdwInv(color) {
        let shdwA = noise(this.y * 0.1);
        push();
        translate(this.x, this.y);
        stroke(color);
        strokeWeight(doorBd);
        fill(random(40, 80), random(45, 65));
        stroke(random(40, 80), random(45, 65));
        drawingContext.setLineDash([0 * m, 2 * m, 3 * m]);
        beginShape();
        vertex(-doorW / 2, 0);
        rndBendVertex(-doorW / 2, 0, doorW / 2, 0, deviation);
        vertex(doorW / 2, 0);
        rndBendVertex(doorW / 2, 0, doorW / 2 - shdwL * shdwA, -shdwL / 2, deviation);
        vertex(doorW / 2 - shdwL * shdwA, -shdwL / 2);
        rndBendVertex(doorW / 2 - shdwL * shdwA, -shdwL / 2, -doorW / 2 - shdwL * shdwA, -shdwL / 2, deviation);
        vertex(-doorW / 2 - shdwL * shdwA, -shdwL / 2);
        rndBendVertex(-doorW / 2 - shdwL * shdwA, -shdwL / 2, -doorW / 2, 0, deviation);
        vertex(-doorW / 2, 0);
        endShape(CLOSE);
        pop();
    }

    copyContent() {
        push();
        let doorWb = this.w;
        let doorHb = this.h;
        copy(doorContent, int(this.x) - int(doorW), int(this.y - doorH), int(doorW), int(doorH), int(this.x - doorW / 2), int(this.y - doorH), int(doorW), int(doorH));
        pop();
    }
}

class MultiDoor {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y + 3.5 * m;
        this.w = w;
        this.h = h - 3.5 * m;
        this.color = color;
        this.g = doorContent;
    }

    drawDoor(color, doorBd) {
        push();
        translate(this.x, this.y);
        noFill();
        stroke(color);
        strokeWeight(doorBd);

        let doorWb = this.w;
        let doorHb = this.h;

        beginShape();
        vertex(-doorWb / 2, -doorHb);
        vertex(doorWb / 2, -doorHb);
        vertex(doorWb / 2, 0);
        vertex(-doorWb / 2, 0);
        endShape(CLOSE);

        pop();
    }

    drawCtx(col1, col2, doorBd) {
        let cadrPl = random(-50, 50);
        let cadrPr = random(-50, 50);
        let cadrPh = random(-50, 50);

        let doorWb = this.w;
        let doorHb = this.h;

        push();
        translate(this.x, this.y);
        stroke(col1);
        strokeWeight(doorBd / 2);
        fill(col2);
        if (random() < 0.5) {
            beginShape();
            vertex(-doorWb / 2, -doorHb);
            vertex(-doorWb / 2 - cadrPl, -doorHb - cadrPl);
            vertex(-doorWb / 2 - cadrPl, 0 - cadrPl);
            vertex(-doorWb / 2, 0);
            endShape(CLOSE);
        }
        if (random() < 0.5) {
            beginShape();
            vertex(doorWb / 2, -doorHb);
            vertex(doorWb / 2 + cadrPr, -doorHb - cadrPr);
            vertex(doorWb / 2 + cadrPr, 0 - cadrPr);
            vertex(doorWb / 2, 0);
            endShape(CLOSE);
        }
        if (random() < 0.15) {
            beginShape();
            vertex(-doorWb / 2, -doorHb);
            vertex(-doorWb / 2 - cadrPh, -doorHb - cadrPh);
            vertex(doorWb / 2 + cadrPh, -doorHb - cadrPh);
            vertex(doorWb / 2, -doorHb);
            endShape(CLOSE);
        }
        pop();
    }

    drawStruct(color, strokeW) {
        let doorWb = this.w;
        let doorHb = this.h;

        push();
        stroke(color);
        strokeWeight(strokeW);
        rndBend(this.x - doorWb / 2, this.y - doorHb, this.x - doorWb / 2 + depth, this.y - doorHb - depth, deviation);
        rndBend(this.x + doorWb / 2, this.y - doorHb, this.x + doorWb / 2 + depth, this.y - doorHb - depth, deviation);
        rndBend(this.x - doorWb / 2 + depth, this.y - doorHb - depth, this.x + doorWb / 2 + depth, this.y - doorHb - depth, deviation);
        rndBend(this.x + doorWb / 2 + depth, this.y - doorHb - depth, this.x + doorWb / 2 + depth, doorH + depth, deviation);
        pop();
    }

    drawStructInv(color, strokeW) {
        let doorWb = this.w;
        let doorHb = this.h;

        push();
        stroke(color);
        strokeWeight(strokeW);
        rndBend(this.x - doorWb / 2, this.y - doorHb, this.x - doorWb / 2 + depth, this.y - doorHb - depth, deviation);
        rndBend(this.x + doorWb / 2, this.y - doorHb, this.x + doorWb / 2 + depth, this.y - doorHb - depth, deviation);
        rndBend(this.x - doorWb / 2 + depth, this.y - doorHb - depth, this.x + doorWb / 2 + depth, this.y - doorHb - depth, deviation);
        rndBend(this.x + doorWb / 2 + depth, this.y - doorHb - depth, this.x + doorWb / 2 + depth, doorHb + doorHb / 1.75 , deviation);
        pop();
    }
    

    drawDoorShdw(color) {
        let shdwA = noise(this.y * 0.1);
        let doorWb = this.w;
        let doorHb = this.h;

        push();
        translate(this.x, this.y);
        noFill();
        stroke(color);
        strokeWeight(doorBd);
        beginShape();
        stroke(random(0, 20), random(30, 50));
        drawingContext.setLineDash([0, 2 * m, 3 * m]);
        vertex(-doorWb / 2, 0);
        rndBendVertex(-doorWb / 2, 0, doorWb / 2, 0, deviation);
        vertex(doorWb / 2, 0);
        rndBendVertex(doorWb / 2, 0, doorWb / 2 - shdwL * shdwA, shdwL / 2, deviation);
        vertex(doorWb / 2 - shdwL * shdwA, shdwL / 2);
        rndBendVertex(doorWb / 2 - shdwL * shdwA, shdwL / 2, -doorWb / 2 - shdwL * shdwA, shdwL / 2, deviation);
        vertex(-doorWb / 2 - shdwL * shdwA, shdwL / 2);
        rndBendVertex(-doorWb / 2 - shdwL * shdwA, shdwL / 2, -doorWb / 2, 0, deviation);
        vertex(-doorWb / 2, 0);
        endShape(CLOSE);
        pop();
    }

    drawDoorShdwInv(color) {
        let shdwA = noise(this.y * 0.1);
        let doorWb = this.w;
        let doorHb = this.h;

        push();
        translate(this.x, this.y);
        stroke(color);
        strokeWeight(doorBd);
        fill(random(40, 80), random(45, 65));
        stroke(random(40, 80), random(45, 65));
        drawingContext.setLineDash([0, 2 * m, 3 * m]);
        beginShape();
        vertex(-doorWb / 2, 0);
        rndBendVertex(-doorWb / 2, 0, doorWb / 2, 0, deviation);
        vertex(doorWb / 2, 0);
        rndBendVertex(doorWb / 2, 0, doorWb / 2 - shdwL * shdwA, -shdwL / 2, deviation);
        vertex(doorWb / 2 - shdwL * shdwA, -shdwL / 2);
        rndBendVertex(doorWb / 2 - shdwL * shdwA, -shdwL / 2, -doorWb / 2 - shdwL * shdwA, -shdwL / 2, deviation);
        vertex(-doorWb / 2 - shdwL * shdwA, -shdwL / 2);
        rndBendVertex(-doorWb / 2 - shdwL * shdwA, -shdwL / 2, -doorWb / 2, 0, deviation);
        vertex(-doorWb / 2, 0);
        endShape(CLOSE);
        pop();
    }

    copyContent() {
        push();
        let doorWb = this.w;
        let doorHb = this.h;
        // doorContent.blendMode(MULTIPLY);
        // doorContent.globalAlpha=0.75
		// doorContent.filter="blur(12px)"
        copy(doorContent, this.x - int(doorWb), int(this.y - doorHb), int(doorWb), int(doorHb), int(this.x - doorWb / 2), int(this.y - doorHb), int(doorWb), int(doorHb));
        pop();
    }
}

class DoorContent {
    constructor(g, originX, originY, color) {
        this.g = g; //doorContent;
        this.originX = originX;
        this.originY = originY;
        this.color = color;

        this.particles = [];
        this.attractors = [];
        this.repulsors = [];
    }

    moreCircles(numCircles) {
        this.g.push();
        let x = random(this.originX - doorW, this.originX);
        let y = random(this.originY - doorH, this.originY);
        this.g.noFill();
        this.g.stroke(this.color);
        this.g.strokeWeight(0.5 * m);
        for (let i = 10; i < numCircles; i++) {
            let radius = Math.pow(1.15, i);
            this.g.drawingContext.setLineDash([4 * m, 3 * m, 5 * m, 2 * m, 3 * m]);
            this.g.circle(x, y, radius * 2);
        }
        this.g.pop();
    }

    moreBirdsRemind(numBirds, minCurve, maxCurve) {
        this.g.push();
        this.g.noFill();
        for (let i = 0; i < numBirds; i++) {
            let x = random(100, wisW - 100) * m;
            let y = random(100, wisH - 100) * m;
            let curve = random(minCurve, maxCurve) * m;
            this.g.stroke(this.color);
            this.g.beginShape();
            this.g.vertex(x + curve, y + curve);
            this.g.vertex(x, y);
            this.g.vertex(x - curve, y + curve);
            this.g.endShape();
        }
        this.g.pop();
    }

    moreBirdsActual(numBirds) {
        this.g.push();
        for (let i = 0; i < numBirds; i++) {
            let x = random(100, wisW - 100) * m;
            let y = random(100, wisH - 100) * m;
            let c = random(4, 7) * m;
            let d = random(2, 4) * m;
            let e = random(2, 6) + (y - x) + (x - y) * m;
            this.g.stroke(this.color);
            this.g.beginShape(LINES);
            this.g.vertex(x - d, y - d);
            this.g.vertex(x + c, y + c);
            this.g.vertex(x + c, y + c);
            this.g.vertex(x - c, y - c);
            this.g.vertex(x - c, y + c);
            this.g.vertex(x + d, y + d);
            this.g.endShape();
        }
        this.g.pop();
    }


    moreDunes(duneH) {
        let waveAmp = duneH * 0.75;
        let waveFreq = TWO_PI / wisW;
        let phase = 0;
        let y = this.originY;

        this.g.push();
        this.g.stroke(255, 160);
        this.g.strokeWeight(random(0.25, 1.5) * m);

        let points = [];
        for (let x = 0; x < wisW; x += 1) {
            for (let yOff = 0; yOff < duneH; yOff += 1) {
                let yNoise = noise(x * 0.003, (y + yOff) * 0.005) * duneH;
                let yWave = waveAmp * sin(waveFreq * x + phase);
                let pt = createVector(x, y + yOff + yNoise + yWave);
                pt.duneY = y;
                points.push(pt);
            }
        }
        phase += 0.05;

        for (let pt of points) {
            let h = map(pt.y, pt.duneY, pt.duneY + duneH, 100, 30);
            this.g.stroke(255, h);
            this.g.point(pt.x, pt.y);
        }
        this.g.pop();
    }

    moreCross(size, thick, col) {
        this.g.push();
        this.g.strokeWeight(thick);
        this.g.stroke(col);
        this.g.noFill();
        for (let i = 0; i < size; i++) {
            let x = this.originX + random(-130, 130) * m;
            let y = this.originY + random(-80, 80) * m;
            let halfSize = size / 2;
            let angle = random(TWO_PI);
            this.g.push();
            this.g.translate(x, y);
            this.g.rotate(angle);
            this.g.line(-halfSize, 0, halfSize, 0);
            this.g.line(0, -halfSize, 0, halfSize);
            this.g.pop();
        }
        this.g.pop();
    }

    moreSun(radius, cola, colb) {
        this.g.push();
        let from = color(cola);
        let to = color(colb);
        this.g.noStroke();
        for (let r = radius; r > 0; --r) {
            let inter = map(r, 0, radius, 0, 1);
            let c = this.g.lerpColor(from, to, inter);
            this.g.fill(c);
            this.g.circle(this.originX + random(-130, 130) * m, this.originY + random(-80, 80) * m, r * 4);
        }
        this.g.pop();
    }

    moreMoon(radius, cola, colb) {
        this.g.push();
        let from = color(cola);
        let to = color(colb);
        this.g.noStroke();
        for (let r = radius; r > 0; --r) {
            let inter = map(r, 0, radius, 0, 1);
            let c = this.g.lerpColor(from, to, inter);
            this.g.fill(c);
            let x = this.originX - (doorW / random(1, 3) * m);
            let y = this.originY - (doorH / random(1, 3) * m);
            this.g.circle(x, y, r * 2);
        }

        for (let i = 0; i < 6; i++) {
            let angle = random(TWO_PI);
            let distance = random(radius * 0.5);
            let x = this.originX + cos(angle) * distance;
            let y = this.originY + sin(angle) * distance;
            let craterRadius = random(5, 10);
            this.g.fill(0, 0, 100);
            this.g.circle(x + random(-doorW, doorW), y + random(-doorH, doorH), craterRadius * 2);
        }
        this.g.pop();
    }

    moreBoom(radius, cola, colb, numSegments) {
        this.g.push();
        let from = color(cola);
        let to = color(colb);
        this.g.noStroke();
    
        for (let i = 0; i < numSegments; i++) {
            let inter = map(i, 0, numSegments - 1, 0, 1);
            let c = this.g.lerpColor(from, to, inter);
            this.g.fill(c);
    
            let angleStart = map(i, 0, numSegments, 0, TWO_PI);
            let angleEnd = map(i + 1, 0, numSegments, 0, TWO_PI);
    
            this.g.beginShape();
            this.g.vertex(this.originX, this.originY);
            for (let angle = angleStart; angle <= angleEnd; angle += 0.1) {
                let x = this.originX + random(-doorW / 2, doorW) + cos(angle) * radius;
                let y = this.originY + random(-doorH / 2, doorH) + sin(angle) * radius;
                this.g.vertex(x, y);
            }
            this.g.endShape(CLOSE);
        }
    
        this.g.pop();
    }
            
    moreAttractors() {
        this.g.push();
            // let x = this.originX + random(-130, 130) * m;
            // let y = this.originY + random(-80, 80) * m;
            let x = random(300, doorContent.width - 300);
            let y = random(300, doorContent.height - 300);
            this.attractors.push(createVector(x, y));
        this.g.pop();
    }

    moreRepulsors() {
        this.g.push();
            // let x = this.originX - (doorW / int(random(1, 3)) * m);
            // let y = this.originY - (doorH / int(random(1, 3)) * m);
            let x = random(300, doorContent.width - 300);
            let y = random(300, doorContent.height - 300);
            this.repulsors.push(createVector(x, y));
        this.g.pop();
    }

    createParticles(n) {
        for (let i = 0; i < n; i++) {
            // this.particles.push(new Particle(random(this.originX - doorW, this.originX), random(this.originY - doorH, this.originY)));
            this.particles.push(new Particle(random(150, doorContent.width - 150), random(150, doorContent.height - 150)));
        }
    }

    showParticles() {
        this.g.push();
        for (let p of this.particles) {
            p.show(this.g);  
        }
        this.g.pop();
    }

    updateParticles(n) {
        for (let it = 0; it < n; it++) {
            for (let i = this.particles.length - 1; i >= 0; i--) {
                let p = this.particles[i];
                p.checkProximity(this.attractors, random(125, 170), color(random(col4)), color(random(col5)));
                p.checkProximity(this.repulsors, random(120, 160), color(random(col4)), color(random(col5)));
                // p.checkProximity(this.attractors, random(125, 170), color(0, 0, 255, 50), color(255, 255, 0, 50));  // Bleu à Jaune
                // p.checkProximity(this.repulsors, random(120, 160), color(0, 255, 0, 50), color(255, 0, 255, 50));  // Vert à Magenta
        
    
                for (let a of this.attractors) {
                    p.attracted(a);
                }

                for (let r of this.repulsors) {
                    p.repulsed(r);
                }

                p.update();
    
                if (p.isDead()) {
                    this.particles.splice(i, 1);
                    // this.particles.push(new Particle(random(this.originX - doorW, this.originX), random(this.originY - doorH, this.originY)));
                    this.particles.push(new Particle(random(150, doorContent.width - 150), random(150, doorContent.height - 150)));
                }
            }
        }
    }
}

class Particle {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector(random(-1, 1), random(-1, 1));
        this.acceleration = createVector();
        this.lifespan = 255;
        this.col = color(235); //color(colr52);  //color(random(col6)); 
        this.prevPosition = this.position.copy();
        this.path = []; 
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    attracted(target) {
        let force = p5.Vector.sub(target, this.position);
        force.setMag(0.5); 
        this.applyForce(force);
    }

    repulsed(target) {
        let force = p5.Vector.sub(this.position, target);
        force.setMag(0.5); 
        this.applyForce(force);

        let rotation = force.copy();
        rotation.rotate(HALF_PI);
        rotation.setMag(0.4);
        this.applyForce(rotation);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.prevPosition = this.position.copy();
        this.acceleration.mult(0); 
        this.lifespan -= 2;

        this.path.push(this.position.copy());

        if (this.path.length > 500) {
            this.path.splice(0, 1);
        }

    }

    isDead() {
        return this.lifespan <= 0;
    }

    checkProximity(targets, proximityThreshold, startCol, endCol) {
        for (let target of targets) {
            let d = this.position.dist(target);
            if (d < proximityThreshold) {
                let lerpAmount = map(d, 0, proximityThreshold, 1, 0);
                this.col = lerpColor(startCol, endCol, lerpAmount);
            }
        }
    }

    show(g) {
        let strokeSize =  map(this.lifespan, 0, 255, 0, 3);
        g.push();
        g.noFill();
        let bobTheColor = this.col;
        bobTheColor.setAlpha(60);
        g.stroke(bobTheColor); //255, this.lifespan);
        //g.fill(255, this.lifespan);
        g.strokeWeight(strokeSize * m);
        g.point(this.position.x, this.position.y);
        g.beginShape();
        g.strokeWeight(strokeSize * m);
        for (let point of this.path) {
            g.vertex(point.x, point.y);
        }
        g.endShape();
        g.pop();

    }
}

// class buggedParticle {
//     constructor(x, y) {
//         this.pos = createVector(x, y);
//         this.prevPos = this.pos.copy();
//         this.vel = createVector();
//         this.acc = createVector();
//         this.maxForce = 0.5;
//         this.maxSpeed = 3;
//         this.lifespan = 250;
//         this.path = []; 
//     }

//     applyForce(force) {
//         this.acc.add(force); 
//     }

//     attracted(target) {
//         let force = p5.Vector.sub(target, this.pos);
//         let distance = force.mag();
//         distance = constrain(distance, 5, 50);
//         force.setMag(0.55 / distance);
//         this.acc.add(force);
//     }
    
//     repulsed(target) {
//         let force = p5.Vector.sub(this.pos, target); 
//         let distance = force.mag();
//         distance = constrain(distance, 5, 50);
        
//         let strength = 50 / (distance * distance); 
//         force.setMag(strength);
//         this.acc.add(force);

//         let rotation = force.copy();
//         rotation.rotate(HALF_PI);
//         rotation.setMag(strength * 0.5); 
//         this.acc.add(rotation);
//     }

//     update() {
//         this.vel.add(this.acc);
//         this.vel.limit(this.maxSpeed);
//         this.prevPos = this.pos.copy();
//         this.pos.add(this.vel);
//         this.acc.mult(0);

//         this.path.push(this.pos.copy());

//         if (this.path.length > 50000) {
//             this.path.splice(0, 1);
//         }

//         this.lifespan -= 2;
//     }

//     isDead() {
//         return this.lifespan <= 0;
//     }

//     show(g) {
//         g.push();
//         g.noFill();
//         g.stroke(255); 
//         g.beginShape();
//         g.strokeWeight(1 * m);
//         for (let point of this.path) {
//             g.vertex(point.x, point.y);
//         }
//         g.endShape();

//         g.stroke(255); //, this.lifespan);
//         g.strokeWeight(2 * m);
//         g.point(this.pos.x, this.pos.y);
//         g.pop();
//     }
// }
