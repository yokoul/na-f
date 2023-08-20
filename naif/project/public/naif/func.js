// FUNCTIONS //

function generateGrid(wi, he) {
    let grid = Array(he).fill(0).map(() => Array(wi).fill(0));

    let shapes = [
        [[1, 1], [1, 1]],  // Carré de 4
        [[1, 1]],  // Ligne de 2
        [[1], [1]],  // Colonne de 2
    ];

    let groups = floor(random() * (wi * he / 4));

    for (let i = 1; i <= groups; i++) {
        let shape = shapes[floor(random() * shapes.length)];
        let x, y;
        do {
            x = floor(random() * wi);
            y = floor(random() * he);
        } while (!canPlaceShape(grid, shape, x, y));

        placeShape(grid, shape, x, y, i);
    }

    return grid;
}

function canPlaceShape(grid, shape, x, y) {
    for (let i = 0; i < shape.length; i++) {
        for (let j = 0; j < shape[i].length; j++) {
            if (y + i >= grid.length || x + j >= grid[0].length || grid[y + i][x + j] !== 0) {
                return false;
            }
        }
    }
    return true;
}

function placeShape(grid, shape, x, y, value) {
    for (let i = 0; i < shape.length; i++) {
        for (let j = 0; j < shape[i].length; j++) {
            grid[y + i][x + j] = value;
        }
    }
}

function stopping() {
    // saveCanvas(`naïf_pixScreen_${$fx.hash}-${$fx.minter}`, 'png');
    noLoop();
    $fx.preview();
}

function structbg(g) {
    let clr1 = random() > 0.5 ? 20 : 235;
    let clr2 = random() > 0.5 ? 20 : 235;
    let clr3 = random() > 0.5 ? 20 : 235;
    
    if (random() < 0.95) {
    g.push();
    g.noStroke();
    if (random() > 0.15) {
        g.fill(clr1, clr2, clr3, 190);
    } else {
        g.fill(random(colr7));
    }
    g.rect(0, 0, wisW, wisH);
    g.pop();
    } 

    if (random() > 0.99) {
        g.rotate(PI);
        g.translate(-wisW, -wisH);
    }

    let loops = random(5, 40);
    let colloopsA = random() > 0.5 ? color(random(col1)) : color(random(col2));
    let colloopsB = random() > 0.5 ? color(20, 20, 20, 255) : color(235, 235, 235, 255);
    let colloops = random() > 0.5 ? colloopsA : colloopsB;
    for (let i = 0; i < loops; i++) {
        for (let door of doors) {
            let metrng = random();
            if (door instanceof Door || door instanceof MultiDoor) {
            if (metrng > 0 && metrng < 0.15) {
                g.push();
                if (random() > 0.9) {
                        g.rotate(PI);
                        g.translate(-wisW, -wisH);
                    }
                    g.blendMode(HARD_LIGHT);
                    g.globalAlpha=0.005;
                    g.filter="blur(15px)"
                    door.drawStruct(colloops, random(10, 60) * m);
                    g.pop();
                    g.push();
                    g.blendMode(SOFT_LIGHT);
                    g.globalAlpha=0.005;
                    g.filter="blur(15px)"
                    door.drawDoor(colloops, random(10, 30) * m);
                    g.pop();
                } else if (metrng >= 0.15 && metrng < 0.3) {
                    g.push();
                    g.blendMode(SOFT_LIGHT);
                    g.globalAlpha=0.005;
                    g.filter="blur(20px)"
                    door.drawStruct(colloops, random(20, 120) * m);
                    g.pop();
                    g.push();
                    g.blendMode(HARD_LIGHT);
                    g.globalAlpha=0.005;
                    g.filter="blur(20px)"
                    door.drawDoor(colloops, random(20, 40) * m);
                    g.pop();
                } else if (metrng >= 0.3 && metrng < 0.45) {
                    g.push();
                    g.blendMode(HARD_LIGHT);
                    g.globalAlpha=0.005;
                    g.filter="blur(25px)"
                    door.drawStruct(colloops, random(10, 60) * m);
                    g.pop();
                    g.push();
                    g.blendMode(MULTIPLY);
                    g.globalAlpha=0.005;
                    g.filter="blur(25px)"
                    door.drawDoor(colloops, random(10, 30) * m);
                    g.pop();
                } else if (metrng >= 0.45 && metrng < 0.6) {
                    g.push();
                    if (random() > 0.9) {
                        g.rotate(PI);
                        g.translate(-wisW, -wisH);
                    }                
                    // g.push();
                    g.blendMode(SOFT_LIGHT);
                    g.globalAlpha=0.005;
                    g.filter="blur(10px)"
                    door.drawStruct(colloops, random(20, 120) * m);
                    g.pop();
                    g.push();
                    g.blendMode(OVERLAY);
                    g.globalAlpha=0.005;
                    g.filter="blur(10px)"
                    door.drawStructInv(colloops, random(20, 40) * m);
                    g.pop();
                } else if (metrng >= 0.6 && metrng < 0.75) {
                    g.push();
                    if (random() > 0.9) {
                        g.rotate(PI);
                        g.translate(-wisW, -wisH);
                    }                
                    g.blendMode(SOFT_LIGHT);
                    g.globalAlpha=0.005;
                    g.filter="blur(5px)"
                    g.filter="invert(100%)";
                    door.drawStruct(colloops, random(10, 60) * m);
                    g.pop();
                    g.push();
                    g.blendMode(SOFT_LIGHT);
                    g.globalAlpha=0.005;
                    g.filter="blur(5px)"
                    g.filter="gray(100%)";
                    door.drawDoor(colloops, random(10, 30) * m);
                    g.pop();
                } else if (metrng >= 0.75 && metrng < 0.9) {
                    g.push();
                    if (random() > 0.9) {
                        g.rotate(PI);
                        g.translate(-wisW, -wisH);
                    }                
                    g.blendMode(HARD_LIGHT);
                    g.globalAlpha=0.005;
                    g.filter="blur(25px)"
                    g.filter="invert(100%)";
                    door.drawStruct(colloops, random(10, 60) * m);
                    g.pop();
                    g.push();
                    g.blendMode(HARD_LIGHT);
                    g.globalAlpha=0.005;
                    g.filter="blur(25px)"
                    g.filter="gray(100%)";
                    door.drawStructInv(colloops, random(10, 30) * m);
                    g.pop();
                } else if (metrng >= 0.9 && metrng < 1) {
                    g.push();
                    g.blendMode(BLEND);
                    g.globalAlpha=0.005;
                    g.filter="blur(20px)"
                    g.filter="invert(100%)";
                    door.drawStruct(colloops, random(10, 60) * m);
                    g.pop();
                    g.push();
                    g.blendMode(BLEND);
                    g.globalAlpha=0.005;
                    g.filter="blur(20px)"
                    g.filter="gray(100%)";
                    door.drawStructInv(colloops, random(10, 30) * m);
                    g.pop();
                }
            }
        }
    }
    if (random() < 0.5) {
        g.push();
        g.noStroke();
        g.filter="blur, 4"
        g.fill(random() < 0.5 ? color(20, 20, 20 , 160): color(255, 255, 255, 135));
        g.rect(0, 0, wisW, wisH);
        g.pop();
        } 
}

function drawBd(btype, g) {
    if (btype == 0) {
        g = bg;
        g.push();
        g.noFill();
        let strBdCol = color(random(col2));
        strBdCol.setAlpha(random(65, 80));
        g.stroke(strBdCol);
        g.strokeWeight(bd);
        g.rect(bd / 2, bd / 2, wisW - bd, wisH - bd);
        g.pop();
    }
    if (btype == 2) {
        g = bg;
        let lineLength, lineWeight;
        let lineDensity = 0.5;
        g.push();
        g.noFill();
        let strBdCol = color(random(col2));
        strBdCol.setAlpha(random(65, 80));
        g.stroke(strBdCol);

        for (let x = 0; x < wisW; x += lineDensity) {
            lineLength = random(bd / 2, bd2 * 2);
            lineWeight = random(0.25, 2.5);
            g.strokeWeight(lineWeight * m);
            g.line(x, 0, x, lineLength);
            g.line(x, wisH, x, wisH - lineLength);
        }
        for (let y = 0; y < wisH; y += lineDensity) {
            lineLength = random(bd / 2, bd2 * 2);
            lineWeight = random(0.5, 2.5);
            g.strokeWeight(lineWeight * m);
            g.line(0, y, lineLength, y);
            g.line(wisW, y, wisW - lineLength, y);
        }
        g.pop();
    }
    if (btype == 3) {
        g = bg;
        g.push();
        g.noFill();
        let strBdCol = color(random(col2));
        strBdCol.setAlpha(random(65, 80));
        g.stroke(strBdCol);
        g.strokeWeight(bd * ar * 1.3 * m);
        g.line(0, bd / 2, wisW + bd, bd / 2);
        g.line(bd / 2, 0, bd / 2, wisH + bd);
        g.line(0, wisH - bd / 2, wisW, wisH - bd / 2);
        g.line(wisW - bd / 2, 0, wisW - bd / 2, wisH);

        g.fill(random(col2));
        for (let i = 0; i < wisW; i += random(bd, bd2)) {
            g.square(+i * 2, 0, random(bd, bd2));
            g.square(+i * 2, wisH, -random(bd, bd2));
        }
        for (let i = 0; i < wisH; i += random(bd, bd2)) {
            g.square(0, +i * 2, random(bd, bd2));
            g.square(wisW, +i * 2, -random(bd, bd2));
        }
        g.pop();
    }
}

function morePoint(grS, floop, nPl, nPh, pSs, pSb, method, gS, gD) {
    let gridSize = grS;
    let f = 0;

    let cellWidth = gS.width / gridSize;
    let cellHeight = gS.height / gridSize;

    gS.push();
    gS.noStroke();
    gS.fill(20, 35);
    gS.rect(0, 0, gS.width, gS.height);
    gS.pop();

    while (f < floop) {
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                let numPoints = map(i + j, 0, 2 * gridSize, nPl, nPh);
                let pointSize = map(i + j, 0, 2 * gridSize, pSs, pSb);

                for (let p = 0; p < numPoints; p++) {
                    let x = i * cellWidth + random(cellWidth);
                    let y = j * cellHeight + random(cellHeight);
                    let imgX = floor(map(x, 0, wisW, 0, gD.width));
                    let imgY = floor(map(y, 0, wisH, 0, gD.height));
                    let index = 4 * (imgY * gD.width + imgX);
                    let col = [gD.pixels[index], gD.pixels[index + 1], gD.pixels[index + 2], gD.pixels[index + 3]];

                    if (method == 0) {
                        gS.push();
                        col[3] = 40;
                        gS.stroke(col);
                        gS.strokeWeight(random(1, 12));
                        gS.noFill();
                        //gS.fill(col);
                        if (random() < 0.005) {
                            random() < 0.5 ? gS.rect(x, y, pointSize * random(2, 10)) : gS.triangle(x + random(10, 40), y + random(10, 40), x + pointSize * random(2, 4), y + pointSize, x + pointSize, y + pointSize * random(2, 4));
                        } else {
                            random() < 0.15 ? gS.circle(x, y, pointSize * random(2, 10)) : gS.line(x, y, x + pointSize * random(12, 20), y + pointSize * random(12, 20));
                        }
                        gS.pop(); 
                    }
                    if (method == 1) {
                        gS.push();
                        col[3] = 80;
                        gS.stroke(col);
                        col[3] = 50;
                        gS.fill(col);
                        gS.strokeWeight(random(1, 8));
                        gS.fill(col);
                        gS.line(x, y, x + pointSize * random(6, 20), y + pointSize * random(6, 20));
                        gS.pop(); 
                    }
                    if (method == 2) {
                        gS.push();
                        col[3] = 60;
                        gS.stroke(col);
                        col[3] = 60;
                        gS.fill(col);
                        gS.strokeWeight(random(1, 12));
                        gS.fill(col);
                        gS.rect(x, y, pointSize * random(1, 4), pointSize * random(1, 5));
                        gS.pop(); 
                    }
                }
            }
        }
        f++;
    }
}

function createDune(g, y) {
    let points = [];
    let waveAmp = duneH * random(0.15, 0.55);
    let waveFreq = TWO_PI / wisW;

    for (let x = 0; x < wisW; x += 1) {
        for (let yOff = 0; yOff < duneH; yOff += 1) {
            let yNoise = noise(x * 0.003, (y + yOff) * 0.005) * duneH;
            let yWave = waveAmp * sin(waveFreq * x);
            yWave = waveAmp * sin(waveFreq * x - phase);
            let pt = createVector(x, y + yOff + yNoise + yWave);
            pt.duneY = y;
            points.push(pt);
        }
    }
    phase += 0.2;
    return points;
}

function createCloud(g, y) {
    let points = [];
    for (let x = 0; x < width; x += 7) {
        for (let yOff = 0; yOff < cloudHeight; yOff += 7) {
            let yNoise = noise(x * 0.035, (y + yOff) * 0.015) * cloudHeight;
            let pt = createVector(x, y + yOff + yNoise);
            pt.cloudY = y;
            points.push(pt);
        }
    }
    return points;
}

function initStratus() {
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
    g.push();
    g.drawingContext.setLineDash([4, 2, 1, 3, 5]);
    g.pop();
  
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
    g.push();
    g.drawingContext.setLineDash([]);
    g.pop();
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
        g.push();
        g.strokeWeight(random(4, 10) * m);
        g.stroke(random(colr22));
        g.line(p1.x, p1.y, midPoint.x, midPoint.y);
        g.pop();
      }
    }
  }
  
  function initRise(g, nW) {
    let numOfWaves = nW;
    for (let i = 0; i < numOfWaves; i++) {
      let rise = createRise(g, g.height / 2 + i * riseH / 2, i);
      drawRise(g, rise);
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
        let pt = createVector(x, y + yNoise + yWave + perspectiveOffset);
        g.push();
        points.push(pt);
        g.pop();
    }
  
    return points;
  }
  
function drawRise(g, rise) {
    let numOfLines = int(random(8, 14));
        for (let i = 0; i < numOfLines; i++) {
            let offset = (riseH / numOfLines) * i;

            let dashLength = map(i, 0, numOfLines - 1, 0, 15);
            g.drawingContext.setLineDash([dashLength, dashLength]);

            g.push();
            // g.fill(random(col6));
            g.noFill();
            g.stroke(random(col6));
            g.strokeWeight(random(0.5, 2.5) * m);
            g.beginShape();
            for (let pt of rise) {
            g.vertex(pt.x, pt.y + offset);
            }
            g.endShape();
            g.pop();
        }
    g.push();
    g.drawingContext.setLineDash([]);
    g.pop();
}


  // BEND //

  function rndBend(startX, startY, endX, endY, deviation, g) {
      if ($fx.getFeature("bend mode") >= 0 && $fx.getFeature("bend mode") < 0.35) {
          rndBendContinuous(startX, startY, endX, endY, deviation, g);
      } else if ($fx.getFeature("bend mode") >= 0.35 && $fx.getFeature("bend mode") < 0.70) {
          rndBendDiscrete(startX, startY, endX, endY, deviation, g);
      } else {
          rndBendHash(startX, startY, endX, endY, deviation, g);
      }
  }
  
  function rndBendVertex(x1, y1, x2, y2, deviation, g) {
    if ($fx.getFeature("bend mode") >= 0 && $fx.getFeature("bend mode") < 0.35) {
            rndBendVertexContinuous(x1, y1, x2, y2, deviation, g);
    } else if ($fx.getFeature("bend mode") >= 0.35 && $fx.getFeature("bend mode") < 0.70) {
        rndBendVertexDiscrete(x1, y1, x2, y2, deviation, g);
    } else {
        rndBendVertexHash(x1, y1, x2, y2, deviation, g);
    }
  }
  
  function rndBendContinuous(startX, startY, endX, endY, deviation, g) {

    deviation * 0.75;
    deviation *= m;
    let midX = (startX + endX) / 2;
    let midY = (startY + endY) / 2;

    midX += random(-deviation, deviation);
    midY += random(-deviation, deviation);
    g.push();
    g.noFill();
    g.stroke(random(col5));
    g.line(startX, startY, midX, midY);
    g.line(midX, midY, endX, endY);
    g.pop();
  }
  
  function rndBendDiscrete(startX, startY, endX, endY, deviation, g) {

    deviation * 0.75;
    deviation *= m;
    let midX = (startX + endX) / 2;
    let midY = (startY + endY) / 2;

    midX += random(-deviation, deviation);
    midY += random(-deviation, deviation);

    g.push();
    g.noFill();
    g.stroke(random(col5));
    g.line(startX, startY, midX, midY);
    g.line(midX, midY, endX, endY);
    g.pop();
  }
  
  function rndBendVertexContinuous(x1, y1, x2, y2, deviation, g) {

    deviation * 0.75;
    deviation *= m;
    let midX = (x1 + x2) / 2 + random(-deviation, deviation);
    let midY = (y1 + y2) / 2 + random(-deviation, deviation);
    g.push();
    g.noFill();
    g.stroke(random(col5));
    g.vertex(midX, midY);
    g.pop();
  }
  
  function rndBendVertexDiscrete(x1, y1, x2, y2, deviation, g) {
      
    deviation * 0.75;
    deviation *= m;
    let midX = (x1 + x2) / 2 + random(-deviation, deviation);
    let midY = (y1 + y2) / 2 + random(-deviation, deviation);
    g.push();
    g.noFill();
    g.stroke(random(col5));
    g.vertex(midX, midY);
    g.pop();
  }
  

function rndBendHash(startX, startY, endX, endY, deviation, g) {
    g.push();
    g.noFill();
    g.stroke(random(col5));
    g.beginShape();
    drawContinuousLine(startX, startY, endX, endY, 75, deviation, g); 
    g.endShape();
    g.pop();
}

function rndBendVertexHash(x1, y1, x2, y2, deviation, g) {
    g.push();
    g.noFill();
    g.stroke(random(col5));
    g.beginShape();
    g.vertex(x1, y1);
    drawContinuousLine(x1, y1, x2, y2, 75, deviation, g); 
    g.vertex(x2, y2);
    g.endShape();
    g.pop();
}

function drawContinuousLine(x1, y1, x2, y2, numPoints, deviation, g) {
    deviation * 0.75;
    deviation *= m;
    for (let i = 0; i <= numPoints; i++) {
        let t = i / numPoints;
        let x = lerp(x1, x2, t);
        let y = lerp(y1, y2, t);
        x += random(-deviation, deviation);
        y += random(-deviation, deviation);
        g.push();
        g.noFill();
        g.vertex(x, y);
        g.pop();
    }
}


// GRADIENTS //

function isColorDark(c) {
    let grayscale = 0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2];
    return grayscale < 128;
}

function gradBg(numColors, ...colors) {
    let colorStops = [];
    for (let i = 0; i < numColors; i++) {
        colorStops.push(i / (numColors - 1));
    }

    let bezierGradient = chroma.bezier(colors);

    for (let y = 0; y < wisH * pD; y++) {
        let t = y / (wisH * pD);
        let rA = random(0.01, 0.4);
        let color = bezierGradient(t).alpha(rA);
        push();
        stroke(color.hex());
        line(0, y, wisW, y);
        pop();
    }
}

function gradDoors(g, numColors, ...colors) {
    let colorStops = [];
    for (let i = 0; i < numColors; i++) {
        colorStops.push(i / (numColors - 1));
    }

    let bezierGradient = chroma.bezier(colors);

    for (let y = 0; y < wisH * pD; y++) {
        let t = y / (wisH * pD);
        let rA = random(0.7, 1);
        let color = bezierGradient(t).alpha(rA);
        g.push();
        g.stroke(color.hex());
        g.line(0, y, wisW, y);
        g.pop();
    }
}

function doorsGrad(g, x, y, w, h, c1, c2, axis) {
    g.noFill();

    if (axis === "Y") {
        for (let i = y; i <= y + h; i++) {
            var inter = map(i, y, y + h, 0, 1);
            var c = lerpColor(c1, c2, inter);
            g.push();
            g.stroke(c);
            g.line(x, i, x + w, i);
            g.pop();
        }
    } else if (axis === "X") {
        for (let j = x; j <= x + w; j++) {
            var inter2 = map(j, x, x + w, 0, 1);
            var d = lerpColor(c1, c2, inter2);
            g.push();
            g.stroke(d);
            g.line(j, y, j, y + h);
            g.pop();
        }
    } else if (axis === "R") {
        var centerX = x + w / 2;
        var centerY = y + h / 2;
        var maxDistance = dist(centerX, centerY, x, y);

        for (let i = x; i <= x + w; i++) {
            for (let j = y; j <= y + h; j++) {
                var distance = dist(i, j, centerX, centerY);
                var angle = map(distance, 0, maxDistance, 0, TWO_PI);
                var inter3 = map(angle, 0, TWO_PI, 0, 1);
                var e = lerpColor(c1, c2, inter3);
                g.push();
                g.stroke(e);
                g.point(i, j);
                g.pop();
            }
        }
    }
}

function bgGrad(x, y, w, h, c1, c2, axis) {
    noFill();

    if (axis === "Y") {
        for (let i = y; i <= y + h; i++) {
            var inter = map(i, y, y + h, 0, 1);
            var c = lerpColor(c1, c2, inter);
            push();
            stroke(c);
            line(x, i, x + w, i);
            pop();
        }
    } else if (axis === "X") {
        for (let j = x; j <= x + w; j++) {
            var inter2 = map(j, x, x + w, 0, 1);
            var d = lerpColor(c1, c2, inter2);
            push();
            stroke(d);
            line(j, y, j, y + h);
            pop();
        }
    } else if (axis === "R") {
        var centerX = x + w / 2;
        var centerY = y + h / 2;
        var maxDistance = dist(centerX, centerY, x, y);

        for (let i = x; i <= x + w; i++) {
            for (let j = y; j <= y + h; j++) {
                var distance = dist(i, j, centerX, centerY);
                var angle = map(distance, 0, maxDistance, 0, TWO_PI);
                var inter3 = map(angle, 0, TWO_PI, 0, 1);
                var e = lerpColor(c1, c2, inter3);
                push();
                stroke(e);
                point(i, j);
                pop();
            }
        }
    }
}


// UTILS //

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function pixDens(density) {
    pD = density;
    clear();
    await setup();
    saveCanvas(`cubes_pixD${density}_${$fx.hash}`, 'png');
}

async function keyTyped() {
    let keyLower = key.toLowerCase();
    if (keyLower === "r") {
        clear();
        await setup();
    } else if (keyLower === "s") {
        saveCanvas(`naïf_altered_${$fx.hash}-${$fx.minter}`, 'png');
        save(original, `naïf_original_${$fx.hash}-${$fx.minter}`, 'png');
        save(loader, `naïf_loader_${$fx.hash}-${$fx.minter}`, 'png');
    } else if (keyLower === "j") {
        saveCanvas(`naïf_altered_${$fx.hash}-${$fx.minter}`, 'jpg');
        save(original, `naïf_original_${$fx.hash}-${$fx.minter}`, 'jpg');
        save(loader, `naïf_loader_${$fx.hash}-${$fx.minter}`, 'jpg');
    } else if (!isNaN(keyLower)) {
        await pixDens(Number(keyLower));
    }
}

