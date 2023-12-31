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
    //saveCanvas(`naïf_pixScreen_${$fx.hash}-${$fx.minter}`, 'png');
    noLoop();
}

function structbg(g) {
    let clr1 = random() > 0.5 ? 0 : 255;
    let clr2 = random() > 0.5 ? 0 : 255;
    let clr3 = random() > 0.5 ? 0 : 255;
    bg.background(clr1, clr2, clr3, 255);

    for (let i = 0; i < 25; i++) {
        for (let door of doors) {
            if (door instanceof Door || door instanceof MultiDoor) {
                if (random() > 0.5) {
                    if (isBgColorDark) {
                        door.drawStruct(color(random(col1)), random(1, 60) * m);
                        g.blendMode(SOFT_LIGHT);
                        g.globalAlpha=0.005;
                        // g.filter="blur(280px)"
                        // g.filter="GRAY";
                        door.drawDoor(color(random(col1)), random(1, 60) * m);
                        g.blendMode(SOFT_LIGHT);
                        g.globalAlpha=0.005;
                        // g.filter="blur(280px)"
                        // g.filter="GRAY";
                    } else {
                        door.drawStruct(color(random(col1)), random(1, 80) * m);
                        g.blendMode(SOFT_LIGHT);
                        g.globalAlpha=0.005;
                        // g.filter="blur(280px)"
                        // g.filter="GRAY";
                        door.drawDoor(color(random(col1)), random(1, 80) * m);
                        g.blendMode(HARD_LIGHT);
                        g.globalAlpha=0.005;
                        // g.filter="blur(250px)"
                        // g.filter="GRAY";
                    }
                }
            }
        }
    }
}

function drawBd(btype, g) {
    if (btype == 0) {
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

function morePoint(grS, floop, nPl, nPh, pSs, pSb, g) {
    let gridSize = grS;
    let f = 0;
    let d = g;

    let cellWidth = doorContent.width / gridSize;
    let cellHeight = doorContent.height / gridSize;

    d.push();
    d.noStroke();
    d.fill(20, 35);
    d.rect(0, 0, d.width, d.height);
    d.pop();

    while (f < floop) {
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                let numPoints = map(i + j, 0, 2 * gridSize, nPl, nPh);
                let pointSize = map(i + j, 0, 2 * gridSize, pSs, pSb);

                for (let p = 0; p < numPoints; p++) {
                    let x = i * cellWidth + random(cellWidth);
                    let y = j * cellHeight + random(cellHeight);
                    let imgX = floor(map(x, 0, wisW, 0, d.width));
                    let imgY = floor(map(y, 0, wisH, 0, d.height));
                    let index = 4 * (imgY * d.width + imgX);
                    let col = [d.pixels[index], d.pixels[index + 1], d.pixels[index + 2], d.pixels[index + 3]];

                    // d.push();
                    // d.stroke(col);
                    // d.strokeWeight(random(1, 12));
                    // d.noFill();
                    // //d.fill(col);
                    // if (random() < 0.005) {
                    //     random() < 0.5 ? d.rect(x, y, pointSize * random(2, 10)) : d.triangle(x + random(10, 40), y + random(10, 40), x + pointSize * random(2, 4), y + pointSize, x + pointSize, y + pointSize * random(2, 4));
                    // } else {
                    //     random() < 0.15 ? d.circle(x, y, pointSize * random(2, 10)) : d.line(x, y, x + pointSize * random(12, 20), y + pointSize * random(12, 20));
                    // }
                    // d.pop(); 

                    d.push();
                    d.stroke(col);
                    d.strokeWeight(random(1, 8));
                    d.fill(col);
                    d.line(x, y, x + pointSize * random(6, 20), y + pointSize * random(6, 20));
                    d.pop(); 

                }
            }
        }
        f++;
    }
}

function createDune(y) {
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

function createCloud(y) {
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

function drawPoint() {
    if (globalPointSize <= minPointSize * 2) {
        noLoop();
        return;
    }

    let cellW = doorContent.width / pointGridSize;
    let cellH = doorContent.height / pointGridSize;

    let maxDepth = 100;
    for (let i = 0; i < pointGridSize; i++) { //noprotect
        for (let j = 0; j < pointGridSize; j++) {
            let randomX = random(-cellW / 2, cellW / 2);
            let randomY = random(-cellH / 2, cellH / 2);
            let centerNode = new makeNode(null, {
                x: i * cellW + cellW / 2 + randomX,
                y: j * cellH + cellH / 2 + randomY
            }, globalPointSize, maxDepth);
            allNodes.push(centerNode);

            centerNode.grow();
        }
    }

    for (let n = 0; n < allNodes.length; n++) {
        allNodes[n].display();
    }

    pointSizeDecrement = globalPointSize / 150;
    if (pointSizeDecrement < 0.01) pointSizeDecrement = 0.001;
    globalPointSize -= pointSizeDecrement;
}


function makeNode(parentNode, position, radius, depth) {

    this.parentNode = parentNode;
    this.position = position;
    this.radius = radius;
    this.depth = depth;
    this.id = counter++;
    this.childrenNodes = [];
    angleMode(RADIANS);

    this.grow = function () {
        let newRadius = this.radius * 0.9;
        if (newRadius < minPointSize * 0.5 || this.depth <= -10) return; 

        let angle = random(TWO_PI);
        let newX = this.position.x + this.radius * 1.5 * cos(angle); 
        let newY = this.position.y + this.radius * 1.5 * sin(angle); 

        let newNode = new makeNode(this, { x: newX, y: newY }, newRadius, this.depth - 1);
        let placeable = true;

        for (let n = 0; n < allNodes.length; n++) {
            if (newNode.intersects(allNodes[n])) {
                placeable = false;
            }
        }

        if (placeable) {
            allNodes.push(newNode);
            this.childrenNodes.push(newNode);
            newNode.grow();
        }
    }

    this.intersects = function (otherNode) {
        let dist = sqrt(sq(this.position.x - otherNode.position.x) + sq(this.position.y - otherNode.position.y));
        return (this.id != otherNode.id &&
            dist < (this.radius + otherNode.radius) * 0.005 &&
            !this.childrenNodes.includes(otherNode) &&
            (!this.parentNode || !this.parentNode.childrenNodes.includes(otherNode)));
    }

    this.display = function () {
        let doorContentX = floor(map(this.position.x, 0, wisW, 0, doorContent.width));
        let doorContentY = floor(map(this.position.y, 0, wisH, 0, doorContent.height));
        let index = 4 * (doorContentY * doorContent.width + doorContentX);

        if (index < 0 || index >= doorContent.pixels.length - 2) return;

        let col = [doorContent.pixels[index], doorContent.pixels[index + 1], doorContent.pixels[index + 2], doorContent.pixels[index + 3]];

        if (col.some(isNaN)) return;

        if (nodeType == 0) {
            push();
            col[3] = 15;
            doorContent.fill(col);
            col[3] = 50;
            doorContent.stroke(col);
            doorContent.strokeWeight(0.25 * m);
            for (let i = 0; i < random(2, 5); i++) {
                this.radius = Math.pow(1.165, i + 10);
                doorContent.drawingContext.setLineDash([4 * m, 3 * m, 5 * m, 2 * m]);
                doorContent.circle(this.position.x, this.position.y, this.radius);
            }
            pop();
        }
        if (nodeType == 1) {
            push();
            col[3] = 30;
            doorContent.fill(col);
            col[3] = 60;
            doorContent.stroke(col);
            doorContent.strokeWeight(0.35 * m);
            doorContent.ellipse(this.position.x, this.position.y, this.radius, this.radius);
            pop();
        }
        if (nodeType == 2) {
            push();
            col[3] = 25;
            doorContent.fill(col);
            col[3] = 40;
            doorContent.stroke(col);
            doorContent.strokeWeight(0.35 * m);
            doorContent.rect(this.position.x - this.radius / 2, this.position.y - this.radius / 2, this.radius, this.radius);
            pop();
        }

        if (this.parentNode) {
            rndNodLine = random();
            push();
            if (rndNodLine < 0.6) {
                doorContent.stroke(col);
                doorContent.drawingContext.setLineDash([1 * m, 0, 1 * m]);
                doorContent.line(this.position.x, this.position.y, this.parentNode.position.x, this.parentNode.position.y);
            } else {
                doorContent.stroke(col);
                doorContent.drawingContext.setLineDash([1 * m, 0, 1 * m]);
                doorContent.curve(this.position.x, this.position.y, this.position.x + random(-5, 5), this.position.y + random(-5, 5), this.parentNode.position.x + random(-5, 5), this.parentNode.position.y + random(-5, 5), this.parentNode.position.x, this.parentNode.position.y);
            }
            pop();
        }
    }
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
  
  function initRise() {
    let numOfWaves = int(random(12, 18));
    for (let i = 0; i < numOfWaves; i++) {
      let rise = createRise(doorContent, doorContent.height / 2 + i * riseH / 2, i);
      drawRise(doorContent, rise);
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
      let pt = g.createVector(x, y + yNoise + yWave + perspectiveOffset);
      points.push(pt);
    }
  
    return points;
  }
  
  function drawRise(g, rise) {
    let numOfLines = int(random(8, 14));
    g.push();
    for (let i = 0; i < numOfLines; i++) {
      let offset = (riseH / numOfLines) * i;
  
      let dashLength = map(i, 0, numOfLines - 1, 0, 15);
      g.drawingContext.setLineDash([dashLength, dashLength]);
    
      
      g.fill(random(col6));
      //g.noFill();
      g.stroke(random(col6));
      g.strokeWeight(random(0.5, 2.5) * m);
      g.beginShape();
      for (let pt of rise) {
        g.vertex(pt.x, pt.y + offset);
      }
      g.endShape();
      
    }
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
      
    deviation *= m;
    let midX = (startX + endX) / 2;
    let midY = (startY + endY) / 2;

    midX += random(-deviation, deviation);
    midY += random(-deviation, deviation);
    g.push();
    g.noFill();
    g.line(startX, startY, midX, midY);
    g.line(midX, midY, endX, endY);
    g.pop();
  }
  
  function rndBendDiscrete(startX, startY, endX, endY, deviation, g) {
      
    deviation *= m;
    let midX = (startX + endX) / 2;
    let midY = (startY + endY) / 2;

    midX += random(-deviation, deviation);
    midY += random(-deviation, deviation);

    g.push();
    g.noFill();
    g.line(startX, startY, midX, midY);
    g.line(midX, midY, endX, endY);
    g.pop();
  }
  
  function rndBendVertexContinuous(x1, y1, x2, y2, deviation, g) {
      
    deviation *= m;
    let midX = (x1 + x2) / 2 + random(-deviation, deviation);
    let midY = (y1 + y2) / 2 + random(-deviation, deviation);
    g.push();
    g.vertex(midX, midY);
    g.pop();
  }
  
  function rndBendVertexDiscrete(x1, y1, x2, y2, deviation, g) {
      
    deviation *= m;
    let midX = (x1 + x2) / 2 + random(-deviation, deviation);
    let midY = (y1 + y2) / 2 + random(-deviation, deviation);
    g.push();
    g.vertex(midX, midY);
    g.pop();
  }
  

function rndBendHash(startX, startY, endX, endY, deviation, g) {
    g.push();
    g.noFill();
    g.beginShape();
    drawContinuousLine(startX, startY, endX, endY, 75, deviation, g); 
    g.endShape();
    g.pop();
}

function rndBendVertexHash(x1, y1, x2, y2, deviation, g) {
    g.push();
    g.noFill();
    g.beginShape();
    g.vertex(x1, y1);
    drawContinuousLine(x1, y1, x2, y2, 75, deviation, g); 
    g.vertex(x2, y2);
    g.endShape();
    g.pop();
}

function drawContinuousLine(x1, y1, x2, y2, numPoints, deviation, g) {
    deviation *= m;
    for (let i = 0; i <= numPoints; i++) {
        let t = i / numPoints;
        let x = lerp(x1, x2, t);
        let y = lerp(y1, y2, t);
        x += random(-deviation, deviation);
        y += random(-deviation, deviation);
        g.push();
        g.vertex(x, y);
        g.pop();
    }
}


// function rndBend(startX, startY, endX, endY, deviation) {
//     beginShape();
//     drawContinuousLine(startX, startY, endX, endY, 50, deviation); 
//     endShape();
// }

// function rndBendVertex(x1, y1, x2, y2, deviation) {
//     beginShape();
//     vertex(x1, y1);
//     drawContinuousLine(x1, y1, x2, y2, 50, deviation); 
//     vertex(x2, y2);
//     endShape();
// }

// function drawContinuousLine(x1, y1, x2, y2, numPoints, deviation) {
//     deviation *= m;
//     for (let i = 0; i <= numPoints; i++) {
//         let t = i / numPoints;
//         let x = lerp(x1, x2, t);
//         let y = lerp(y1, y2, t);
//         x += random(-deviation, deviation);
//         y += random(-deviation, deviation);
//         vertex(x, y);
//     }
// }

// function rndBend(startX, startY, endX, endY, deviation) {
//     deviation *= m;
//     let midX = (startX + endX) / 2;
//     let midY = (startY + endY) / 2;

//     midX += random(-deviation, deviation);
//     midY += random(-deviation, deviation);

//     line(startX, startY, midX, midY);
//     line(midX, midY, endX, endY);
// }

// function rndBendVertex(x1, y1, x2, y2, deviation) {
//     deviation *= m;
//     let midX = (x1 + x2) / 2 + random(-deviation, deviation);
//     let midY = (y1 + y2) / 2 + random(-deviation, deviation);
//     vertex(midX, midY);
// }



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
        stroke(color.hex());
        line(0, y, wisW, y);
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
        g.stroke(color.hex());
        g.line(0, y, wisW, y);
    }
}

function doorsGrad(g, x, y, w, h, c1, c2, axis) {
    g.noFill();

    if (axis === "Y") {
        for (let i = y; i <= y + h; i++) {
            var inter = map(i, y, y + h, 0, 1);
            var c = lerpColor(c1, c2, inter);
            g.stroke(c);
            g.line(x, i, x + w, i);
        }
    } else if (axis === "X") {
        for (let j = x; j <= x + w; j++) {
            var inter2 = map(j, x, x + w, 0, 1);
            var d = lerpColor(c1, c2, inter2);
            g.stroke(d);
            g.line(j, y, j, y + h);
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
                g.stroke(e);
                g.point(i, j);
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
            stroke(c);
            line(x, i, x + w, i);
        }
    } else if (axis === "X") {
        for (let j = x; j <= x + w; j++) {
            var inter2 = map(j, x, x + w, 0, 1);
            var d = lerpColor(c1, c2, inter2);
            stroke(d);
            line(j, y, j, y + h);
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
                stroke(e);
                point(i, j);
            }
        }
    }
}


// UTILS //

function keyPressed() {
    if (key == 'S' || key == 's') {
        saveCanvas(`naïf_pixScreen_${$fx.hash}-${$fx.minter}`, 'png');
    }
}

function keyTyped() {
    if (key === 'l' || key === 'L') {
        showLoader = !showLoader;
    }
}