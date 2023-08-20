/* BACKGROUNDS */

// A FAMILY //

function drawCubesA() {
    let size = 2;
    let clusterSize = random(3, 5);
    let rwis = (wisW - bd2) / (sizeMod * size);
    let offsetY = size / 2 * sizeMod;

    for (let i = 0; i < cubesCols; i += clusterSize) {
        for (let j = 0; j < cubesRows - 1; j += clusterSize) {
            if (random() < 0.01) {
                continue;
            }

            clusterSize = random(3, 5);
            let ws = 0;
            for (let ii = i; ii < i + clusterSize && ii < rwis; ii++) {
                for (let jj = j; jj < j + clusterSize && jj < rwis; jj++) {
                    let x = ii * size * sizeMod;
                    let y = jj * size * sizeMod;

                    if (ii % 2 === 0) {
                        y += offsetY;
                    }
                    let randomChoice = int(random(3));
                    let cubeColor = color(random(col1));
                    let aR = random(80, 140);
                    cubeColor.setAlpha(aR);
                    isBgColorDark = isColorDark(cubeColor.levels);

                    if (randomChoice === 0) {
                        drawCube(x, y, size, cubeColor);
                    } else if (randomChoice === 1) {
                        drawPyramid(x, y, size, cubeColor);
                    } else {
                        drawCone(x, y, size, cubeColor);
                    }
                    //(random() < 0.5 ? drawCube : drawCone)(x, y, size, cubeColor);
                }
            }
        }
    }
    applyMonochromaticGrain(gS);
}

function drawCubesAll() {
    let size = 2;
    let rwis = (wisW - bd2) / (sizeMod * size);
    let offsetY = size / 2 * sizeMod;
    let ws = 0;

    for (let i = 0; i < cubesCols; i++) {
        for (let j = 0; j < cubesRows - 1; j++) {
            let x = i * size * sizeMod;
            let y = j * size * sizeMod;

            if (i % 2 === 0) {
                y += offsetY;
            }
            let randomChoice = int(random(3));
            let cubeColor = color(random(col1));
            let aR = random(0.15, 0.45);
            cubeColor.setAlpha(aR);
            isBgColorDark = isColorDark(cubeColor.levels);
            /*
            if (randomChoice === 0) {
                drawCube(x, y, size, cubeColor);
            } else if (randomChoice === 1) {
                drawPyramid(x, y, size, cubeColor);
            } else {
                drawCone(x, y, size, cubeColor);
            } */
            (random() < 0.5 ? drawCube : drawCone)(x, y, size, cubeColor);
        }
    }
    applyMonochromaticGrain(gS);
}

function drawCubesRand() {
    let size = 2;
    let rwis = (wisW - bd2) / (sizeMod * size);
    let offsetY = size / 2 * sizeMod;
    let ws = 0;
    let fillRate = 0.75;

    for (let i = cubesCols - 1; i >= 0; i--) {
        for (let j = cubesRows - 1; j >= 0; j--) {
            let x = i * size * sizeMod;
            let y = j * size * sizeMod;

            if (i % 2 === 0) {
                y += offsetY;
            }
            let randomChoice = int(random(3));
            let shouldDrawElement = random() < fillRate && (j >= cubesRows * (0 + fillRate));
            let cubeColor = color(random(col1));
            let aR = random(40, 80);
            cubeColor.setAlpha(aR);
            isBgColorDark = isColorDark(cubeColor.levels);

            if (shouldDrawElement) {
                if (randomChoice === 0) {
                    drawCube(x, y, size, cubeColor);
                } else if (randomChoice === 1) {
                    drawPyramid(x, y, size, cubeColor);
                } else {
                    drawCone(x, y, size, cubeColor);
                } 
                //drawCube(x, y, size, cubeColor);
            }
        }
    }
    applyMonochromaticGrain(gS);
}

function drawCube(x, y, size, fillCol) {
    size = size * sizeMod;
    push();
    translate(size / 2, 0);
    translate(x, y);
    //translate(x + size / 2, y + size / 2);
    if (nos == 0) {
        noStroke();
    } else if (nos == 1) {
        stroke(fillCol);
    } else if (nos == 2) {
        stroke(255, random(120, 200));
    }
    // top 
    fill(fillCol);
    if (squareIt == true) {
        quad(0, 0, size / 2, size / 4, 0, size / 2, -size / 2, size / 4);
    }
    if (roundIt == true) {
        beginShape();
        vertex(0, 0);
        quadraticVertex(0, 0, size / 2, size / 4);
        quadraticVertex(0, size / 2, -size / 2, size / 4);
        quadraticVertex(size / 4, 0, 0, size / 2);
        endShape();
    }
    // left
    fill(fillCol);
    for (let ll = 0; ll < size; ll += size / 3) {
        push();
        if (nosh === true) {
            strokeWeight(0.015 * m);
            stroke(0);
        }
        drawingContext.setLineDash([5 * m, 15 * m, 25 * m, 2 * m, 12 * m, 100 * m]);
        line(-size / 2, (size / 4) + ll / 2, 0, (size / 2) + ll / 2);
        pop();
    }
    beginShape();
    if (squareIt == true) {
        vertex(-size / 2, size / 4);
        vertex(0, size / 2);
        vertex(0, size);
        vertex(-size / 2, size / 4 * 3);
    }
    if (roundIt == true) {
        curveVertex(-size / 2, size / 4);
        curveVertex(0, size / 2);
        curveVertex(0, size);
        curveVertex(-size / 2, size / 4 * 3);
    }
    endShape(CLOSE);

    // right
    for (let l = 0; l < size; l += size / 5) {
        push();
        if (nosh === true) {
            strokeWeight(0.045 * m);
            stroke(0);
        }
        drawingContext.setLineDash([3 * m, 5 * m, 15 * m]);
        line(0, (size / 2) + l / 2, size / 2, (size / 4) + l / 2);
        pop();
    }
    beginShape();
    if (squareIt == true) {
        vertex(size / 2, size / 4);
        vertex(0, size / 2);
        vertex(0, size);
        vertex(size / 2, size / 4 * 3);
    }
    if (roundIt == true) {
        curveVertex(size / 2, size / 4);
        curveVertex(0, size / 2);
        curveVertex(0, size);
        curveVertex(size / 2, size / 4 * 3);
    }
    endShape(CLOSE);
    pop();
}

function drawCone(x, y, size, fillCol) {
    size = size * sizeMod;
    push();
    translate(size / 2, 0);
    translate(x, y);

    if (nos == 0) {
        noStroke();
    } else if (nos == 1) {
        stroke(fillCol);
    } else if (nos == 2) {
        stroke(255, random(120, 200));
    }

    fill(fillCol);
    if (squareIt == true || roundIt == true) {
        beginShape();
        vertex(0, 0);
        vertex(-size / 2, size);
        for (let angle = 180; angle < 360; angle += 1) {
            let rad = radians(angle);
            let px = 0 + size / 2 * cos(rad);
            let py = size + size / 6 * sin(rad);
            curveVertex(px, py);
        }
        vertex(size / 2, size);
        endShape(CLOSE);
    }

    // Hashing
    if (nosh === true) {
        strokeWeight(0.015 * m);
        stroke(0);
        for (let l = size / 4; l <= size; l += size / 10) {
            line(0, l, size / 2, l + size / 10);
        }
    }
    pop();
}

function drawPyramid(x, y, size, fillCol) {
    size = size * sizeMod;
    push();
    translate(size / 2, 0);
    translate(x, y);

    if (nos == 0) {
        noStroke();
    } else if (nos == 1) {
        stroke(fillCol);
    } else if (nos == 2) {
        stroke(255, random(120, 200));
    }

    // Top
    fill(fillCol);
    if (squareIt == true) {
        triangle(0, 0, -size / 2, size / 4, size / 2, size / 4);
    }
    if (roundIt == true) {
        beginShape();
        vertex(0, 0);
        quadraticVertex(0, 0, -size / 2, size / 4);
        quadraticVertex(0, size / 4, size / 2, size / 4);
        endShape(CLOSE);
    }

    // Left
    fill(fillCol);
    beginShape();
    vertex(0, 0);
    vertex(-size / 2, size / 4);
    vertex(0, size);
    endShape(CLOSE);

    // Right
    fill(fillCol);
    beginShape();
    vertex(0, 0);
    vertex(size / 2, size / 4);
    vertex(0, size);
    endShape(CLOSE);

    // Base
    fill(fillCol);
    if (squareIt == true) {
        quad(-size / 2, size / 4, size / 2, size / 4, size / 2, size, -size / 2, size);
    }
    if (roundIt == true) {
        beginShape();
        vertex(-size / 2, size / 4);
        vertex(size / 2, size / 4);
        vertex(size / 2, size);
        vertex(-size / 2, size);
        endShape(CLOSE);
    }

    pop();
}



// B FAMILY //

function drawCubesB() {
    let size = 2;
    let clusterSize = random(3, 5);
    let rwis = (wisW - bd2) / (sizeMod * size);
    let offsetY = size / 2 * sizeMod;

    for (let i = 0; i < cubesCols && i < rwis; i += clusterSize) {
        for (let j = 0; j < cubesRows - 1 && j < rwis; j += clusterSize) {
            if (random() < 0.2) {
                continue;
            }

            clusterSize = random(3, 5);
            for (let ii = i; ii < i + clusterSize && ii < cubesCols && ii < rwis; ii++) {
                for (let jj = j; jj < j + clusterSize && jj < cubesRows && jj < rwis; jj++) {
                    let x = ii * size * sizeMod;
                    let y = jj * size * sizeMod;

                    if (ii % 2 === 0) {
                        y += offsetY;
                    }
                    let cubeColor = color(random(col1));
                    let aR = random(80, 120);
                    cubeColor.setAlpha(aR);
                    isBgColorDark = isColorDark(cubeColor.levels);

                    let noiseValue = noiseValues[ii] || noise(x * 0.5, y * 0.5);
                    drawCubeB(x, y, size, noiseValue, cubeColor);
                }
            }
        }
    }
    applyMonochromaticGrain(gS);
}

function drawCubesAllB() {
    let size = 2;
    let rwis = (wisW - bd2) / (sizeMod * size);
    let offsetY = size / 2 * sizeMod;

    for (let i = 1; i < cubesCols; i++) {
        for (let j = 0; j < cubesRows - 2; j++) {
            let x = i * size * sizeMod;
            let y = j * size * sizeMod;

            if (i % 2 === 0) {
                y += offsetY;
            }
            let cubeColor = color(random(col1));
            let aR = random(40, 80);
            cubeColor.setAlpha(aR);
            isBgColorDark = isColorDark(cubeColor.levels);

            let noiseValue = noiseValues[i] || noise(x * 0.5, y * 0.5);
            drawCubeB(x, y, size, noiseValue, cubeColor);
        }
    }
    applyMonochromaticGrain(gS);
}

function drawCubeB(x, y, size, noiseValue, fillCol) {
    let rmod = 1;
    let lmod = 1;

    if (noiseValue < 0.475) {
        lmod = 1 + noiseValue * random(2, 4);
    } else {
        rmod = 1 + (noiseValue - 0.475) * random(2, 4);
    }

    let lsize = size * lmod * sizeMod;
    let rsize = size * rmod * sizeMod;

    push();
    translate(size / 2, 0);
    translate(x, y);

    if (nos == 0) {
        noStroke();
    } else if (nos == 1) {
        stroke(fillCol);
    } else if (nos == 2) {
        stroke(255, random(120, 200));
    }

    // top 
    fill(fillCol);
    if (squareIt == true) {
        quad(0, 0, size / 2, size / 4, 0, size / 2, -size / 2, size / 4);
    }
    if (roundIt == true) {
        beginShape();
        vertex(0, 0);
        quadraticVertex(0, 0, size / 2, size / 4);
        quadraticVertex(0, size / 2, -size / 2, size / 4);
        quadraticVertex(size / 4, 0, 0, size / 2);
        endShape();
    }

    // Left face
    for (let ll = 0; ll < size; ll += size / 3) {
        push();
        if (nos == 0) {
            noStroke();
        } else if (nos == 1) {
            stroke(fillCol);
        } else if (nos == 2) {
            stroke(255, random(120, 200));
        }
        if (nosh === true) {
            strokeWeight(0.035 * m);
            stroke(0);
        } else {
            noStroke();
        }
        drawingContext.setLineDash([5 * m, 15 * m, 25 * m, 2 * m, 12 * m, 100 * m]);
        line(-lsize / 2, (lsize / 4) + ll / 2, 0, (lsize / 2) + ll / 2);
        pop();
    }
    beginShape();
    if (squareIt == true) {
        vertex(-lsize / 2, lsize / 4);
        vertex(0, lsize / 2);
        vertex(0, lsize);
        vertex(-lsize / 2, lsize / 4 * 3);
    }
    if (roundIt == true) {
        curveVertex(-lsize / 2, lsize / 4);
        curveVertex(0, lsize / 2);
        curveVertex(0, lsize);
        curveVertex(-lsize / 2, lsize / 4 * 3);
    }
    endShape(CLOSE);

    // Right face
    for (let l = 0; l < size; l += size / 5) {
        push();
        if (nosh === true) {
            strokeWeight(0.045 * m);
            stroke(0);
        }
        drawingContext.setLineDash([3 * m, 5 * m, 15 * m]);
        line(0, (rsize / 2) + l / 2, rsize / 2, (rsize / 4) + l / 2);
        pop();
    }
    beginShape();
    if (squareIt == true) {
        vertex(rsize / 2, rsize / 4);
        vertex(0, rsize / 2);
        vertex(0, rsize);
        vertex(rsize / 2, rsize / 4 * 3);
    }
    if (roundIt == true) {
        curveVertex(rsize / 2, rsize / 4);
        curveVertex(0, rsize / 2);
        curveVertex(0, rsize);
        curveVertex(rsize / 2, rsize / 4 * 3);
    }
    endShape(CLOSE);
    pop();
}


// C FAMILY //

function drawCubesAllC() {
    let size = 2;
    let rwis = (wisW - bd2) / (sizeMod * size);
    let offsetY = size / 2 * sizeMod;
    let ws = 0;

    for (let i = 0; i < cubesCols; i++) {
        for (let j = 0; j < cubesRows - 1; j++) {
            let x = i * size * sizeMod;
            let y = j * size * sizeMod;

            if (i % 2 === 0) {
                y += offsetY;
                ws = 1;
            }
            let cubeColor = color(random(col1));
            cubeColor.setAlpha(0.25, 0.75);
            isBgColorDark = isColorDark(cubeColor.levels);

            drawCubeC(x, y, size, ws, cubeColor);
        }
    }
    applyMonochromaticGrain(gS);
}

function drawCubesC() {
    noiseSeedValue += 0.1;
    let size = 2;
    let clusterSize = random(3, 5);
    let rwis = (wisW - bd2) / (sizeMod * size);
    let offsetY = size / 2 * sizeMod;

    for (let i = 0; i < cubesCols - 2; i += clusterSize) {
        for (let j = 0; j < cubesRows - 4; j += clusterSize) {
            if (Math.random() < 0.01) {
                continue;
            }

            clusterSize = random(3, 5);
            let ws = 0;
            for (let ii = i; ii < i + clusterSize && ii < rwis; ii++) {
                for (let jj = j; jj < j + clusterSize && jj < rwis; jj++) {
                    let x = ii * size * sizeMod;
                    let y = jj * size * sizeMod;

                    if (ii % 2 === 0) {
                        y += offsetY;
                        ws = 1;
                    }
                    let cubeColor = color(random(col1));
                    cubeColor.setAlpha(80);
                    isBgColorDark = isColorDark(cubeColor.levels);

                    drawCubeC(x, y, size, ws, cubeColor);
                }
            }
        }
    }
    applyMonochromaticGrain(gS);
}

function drawCubesDestructC() {
    noiseSeedValue += 0.1;
    let size = 2;
    let clusterSize = random(5, 8);
    let rwis = (wisW - bd2) / (sizeMod * size);
    let offsetX, offsetY;

    for (let i = 0; i < cubesCols; i += clusterSize) {
        for (let j = 0; j < cubesRows - 1; j += clusterSize) {
            if (Math.random() < 0.6) { 
                continue;
            }

            clusterSize = random(3, 5);
            let ws = 0;
            offsetX = random(0.1, 0.25) * wisW; 
            offsetY = random(0.1, 0.25) * wisH; 

            for (let ii = i; ii < i + clusterSize && ii < rwis; ii++) {
                for (let jj = j; jj < j + clusterSize && jj < rwis; jj++) {
                    if (Math.random() < 0.33) { 
                        continue;
                    }

                    let x = ii * size * sizeMod + offsetX;
                    let y = jj * size * sizeMod + offsetY;

                    if (ii % 2 === 0) {
                        y += size / 2 * sizeMod;
                        ws = 1;
                    }
                    let cubeColor = color(random(col1));
                    cubeColor.setAlpha(80);
                    isBgColorDark = isColorDark(cubeColor.levels);

                    drawCubeC(x, y, size, ws, cubeColor);
                }
            }
        }
    }
    applyMonochromaticGrain(gS);
}

function drawCubeC(x, y, size, ws, fillCol) {
    let wsize;
    if (ws === 1) {
        wsize = (size * random(1, 3)) * sizeMod;
    } else {
        size = size * sizeMod;
    }

    let noiseValue = noise(noiseSeedValue, x, y);
    let alterLeft = noiseValue > 0.95;

    push();
    translate(size / 2, 0);
    translate(x, y);

    if (nos === true) {
        noStroke();
    } else if (nosColor == true) {
        stroke(fillCol);
        // fill(random() < 0.5 ? 20 : 235);
    }

    let cubeVertices = [];
    if (alterLeft) {
        cubeVertices.push([-wsize / 2, wsize / 4]);
        cubeVertices.push([0, wsize / 2]);
        cubeVertices.push([0, wsize]);
        cubeVertices.push([-wsize / 2, wsize / 4 * 3]);
    } else {
        cubeVertices.push([wsize / 2, wsize / 4]);
        cubeVertices.push([0, wsize / 2]);
        cubeVertices.push([0, wsize]);
        cubeVertices.push([wsize / 2, wsize / 4 * 3]);
    }

    beginShape();
    for (let i = 0; i < cubeVertices.length; i++) {
        vertex(cubeVertices[i][0], cubeVertices[i][1]);
    }
    endShape(CLOSE);

    // Left face
    for (let ll = 0; ll < size; ll += size / 3) {
        push();
        if (nosh === true) {
            strokeWeight(0.035 * m);
            stroke(0);
        }
        drawingContext.setLineDash([5 * m, 15 * m, 25 * m, 2 * m, 12 * m, 100 * m]);
        line(-size / 2, (size / 4) + ll / 2, 0, (size / 2) + ll / 2);
        pop();
    }
    beginShape();
    if (squareIt == true) {
        vertex(-size / 2, size / 4);
        vertex(0, size / 2);
        vertex(0, size);
        vertex(-size / 2, size / 4 * 3);
    }
    if (roundIt == true) {
        curveVertex(-size / 2, size / 4);
        curveVertex(0, size / 2);
        curveVertex(0, size);
        curveVertex(-size / 2, size / 4 * 3);
    }
    endShape(CLOSE);

    // Right face
    for (let l = 0; l < size; l += size / 5) {
        push();
        if (nosh === true) {
            strokeWeight(0.045 * m);
            stroke(0);
        }
        drawingContext.setLineDash([3 * m, 5 * m, 15 * m]);
        line(0, (wsize / 2) + l / 2, wsize / 2, (wsize / 4) + l / 2);
        pop();
    }
    beginShape();
    if (squareIt == true) {
        vertex(size / 2, size / 4);
        vertex(0, size / 2);
        vertex(0, size);
        vertex(size / 2, size / 4 * 3);
    }
    if (roundIt == true) {
        curveVertex(wsize / 2, size / 4);
        curveVertex(0, size / 2);
        curveVertex(0, size);
        curveVertex(size / 2, size / 4 * 3);
    }
    endShape(CLOSE);
    pop();
}


// BUBULLE //

function drawBub() {
    let rwis = (wisW - bd2) / (sizeMod * size);
    let offsetY = size / 2 * sizeMod;
    let fillRate = 0.45;

    for (let i = cubesCols - 1; i >= 0; i--) {
        for (let j = (cubesRows - 1) / random(4, 12); j >= 0; j--) {
            let x = i * size * sizeMod;
            let y = j * size * sizeMod;

            if (i % 2 === 0) {
                y += offsetY;
            }

            let bulleCol1 = color(random(col1));
            let bulleCol2 = color(random(col2));
            let aR1 = random(50, 90);
            let aR2 = random(120, 160);
            bulleCol1.setAlpha(aR1);
            bulleCol2.setAlpha(aR2);
            isBgColorDark = isColorDark(bulleCol1.levels);

            bubulle(x, y, size, bulleCol1, bulleCol2);
        }
    }
    applyMonochromaticGrain(gS);
}

function bubulle(i, j, size, bulleCol1, bulleCol2) {
    let radius = size * random(1, 5);
    push();
    //fill(150, 200, 255); 
    fill(bulleCol2);
    ellipse(i, j, radius * 2);

    noStroke();
    //fill(255, 100); 
    fill(bulleCol1);
    ellipse(i - radius / 2.75, j - radius / 2.75, radius / 2);
    pop();
}
