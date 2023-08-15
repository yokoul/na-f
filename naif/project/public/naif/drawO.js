let showOriginal = false;
let doorWO = 80;
let doorHO = 140;
let shdwLO = 60;
let shdwAO = 0.5;
let gapO = 60; 
let rowsO = 4;
let colsO = 6;
let depthO = 60;
let paddingO = 25;
let borderO = 20;
let bdinO = 15;
let bdoutO = 7.5;


function drawCirclesO(g, originX, originY, numCircles) {
    x = originX + random(-paddingO, paddingO);
    y = originY + random(-paddingO, paddingO);
    g.push();
    g.stroke(255);
        for (let i = 12; i < numCircles; i++) {
            let radius = Math.pow(1.15, i);
            if (i === 12 || i === 13 && random() < 0.5) {
                g.strokeWeight(2);
                g.fill(255);
                g.circle(x, y, radius * 2);
            } else {
                g.noFill();
                g.strokeWeight(random(0.5, 1));
                g.drawingContext.setLineDash([4, 3, 5, 2, 6, 4, 2, 5, 3, 3]);
                g.circle(x, y, radius * 2);
            }
        }
    g.pop();
    }

function drawBirdsO(g, numBirds, originX, originY, minCurve, maxCurve, color) {
    g.push();
    g.noFill();
    g.stroke(color);
    for (let i = 0; i < numBirds; i++) {
        let x = random(-doorWO/2.2, doorWO/2.2);
        let y = random(-doorHO, 0);
        let curve = random(minCurve, maxCurve);

        g.stroke(255);
        g.beginShape();
        g.vertex(x + curve, y + curve);
        g.vertex(x, y);
        g.vertex(x - curve, y + curve);
        g.endShape();
    }
    g.pop();
}

function drawO(g) {

    // Calculer la largeur et la hauteur totales de la grille
    let totalWidth = colsO * (doorWO + gapO);
    let totalHeight = rowsO * (doorHO + gapO) - gapO;

    // Calculer les offsets nécessaires pour centrer la grille
    offsetX = (wisW - totalWidth) / 2;
    offsetY = (wisH - totalHeight) / 2;


    //g.background(255);
    g.push();
    g.noStroke();
    g.fill(255);
    g.rect(0, 0, wisW, wisH);
    g.pop();


    
    for (let i = 0; i < rowsO; i++) {
        for (let j = 0; j < colsO; j++) {
            let x = j * (doorW + gap) + gap + (width - (grid[0].length * (doorW + gap))) / 2;
            let y = i * (doorH + gap) + doorH + gap + (height - (grid.length * (doorH + gap))) / 2;
            // let x = j * (doorWO + gapO) + doorWO / 2 + (gapO / 2) + offsetX + (borderO / 2);
            // let y = i * (doorHO + gapO) + doorHO / 2 + gapO + offsetY + borderO;
            // y += i * gapO / 2;

            // Poteau
            g.push();
            g.translate(x, y);
            g.fill(0);
            g.rect(-doorWO / 2, -doorHO, doorWO, doorHO);

            // const amount = 5;
            // const alpha = true;
            // g.tinkerPixels((index, total) => {
            //     const grainAmount = floor(random() * (amount * 1.3 + 1.01)) + amount;
            //     g.pixels[index] = g.pixels[index] + grainAmount/4;
            //     g.pixels[index + 1] = g.pixels[index + 1] + grainAmount/2;
            //     g.pixels[index + 2] = g.pixels[index + 2] + grainAmount/2;
            //     if (alpha) {
            //         g.pixels[index + 3] = g.pixels[index + 3] - grainAmount;
            //     }
            // });
            g.pop();
        }
    }

    for (let i = 0; i < rowsO; i++) {
        for (let j = 0; j < colsO; j++) {
            let x = j * (doorW + gap) + gap + (width - (grid[0].length * (doorW + gap))) / 2;
            let y = i * (doorH + gap) + doorH + gap + (height - (grid.length * (doorH + gap))) / 2;
            // let x = j * (doorWO + gapO) + doorWO / 2 + (gapO / 2) + offsetX;
            // let y = i * (doorHO + gapO) + doorHO / 2 + gapO + offsetY;
            // y += i * gapO / 2;
            // Ajout du volume
            g.push();
            g.stroke(180);
            g.line(x - doorWO / 2, y - doorHO, x - doorWO / 2 + depthO, y - doorHO - depthO);
            g.line(x + doorWO / 2, y - doorHO, x + doorWO / 2 + depthO, y - doorHO - depthO);
            g.line(x - doorWO / 2 + depthO, y - doorHO - depthO, x + doorWO / 2 + depthO, y - doorHO - depthO);

            g.line(x + doorWO / 2 + depthO, y - doorHO - depthO, x + doorWO / 2 + depthO, doorHO + depthO);
            g.pop();

            // Ombre
            g.push();
            sa = shdwAO + ((j + 0.25) * 1.15);
            g.translate(x, y);
            drawBirdsO(original, 12 - j * 2, 0, 0, 5, 10, color(0));
            drawCirclesO(original, i*i*20, j*j*6, random(25, 35));
            g.fill(20);
            g.beginShape();
            g.vertex(-doorWO / 2, 0);
            g.vertex(doorWO / 2, 0);
            g.vertex(doorWO / 2 - ((i+j)/10));
            g.vertex(-doorWO / 2 - ((i+j)/10));
            g.endShape(CLOSE);
            g.pop();
        }
    }

    g.applyMonochromaticGrain(gS * 3);
    g.push();
    g.noFill();
    // g.stroke(0);
    // g.strokeWeight(borderO);
    // g.rect(borderO / 2, borderO / 2, width - borderO, height - borderO);
    g.stroke(255);
    g.strokeWeight(1);
    g.rect(bdinO / 2, bdinO / 2, width - bdinO, height - bdinO);
    g.stroke(255);
    g.strokeWeight(1);
    g.rect(bdoutO / 2, bdoutO / 2, width - bdoutO, height - bdoutO);
    g.pop();

    showOriginal = true;
}

