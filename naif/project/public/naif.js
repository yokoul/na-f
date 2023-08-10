// FX Features //
$fx.rand.reset();
$fx.randminter.reset();


// VARIABLES //
let seed = fxrand() * 888786858483828180;
//console.log(seed);
let sayit = fxrand();
let currentState = 'loading';
let loopCount = 0;
let noiseSeedValue = 0;
let col1, col2, col3, col4, col5, doorContent, rows, cols, skyX, skyY, loader, font;
let showLoader = false;
let cool1 = "https://coolors.co/c2efb3-97abb1-892f65-735f3d-594a26".split("/").pop().split("-").map((a) => "#" + a);
let cool11 = "https://coolors.co/f1fbee-c5d0d3-c9be9d-b2986c-9d8243".split("/").pop().split("-").map((a) => "#" + a);
let cool12 = "https://coolors.co/palette/f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0".split("/").pop().split("-").map((a) => "#" + a);
let cool2 = "https://coolors.co/db2b39-29335c-f3a712-f0cea0-534d41".split("/").pop().split("-").map((a) => "#" + a);
let cool21 = "https://coolors.co/0081af-00abe7-2dc7ff-ead2ac-eaba6b".split("/").pop().split("-").map((a) => "#" + a);
let cool22 = "https://coolors.co/palette/03045e-023e8a-0077b6-0096c7-00b4d8-48cae4-90e0ef-ade8f4-caf0f8".split("/").pop().split("-").map((a) => "#" + a);
let cool3 = "https://coolors.co/a63446-fbfef9-0c6291-000004-7e1946".split("/").pop().split("-").map((a) => "#" + a);
let cool31 = "https://coolors.co/f7b2b7-f7717d-de639a-7f2982-16001e".split("/").pop().split("-").map((a) => "#" + a);
//ajout du 27.7
let cool4 = "https://coolors.co/dbd56e-88ab75-2d93ad-7d7c84-de8f6e".split("/").pop().split("-").map((a) => "#" + a);
let cool41 = "https://coolors.co/044389-fcff4b-ffad05-7cafc4-5995ed".split("/").pop().split("-").map((a) => "#" + a);
let cool5 = "https://coolors.co/241023-6b0504-a3320b-d5e68d-47a025".split("/").pop().split("-").map((a) => "#" + a);
let cool51 = "https://coolors.co/fdfffc-235789-c1292e-f1d302-161925".split("/").pop().split("-").map((a) => "#" + a);
let cool6 = "https://coolors.co/272932-4d7ea8-828489-9e90a2-b6c2d9".split("/").pop().split("-").map((a) => "#" + a);
let cool61 = "https://coolors.co/e08dac-6a7fdb-57e2e5-45cb85-153131".split("/").pop().split("-").map((a) => "#" + a);

let doorW = 80; //80
let doorH = 140; //140
let doorBd = 2;
let shdwL = 60; //doorH / 3; //60
let shdwA = 0.5; //0.5
let gap = 60; //60; 
let bd = 0;
let bd2 = bd / 2;
let depth = 60; //60
let padding = 25; //25
let gS = 15; //15
let pD = 4;
let ar = 1;

let drawShdw = true;
let drawBGCubes = true;
let sizeMod = 6; // 6
let size = 2; // 2
let cubesRows = 90; //90 pour 1000px
let cubesCols = 90; //90 pour 1000px
let roundIt = false;
let squareIt = true;
let nos = 0; // 0:noStroke, 1:stroke(fillCol), 2:stroke(0)
let nosh = false; //ajout d'ombre
let nosColor = false;
let strokeW = 2;

let noiseValues = [];

let nodeThis = true;
let nodeType = 0; //0:hashedCircle, 1:circle, 2:rect
let pointGridSize = 7; //12 = quasiFull, 10 = bon partiel, 5 et 3 vont bien, 3 est un minimum
let globalPointSize = 24;
let minPointSize = 1;
let pointSizeDecrement = 1.5;

let allNodes = [];
let counter = 0;

let isBgColorDark = false;
let drawStr = true;
let deviation = 0;

let phase = 0;
let duneH = 75;
let duneCount = 7;
let dunes = [];

let stratus = false; //base, evolution
let cloud;
let cloudCount = 3;
let cloudHeight = 230;
let clouds = [];

let stratusCircles = [];
let numberOfCircles = 55;
let riseH = 130;
let perspectiveFactor = 0.04; 

let doors = [];
let doorContents = [];

function preload() {
    exo_black = loadFont('fonts/Exo-Black.ttf');
    exo_bold = loadFont('fonts/Exo-Bold.ttf');
    exo_regular = loadFont('fonts/Exo-Regular.ttf');
    exo_semibold = loadFont('fonts/Exo-SemiBold.ttf');
    exo_thin = loadFont('fonts/Exo-Thin.ttf');
    exo_extra_light = loadFont('fonts/Exo-ExtraLight.ttf');
    exo_light = loadFont('fonts/Exo-Light.ttf');
    exo_medium = loadFont('fonts/Exo-Medium.ttf');
    exo_extra_bold = loadFont('fonts/Exo-ExtraBold.ttf');
}
let fontPts = [];


// FUNCTIONS fxFeatures //

function rngBackgroundType(value) {
    if (value >= 0 && value < 0.125) {
        return "cubik A";
    } else if (value >= 0.125 && value < 0.25) {
        return "cubik B";
    } else if (value >= 0.25 && value < 0.375) {
        return "cubik full B";
    } else if (value >= 0.375 && value < 0.5) {
        return "cubik alea";
    } else if (value >= 0.5 && value < 0.625) {
        return "cubik full C";
    } else if (value >= 0.625 && value < 0.75) {
        return "cubik C";
    } else if (value >= 0.75 && value < 0.86) {
        return "cubik full";
    } else if (value >= 0.86 && value < 0.9) {
        return "bubulles";
    } else if (value >= 0.9 && value < 0.96) {
        return "cubik destruct";
    } else {
        return "flat";
    }
}

function rngBackgroundAxis(value) {
    if (value < 0.5) {
        return "X";
    } else if (value >= 0.95){
        return "R";
    } else {
        return "Y";
    }
}

function rngDeviaType(value) {
    let deviation;

    if (value >= 0 && value < 0.25) {
        deviation = value * 60;  //random(0, 15);
        return "low";
    } 
    else if (value >= 0.25 && value < 0.55) {
        deviation = (value - 0.25) * 100 + 15; //random(15, 45);
        return "mid";
    } 
    else if (value >= 0.55 && value < 0.85) {
        deviation = (value - 0.55) * 83.33 + 40; //random(40, 65);
        return "high";
    } 
    else {
        deviation = 0; 
        return "none";
    }
}

$fx.features({
    "border size": $fx.rand() < 0.95 ?'0':'20',
    "node type": Math.floor($fx.rand() * 3),
    "node grid size": Math.floor($fx.rand() * 5) + 2,
    "nos type": Math.floor($fx.rand() * 3),
    "base model": $fx.rand() < 0.5 ? true : false,
    "cloud count": Math.floor($fx.rand() * 3) + 2,
    "cloud height": Math.floor($fx.rand() * 150) + 190,
    "deviation": rngDeviaType(fxrand()),
    "background type": rngBackgroundType(fxrand()),
    "background axis": rngBackgroundAxis(fxrand()),
    "number of stratus": Math.floor($fx.rand() * 25) + 50,
    "rise height": Math.floor($fx.rand() * 50) + 130,
});

function setParams(m) {
    /* correcteur dimensionnel */
    doorW = doorW * m;
    doorH = doorH * m;
    doorBd = doorBd * m;
    shdwL = shdwL * m;
    shdwA = shdwA * m;
    gap = gap * m;
    bd = bd * m;
    depth = depth * m;
    padding = padding * m;
    sizeMod = sizeMod * m;
    size = size * m;
    globalPointSize = globalPointSize * m;
    minPointSize = minPointSize * m;
    pointSizeDecrement = pointSizeDecrement * m;
    deviation = deviation * m;
    duneH = duneH * m;

    /* valeurs aléatoirisée */
    doorBd = int(random(1, 3) * m);
    pointGridSize = $fx.getFeature("node grid size"); //floor(random(2, 8));
    nodeType = $fx.getFeature("node type"); //floor(random(0, 3));
    nos = $fx.getFeature("nos type"); //floor(random(0, 3));
    cloudCount = $fx.getFeature("cloud count"); //int(random(2, 4) * m);
    cloudHeight = $fx.getFeature("cloud height") * m; //int(random(190, 360) * m);
    bd = $fx.getFeature("border size") * m; //(random() < 0.95 ? 0 : 20) * m;
    stratus = $fx.getFeature("base model");
    numberOfCircles = $fx.getFeature("number of stratus");
    riseH = $fx.getFeature("rise height") * m;
}

// SETUP //

function setup() {
    $fx.rand.reset();
    $fx.randminter.reset();
    //seed = fxrand() * 999999999;
    randomSeed(seed);
    noiseSeed(seed);
    grid = generateGrid(6, 4);

    //let ih = windowHeight;
    //let iw = windowWidth;
    let ih = 1080;
    let iw = 1080;

    if (iw / ih < ar) {
        createCanvas(iw, iw / ar);
        wisW = (iw);
        wisH = (iw / ar);
    } else {
        createCanvas(ih * ar, ih);
        wisW = (ih * ar);
        wisH = (ih);
    }
    m = min(wisW, wisH) / 1080;

    angleMode(DEGREES);
    pixelDensity(pD);

    p5grain.setup({ random: fxrand });
    setParams(m);

    loader = createGraphics(wisW, wisH, P2D);

    col1 = random([cool1, cool2, cool3]);
    col2 = random([cool11, cool21, cool31]);
    col3 = random([cool4, cool5, cool6]);
    col4 = random([cool41, cool51, cool61]);
    col5 = random([cool1, cool2, cool5, cool6]);

    colr1 = random([cool1]);
    colr11 = random([cool11]);
    colr12 = random([cool12]);
    colr2 = random([cool2]);
    colr21 = random([cool21]);
    colr22 = random([cool22]);
    colr3 = random([cool3]);
    colr31 = random([cool31]);
    colr4 = random([cool4]);
    colr41 = random([cool41]);
    colr5 = random([cool5]);
    colr51 = random([cool51]);
    colr6 = random([cool6]);
    colr61 = random([cool61]);

    let doorC3 = color(random(col3));
    doorC3.setAlpha(220);

    let groups = new Map();

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let num = grid[i][j];

            if (num === 0) {
                let x = j * (doorW + gap) + gap + (width - (grid[0].length * (doorW + gap))) / 2;
                let y = i * (doorH + gap) + doorH + gap + (height - (grid.length * (doorH + gap))) / 2;
                
                if (num === 0) {
                    doors.push(new Door(x, y, 1, 'vertical', [60, 200]));
                    //doorContents.push(new DoorContent(x, y, color(random(col2))));
                    continue;
                }
            }

            if (num === 0) continue;

            let x = j * (doorW + gap) + gap + (width - (grid[0].length * (doorW + gap))) / 2;
            let y = i * (doorH + gap) + doorH + gap + (height - (grid.length * (doorH + gap))) / 2;

            if (!groups.has(num)) {
                groups.set(num, {
                    minX: x,
                    minY: y,
                    maxX: x,
                    maxY: y,
                    doors: 1,
                    color: [60, 200]
                });
            } else {
                let group = groups.get(num);
                group.minX = min(group.minX, x);
                group.minY = min(group.minY, y);
                group.maxX = max(group.maxX, x);
                group.maxY = max(group.maxY, y);
                group.doors++;
                //doorContents.push(new DoorContent(x, y, doorC3));
            }
        }

        doorContent = createGraphics(wisW, wisH, P2D);

        if (stratus === true) {
            initStratus();
        } else if (stratus === false) {
            for (let i = 0; i < cloudCount; i++) {
                let y = map(i, 0, cloudCount, 0, wisH / 2);
                let cloud = createCloud(y);
                clouds.push(cloud);
            }
            for (let i = 0; i < duneCount; i++) {
                let y = map(i, 0, duneCount, wisH / 2, wisH);
                let dune = createDune(y);
                dunes.push(dune);
            }
        }
    }


    for (let [num, group] of groups) {
        let x = (group.minX + group.maxX) / 2;
        let diffY = group.maxY - group.minY;
        let y;
        if (diffY > doorH) {
            y = (group.minY + group.maxY) / 2 + doorH / 1.5;
        } else {
            y = (group.minY + group.maxY) / 2;
        }
        let w = group.maxX - group.minX + doorW;
        let h = group.maxY - group.minY + doorH;
        doors.push(new MultiDoor(x, y, w, h, group.color));
        doorContents.push(new DoorContent(x, y, doorC3)); //x, y, color(random(col2))), seed);
    }
    
}


// DRAWING //
function draw() {
    loopCount++;
    randomSeed(seed);
    noiseSeed(seed);

    if (currentState === 'loading') {
        drawL();
        if (showLoader) {
            image(loader, 0, 0);
        }
    } else if (currentState === 'drawing') {
       

        let rdnDrawStr = random();

        let doorC1 = color(random(col2));
        doorC1.setAlpha(230);
        let doorC2 = color(random(col1));
        doorC2.setAlpha(210);
        let rndDgrad = random();
        if (rndDgrad < 0.85) {
            doorsGrad(doorContent, 0, 0, doorContent.width, doorContent.height, doorC1, doorC2, rndDgrad < 0.75 ? "X" : "Y");
        } else {
            background(20);
            gradDoors(doorContent, 4, random(col3), random(col4), random(col5), random(col4));
        }

        background(random() < 0.5 ? 20 : 235);

        let c1 = color(random(col3));
        c1.setAlpha(210); //160);
        let c2 = color(random(col4));
        c2.setAlpha(230); //160);

        if (bd > 0) {
            drawBd(2);
        }

    const backgroundType = $fx.getFeature("background type");
    const backgroundAxis = $fx.getFeature("background axis");
    if (drawBGCubes == true) {
        if (backgroundType === "cubik A") {
          bgGrad(0, 0, wisW, wisH, c1, c2, backgroundAxis === "X" ? "X" : "Y");
          drawCubes();
        } else if (backgroundType === "cubik B") {
          gradBg(4, random(col4), random(col3), random(col5), random(col4));
          drawCubesB();
        } else if (backgroundType === "cubik full B") {
          bgGrad(0, 0, wisW, wisH, c1, c2, backgroundAxis === "X" ? "X" : "Y");
          drawCubesAllB();
        } else if (backgroundType === "cubik alea") {
          bgGrad(0, 0, wisW, wisH, c1, c2, backgroundAxis === "X" ? "X" : "Y");
          drawCubesRand();
        } else if (backgroundType === "cubik full C") {
          gradBg(4, random(col4), random(col3), random(col3), random(col4));
          drawCubesAllC();
        } else if (backgroundType === "cubik C") {
          gradBg(4, random(col4), random(col3), random(col4), random(col5));
          drawCubesC();
        } else if (backgroundType === "cubik full") {
          gradBg(7, random(col1), random(col2), random(col3), random(col4), random(col3), random(col2), random(col1));
          drawCubesAll();
        } else if (backgroundType === "bubulles") {
          bgGrad(0, 0, wisW, wisH, c1, c2, "R");
          drawBub();
        } else if (backgroundType === "cubik destruct") {
          bgGrad(0, 0, wisW, wisH, c1, c2, backgroundAxis === "X" ? "X" : "R");
          drawCubesDestructC();
        } else {
          background(random() < 0.5 ? 20 : 235);
        }
      }

      let checkBgColor = get(width/2, height/2);
      isBgColorDark = isColorDark(checkBgColor);

        
    if (stratus === true) {
        if (random() < 0.75) {
        doorContent.blendMode(SOFT_LIGHT);
        } else {
        doorContent.blendMode(HARD_LIGHT);
        }
        //doorContent.globalAlpha=0.5
		doorContent.filter="blur(20px)"
        drawStratus(doorContent, 13);
        initRise();
    } else if (stratus === false) {
        for (let cloud of clouds) {
            for (let pt of cloud) {
                let h = map(pt.y, pt.cloudY, pt.cloudY + cloudHeight, 255, 50);
                h = constrain(h, 50, 255);
                let cloudC1 = color(random(col4));
                cloudC1.setAlpha(h);
                doorContent.push();
                doorContent.stroke(cloudC1);
                doorContent.strokeWeight(random(0.25, 3) * m);
                doorContent.point(pt.x, pt.y);
                doorContent.pop();
            }
        }
        for (let dune of dunes) {
            for (let pt of dune) {
                let h = map(pt.y, pt.duneY, pt.duneY + duneH, 180, 10);
                let duneC1 = color(random(col5));
                duneC1.setAlpha(h);
                doorContent.push();
                doorContent.stroke(duneC1);
                doorContent.strokeWeight(random(0.25, 1.5) * m);
                doorContent.point(pt.x, pt.y);
                doorContent.pop();
            }
        }
    }

        for (let door of doors) {
            if (door instanceof Door || door instanceof MultiDoor) {
                if (drawStr == true && deviation >= 20) {
                    if (isBgColorDark) {
                        door.drawStruct([250, 230], random(4, 7) * m);
                        door.drawDoor([250, 230], random(4, 7) * m);
                    } else {
                        door.drawStruct([60, 230], random(3, 6) * m);
                        door.drawDoor([60, 230], random(3, 6) * m);
                    }
                }
                

                let content = new DoorContent(doorContent, door.x, door.y, color(random(col3)));
                content.moreHit(random(5, 25), random(col3), random(col4));
                content.moreTouch(random(2, 4), random(col2), random(col5));
                if (random() > 0.93) {
                    content.moreCross(random(5, 25), random(8, 12), random(col3));
                }
                if (random() < 0.15) {
                    content.moreBirdsRemind(int(random(25, 55)), 2, 7);
                } else {
                    content.moreBirdsActual(int(random(15, 25)));
                }

                content.moreCircles(int(random(20, 40)));
            }
        }

        for (let door of doors) { 
            if (door instanceof Door || door instanceof MultiDoor) {
                if (drawShdw == true && random() < 0.5) {
                    door.drawDoorShdw([180, 70]);
                } else {
                    door.drawDoorShdwInv([180, 90]);
                }
                if (random() < 0.01) {
                    doorContent.loadPixels();
                    morePoint(3, 3, 10, 200, 2, 6); //grS, floop, nPl, nPh, pSs, pSb
                }
            
                door.copyContent();

                if (drawStr == true && deviation < 20 && rdnDrawStr < 0.5) {
                    if (isBgColorDark) {
                        door.drawStruct([240, 220], random(1, 4) * m);
                        door.drawDoor([240, 220], random(1, 4) * m);
                    } else {
                        door.drawStruct([80, 220], random(1, 4) * m);
                        door.drawDoor([80, 220], random(1, 4) * m);
                    }
                } else if (drawStr == true && deviation < 20 && rdnDrawStr > 0.5) {
                    if (isBgColorDark) {
                        door.drawStructInv([240, 220], random(1, 4) * m);
                        door.drawDoor([240, 220], random(1, 4) * m);
                    } else {
                        door.drawStructInv([80, 220], random(1, 4) * m);
                        door.drawDoor([80, 220], random(1, 4) * m);
                    }
                }

                let rdmctx = random();
                if (rdmctx >= 0.074 && rdmctx < 0.087) {
                    if (isBgColorDark) {
                        door.drawCtx([240, 150], random(col5), random(2, 4) * m);
                    } else {
                        door.drawCtx([80, 170], random(col5), random(2, 4) * m);
                    }
                }

                if (nodeThis == true) {
                    doorContent.loadPixels();
                    drawPoint();
                }

                if (bd > 0) {
                    drawBd(int(random(1, 3)));
                }
            }
        }
        drawD();
        stopping();
    }
}


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
        // doorContent.globalAlpha=0.5
		// doorContent.filter="blur(15px)"
        copy(doorContent, this.x - int(doorWb), int(this.y - doorHb), int(doorWb), int(doorHb), int(this.x - doorWb / 2), int(this.y - doorHb), int(doorWb), int(doorHb));
        pop();
    }
}

class DoorContent {
    constructor(g, originX, originY, color) {
        this.g = doorContent;
        this.originX = originX;
        this.originY = originY;
        this.color = color;
    }

    moreCircles(numCircles) {
        this.g.push();
        // this.g.blendMode(SCREEN);
        // this.g.globalAlpha=0.5
		// this.g.filter="blur(15px)"
        this.g.noFill();
        this.g.stroke(this.color);
        this.g.strokeWeight(0.5 * m);
        for (let i = 10; i < numCircles; i++) {
            let radius = Math.pow(1.15, i);
            this.g.drawingContext.setLineDash([4 * m, 3 * m, 5 * m, 2 * m, 3 * m]);
            this.g.circle(this.originX, this.originY, radius * 2);
        }
        this.g.pop();
    }

    moreBirdsRemind(numBirds, minCurve, maxCurve) {
        this.g.push();
        // this.g.blendMode(MULTIPLY);
        // this.g.globalAlpha=0.5
		// this.g.filter="blur(15px)"
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
        // this.g.blendMode(SCREEN);
        // this.g.globalAlpha=0.5
		// this.g.filter="blur(15px)"
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

    moreHit(radius, cola, colb) {
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

    moreTouch(radius, cola, colb) {
        this.g.push();
        let from = color(cola);
        let to = color(colb);
        this.g.noStroke();
        for (let r = radius; r > 0; --r) {
            let inter = map(r, 0, radius, 0, 1);
            let c = this.g.lerpColor(from, to, inter);
            this.g.fill(c);
            this.g.circle(this.originX - (doorW / random(1, 3) * m), this.originY - (doorH / random(1, 3) * m), r * 2);
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
}


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

function drawL() {
loader.background(20);
loader.push();
loader.translate(wisW / 2, wisH / 2.75);
loader.noFill();
loader.stroke(255, 210);
loader.strokeWeight(2 * m);
loader.line(-80 * m / 2, -140 * m, -80 * m / 2 + 60 * m, -140 * m - 60 * m);
loader.line(80 * m / 2, -140 * m, 80 * m / 2 + 60 * m, -140 * m - 60 * m);
loader.line(-80 * m / 2 + 60 * m, -140 * m - 60 * m, 80 * m / 2 + 60 * m, -140 * m - 60 * m);
loader.line(80 * m / 2 + 60 * m, -140 * m - 60 * m, 80 * m / 2 + 60 * m, 140 * m + 60 * m + 60 * m);
loader.beginShape();
loader.vertex(-80 * m / 2, -140 * m);
loader.vertex(80 * m / 2, -140 * m);
loader.vertex(80 * m / 2, 0);
loader.vertex(-80 * m / 2, 0);
loader.endShape(CLOSE);
loader.pop();

loader.push();
loader.noStroke();
loader.fill(255, 220);
loader.textAlign(CENTER, CENTER);
loader.textSize(40 * m);
loader.textFont(exo_black);
loader.text("naïf", wisW / 2, wisH / 3.2);
//loader.textFont(exo_bold);
//loader.textSize(14 * m);
//loader.text("abstraction", wisW / 2, wisH / 3.2 + 40 * m);
loader.pop();

loader.push();
loader.angleMode(DEGREES);
loader.translate(wisW / 1.64, wisH / 1.66);
loader.rotate(-90);
loader.noStroke();
loader.fill(255, 220);
loader.textFont(exo_regular);
loader.textSize(14 * m);
loader.text("# " + $fx.iteration + " de 128", 0, 0);
loader.pop();

loader.push();
if (sayit < 0.2) {
    loader.noStroke();
    loader.fill(255, 220);
    loader.textAlign(RIGHT, CENTER);
    loader.textSize(16 * m);
    loader.textFont(exo_medium);
    loader.text("\"Toute connaissance dégénère en probabilité.\"", wisW / 1.89, wisH / 1.9);
    loader.textFont(exo_extra_light);
    loader.text("Christian Bobin", wisW / 1.89, wisH / 1.9 + 40);
} else if (sayit >= 0.2 && sayit < 0.4) {
    loader.noStroke();
    loader.fill(255, 220);
    loader.textAlign(RIGHT, CENTER);
    loader.textSize(16 * m);
    loader.textFont(exo_medium);
    loader.text("\"Ce qu'il y a de plus criminel au monde, c'est l'absence de naïveté.  ", wisW / 1.89, wisH / 1.9);
    loader.text("Elle réduit l'essentiel à des minuties et abolit nos élans.\"", wisW / 1.89, wisH / 1.9 + 25);
    loader.textFont(exo_extra_light);
    loader.text("Alexandre Jardin", wisW / 1.89, wisH / 1.9 + 75);
} else if (sayit >= 0.4 && sayit < 0.5) {
    loader.noStroke();
    loader.fill(255, 220);
    loader.textAlign(RIGHT, CENTER);
    loader.textSize(16 * m);
    loader.textFont(exo_medium);
    loader.text("\"Nous étions encore tous les cinq proches des naïvetés  ", wisW / 1.89, wisH / 1.9);
    loader.text("de l'enfance -- de ces naïvetés qui sont peut-être  ", wisW / 1.89, wisH / 1.9 + 25);
    loader.text("la part la plus féconde que la vie nous donne et ensuite nous reprend.\"", wisW / 1.89, wisH / 1.9 + 50);
    loader.textFont(exo_extra_light);
    loader.text("Romain Gary", wisW / 1.89, wisH / 1.9 + 100);
} else if (sayit >= 0.5 && sayit < 0.6) {
    loader.noStroke();
    loader.fill(255, 220);
    loader.textAlign(RIGHT, CENTER);
    loader.textSize(16 * m);
    loader.textFont(exo_medium);
    loader.text("\"“La même chose souvent est, dans la bouche d'un homme d'esprit,  ", wisW / 1.89, wisH / 1.9);
    loader.text("une naïveté ou un bon mot, et dans celle du sot, une sottise.\"", wisW / 1.89, wisH / 1.9 + 25);
    loader.textFont(exo_extra_light);
    loader.text("Jean de La Bruyère", wisW / 1.89, wisH / 1.9 + 75);
} else if (sayit >= 0.6 && sayit < 0.7) {
    loader.noStroke();
    loader.fill(255, 220);
    loader.textAlign(RIGHT, CENTER);
    loader.textSize(16 * m);
    loader.textFont(exo_medium);
    loader.text("\"“En permettant aux uns de duper les autres,  ", wisW / 1.89, wisH / 1.9);
    loader.text("la naïveté est un élément trop capital du bonheur humain,  ", wisW / 1.89, wisH / 1.9 + 25);
    loader.text("pour qu'on ne lui doive pas de l'indulgence.\"", wisW / 1.89, wisH / 1.9 + 50);
    loader.textFont(exo_extra_light);
    loader.text("Henry de Montherlant", wisW / 1.89, wisH / 1.9 + 100);
} else if (sayit >= 0.7 && sayit < 0.8) {
    loader.noStroke();
    loader.fill(255, 220);
    loader.textAlign(RIGHT, CENTER);
    loader.textSize(16 * m);
    loader.textFont(exo_medium);
    loader.text("\"L'affection et la naïveté muette disent bien plus en disant moins.\"", wisW / 1.89, wisH / 1.9);
    loader.textFont(exo_extra_light);
    loader.text("William Shakespeare ", wisW / 1.89, wisH / 1.9 + 50);
} else if (sayit >= 0.8 && sayit < 0.9) {
    loader.noStroke();
    loader.fill(255, 220);
    loader.textAlign(RIGHT, CENTER);
    loader.textSize(16 * m);
    loader.textFont(exo_medium);
    loader.text("\"Il faut beaucoup de naïveté pour faire de grandes choses.\"", wisW / 1.89, wisH / 1.9);
    loader.textFont(exo_extra_light);
    loader.text("René Crevel ", wisW / 1.89, wisH / 1.9 + 50);
} else {
    loader.noStroke();
    loader.fill(255, 220);
    loader.textAlign(RIGHT, CENTER);
    loader.textSize(16 * m);
    loader.textFont(exo_medium);
    loader.text("\"Si les hommes ont la naïveté de croire en Dieu,   ", wisW / 1.89, wisH / 1.9);
    loader.text("les chiens ont la naïveté de croire en l’homme.\"", wisW / 1.89, wisH / 1.9 + 25);
    loader.textFont(exo_extra_light);
    loader.text("Eric-Emmanuel Schmitt", wisW / 1.89, wisH / 1.9 + 75);
}
loader.pop();

loader.push();
if (loopCount > 15) {
    loader.ellipseMode(CORNER);
    loader.stroke(20, 220);
    //loader.fill(random(col1));
    loader.fill(random(col1));
    if (random() < 0.5) {
        loader.rect(wisW / 6, wisH / 1.35, 25 * m);
    } else {
        loader.ellipse(wisW / 6, wisH / 1.35, 25 * m);
    }
    loader.fill(random(col1));
    if (random() < 0.5) {
        loader.rect(wisW / 6 + 25 * m, wisH / 1.35, 25 * m);
    } else {
        loader.ellipse(wisW / 6 + 25 * m, wisH / 1.35, 25 * m);
    }
    loader.fill(random(col1));
    if (random() < 0.5) {
        loader.rect(wisW / 6, wisH / 1.35 + 25 * m, 25 * m);
    } else {
        loader.ellipse(wisW / 6, wisH / 1.35 + 25 * m, 25 * m);
    }
    loader.fill(random(col1));
    if (random() < 0.5) {
        loader.rect(wisW / 6 + 25 * m, wisH / 1.35 + 25 * m, 25 * m);
    } else {
        loader.ellipse(wisW / 6  + 25 * m, wisH / 1.35 + 25 * m, 25 * m);
    }
}
if (loopCount > 30) {
    loader.stroke(20, 220);
    loader.fill(random(col2));
    if (random() < 0.5) {
        loader.rect(wisW / 6 + 100 * m, wisH / 1.35, 25 * m);
    } else {
        loader.ellipse(wisW / 6 + 100 * m, wisH / 1.35, 25 * m);
    }
    loader.fill(random(col2));
    if (random() < 0.5) {
        loader.rect(wisW / 6 + 100 * m + 25 * m, wisH / 1.35, 25 * m);
    } else {
        loader.ellipse(wisW / 6 + 100 * m + 25 * m, wisH / 1.35, 25 * m);
    }
    loader.fill(random(col2));
    if (random() < 0.5) {
        loader.rect(wisW / 6 + 100 * m, wisH / 1.35 + 25 * m, 25 * m);
    } else {
        loader.ellipse(wisW / 6 + 100 * m, wisH / 1.35 + 25 * m, 25 * m);
    }
    loader.fill(random(col2));
    if (random() < 0.5) {
        loader.rect(wisW / 6 + 100 * m + 25 * m, wisH / 1.35 + 25 * m, 25 * m);
    } else {
        loader.ellipse(wisW / 6 + 100 * m + 25 * m, wisH / 1.35 + 25 * m, 25 * m);
    }
}
if (loopCount > 45) {
    loader.stroke(20, 220);
    loader.fill(random(col3));
    if (random() < 0.5) {
        loader.rect(wisW / 6 + 200 * m, wisH / 1.35, 25 * m);
    } else {
        loader.ellipse(wisW / 6 + 200 * m, wisH / 1.35, 25 * m);
    }
    loader.fill(random(col3));
    if (random() < 0.5) {
        loader.rect(wisW / 6 + 200 * m + 25 * m, wisH / 1.35, 25 * m);
    } else {
        loader.ellipse(wisW / 6 + 200 * m + 25 * m, wisH / 1.35, 25 * m);
    }
    loader.fill(random(col3));
    if (random() < 0.5) {
        loader.rect(wisW / 6 + 200 * m, wisH / 1.35 + 25 * m, 25 * m);
    } else {
        loader.ellipse(wisW / 6 + 200 * m, wisH / 1.35 + 25 * m, 25 * m);
    }
    loader.fill(random(col3));
    if (random() < 0.5) {
        loader.rect(wisW / 6 + 200 * m + 25 * m, wisH / 1.35 + 25 * m, 25 * m);
    } else {
        loader.ellipse(wisW / 6 + 200 * m + 25 * m, wisH / 1.35 + 25 * m, 25 * m);
    }
}
if (loopCount > 60) {
    loader.stroke(20, 220);
    loader.fill(random(col4));
    if (random() < 0.5) {
        loader.rect(wisW / 6 + 300 * m, wisH / 1.35, 25 * m);
    } else {
        loader.ellipse(wisW / 6 + 300 * m, wisH / 1.35, 25 * m);
    }
    loader.fill(random(col4));
    if (random() < 0.5) {
        loader.rect(wisW / 6 + 300 * m + 25 * m, wisH / 1.35, 25 * m);
    } else {
        loader.ellipse(wisW / 6 + 300 * m + 25 * m, wisH / 1.35, 25 * m);
    }
    loader.fill(random(col4));
    if (random() < 0.5) {
        loader.rect(wisW / 6 + 300 * m, wisH / 1.35 + 25 * m, 25 * m);
    } else {
        loader.ellipse(wisW / 6 + 300 * m, wisH / 1.35 + 25 * m, 25 * m);
    }
    loader.fill(random(col4));
    if (random() < 0.5) {
        loader.rect(wisW / 6 + 300 * m + 25 * m, wisH / 1.35 + 25 * m, 25 * m);
    } else {
        loader.ellipse(wisW / 6 + 300 * m + 25 * m, wisH / 1.35 + 25 * m, 25 * m);
    }
}
if (loopCount > 75) {
    loader.stroke(20, 220);
    loader.fill(random(col5));
    if (random() < 0.5) {
        loader.rect(wisW / 6 + 400 * m, wisH / 1.35, 25 * m);
    } else {
        loader.ellipse(wisW / 6 + 400 * m, wisH / 1.35, 25 * m);
    }
    loader.fill(random(col5));
    if (random() < 0.5) {
        loader.rect(wisW / 6 + 400 * m + 25 * m, wisH / 1.35, 25 * m);
    } else {
        loader.ellipse(wisW / 6 + 400 * m + 25 * m, wisH / 1.35, 25 * m);
    }
    loader.fill(random(col5));
    if (random() < 0.5) {
        loader.rect(wisW / 6 + 400 * m, wisH / 1.35 + 25 * m, 25 * m);
    } else {
        loader.ellipse(wisW / 6 + 400 * m, wisH / 1.35 + 25 * m, 25 * m);
    }
    loader.fill(random(col5));
    if (random() < 0.5) {
        loader.rect(wisW / 6 + 400 * m + 25 * m, wisH / 1.35 + 25 * m, 25 * m);
    } else {
        loader.ellipse(wisW / 6 + 400 * m + 25 * m, wisH / 1.35 + 25 * m, 25 * m);
    }
    loader.pop();
}
showLoader = true;

    if (loopCount > 100) {
        currentState = 'drawing';
    }
}

function drawD() {
    currentState = 'stopping';
}

function stopping() {
    saveCanvas(`naïf_pixScreen_${$fx.hash}-${$fx.minter}`, 'png');
    noLoop();
}

function drawBd(btype) {
    if (btype == 0) {
        push();
        noFill();
        let strBdCol = color(random(col2));
        strBdCol.setAlpha(random(65, 80));
        stroke(strBdCol);
        strokeWeight(bd);
        rect(bd / 2, bd / 2, wisW - bd, wisH - bd);
        pop();
    }
    if (btype == 2) {
        let lineLength, lineWeight;
        let lineDensity = 0.5;
        push();
        noFill();
        let strBdCol = color(random(col2));
        strBdCol.setAlpha(random(65, 80));
        stroke(strBdCol);

        for (let x = 0; x < wisW; x += lineDensity) {
            lineLength = random(bd / 2, bd2 * 2);
            lineWeight = random(0.25, 2.5);
            strokeWeight(lineWeight * m);
            line(x, 0, x, lineLength);
            line(x, wisH, x, wisH - lineLength);
        }
        for (let y = 0; y < wisH; y += lineDensity) {
            lineLength = random(bd / 2, bd2 * 2);
            lineWeight = random(0.5, 2.5);
            strokeWeight(lineWeight * m);
            line(0, y, lineLength, y);
            line(wisW, y, wisW - lineLength, y);
        }
        pop();
    }
    if (btype == 3) {
        push();
        noFill();
        let strBdCol = color(random(col2));
        strBdCol.setAlpha(random(65, 80));
        stroke(strBdCol);
        strokeWeight(bd * ar * 1.3 * m);
        line(0, bd / 2, wisW + bd, bd / 2);
        line(bd / 2, 0, bd / 2, wisH + bd);
        line(0, wisH - bd / 2, wisW, wisH - bd / 2);
        line(wisW - bd / 2, 0, wisW - bd / 2, wisH);

        fill(random(col2));
        for (let i = 0; i < wisW; i += random(bd, bd2)) {
            square(+i * 2, 0, random(bd, bd2));
            square(+i * 2, wisH, -random(bd, bd2));
        }
        for (let i = 0; i < wisH; i += random(bd, bd2)) {
            square(0, +i * 2, random(bd, bd2));
            square(wisW, +i * 2, -random(bd, bd2));
        }
        pop();
    }
}

function morePoint(grS, floop, nPl, nPh, pSs, pSb) {
    let gridSize = grS;
    let f = 0;
    let d = doorContent;

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
    
      
      g.fill(randm(colr12));
      //g.noFill();
      g.stroke(random(colr12));
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
  


function rndBend(startX, startY, endX, endY, deviation) {
    deviation *= m;
    let midX = (startX + endX) / 2;
    let midY = (startY + endY) / 2;

    midX += random(-deviation, deviation);
    midY += random(-deviation, deviation);

    line(startX, startY, midX, midY);
    line(midX, midY, endX, endY);
}

function rndBendVertex(x1, y1, x2, y2, deviation) {
    deviation *= m;
    let midX = (x1 + x2) / 2 + random(-deviation, deviation);
    let midY = (y1 + y2) / 2 + random(-deviation, deviation);
    vertex(midX, midY);
}

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