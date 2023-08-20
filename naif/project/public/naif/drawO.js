let showOriginal = false;
 
let row = 4;
let col = 6;
let bdin = 15;
let bdout = 7.5;


function drawCirclesO(g, originX, originY, numCircles) {
    x = originX + random(-padding, padding);
    y = originY + random(-padding, padding);
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
        let x = random(-doorW/2.2, doorW/2.2);
        let y = random(-doorH, 0);
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

    let totalWidth = col * (doorW + gap);
    let totalHeight = row * (doorH + gap) - gap;
    offsetX = (wisW - totalWidth) / 2;
    offsetY = (wisH - totalHeight) / 2;

    g.push();
    g.noStroke();
    g.fill(255);
    g.rect(0, 0, wisW, wisH);
    g.pop();
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let x = j * (doorW + gap) + gap + (width - (grid[0].length * (doorW + gap))) / 2;
            let y = i * (doorH + gap) + doorH + gap + (height - (grid.length * (doorH + gap))) / 2;


            g.push();
            g.translate(x, y);
            g.fill(0);
            g.rect(-doorW / 2, -doorH, doorW, doorH);
            g.pop();
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let x = j * (doorW + gap) + gap + (width - (grid[0].length * (doorW + gap))) / 2;
            let y = i * (doorH + gap) + doorH + gap + (height - (grid.length * (doorH + gap))) / 2;

            g.push();
            g.stroke(180);
            g.line(x - doorW / 2, y - doorH, x - doorW / 2 + depth, y - doorH - depth);
            g.line(x + doorW / 2, y - doorH, x + doorW / 2 + depth, y - doorH - depth);
            g.line(x - doorW / 2 + depth, y - doorH - depth, x + doorW / 2 + depth, y - doorH - depth);
            g.line(x + doorW / 2 + depth, y - doorH - depth, x + doorW / 2 + depth, doorH + depth);
            g.pop();

            g.push();
            sa = shdwA + ((j + 0.25) * 1.15);
            g.translate(x, y);
            drawBirdsO(original, 12 - j * 2, 0, 0, 5, 10, color(0));
            drawCirclesO(original, i*i*20, j*j*6, random(25, 35));
            g.fill(20);
            g.beginShape();
            g.vertex(-doorW / 2, 0);
            g.vertex(doorW / 2, 0);
            g.vertex(doorW / 2 - ((i+j)/10));
            g.vertex(-doorW / 2 - ((i+j)/10));
            g.endShape(CLOSE);
            g.pop();
        }
    }

    g.applyMonochromaticGrain(gS * 3);
    g.push();
    g.noFill();
    // g.stroke(0);
    // g.strokeWeight(border);
    // g.rect(border / 2, border / 2, width - border, height - border);
    g.stroke(255);
    g.strokeWeight(1);
    g.rect(bdin / 2, bdin / 2, width - bdin, height - bdin);
    g.stroke(255);
    g.strokeWeight(1);
    g.rect(bdout / 2, bdout / 2, width - bdout, height - bdout);
    g.pop();

    showOriginal = true;
}

