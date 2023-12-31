// FX Features //
$fx.rand.reset();
$fx.randminter.reset();


// VARIABLES //
let seed = fxrand() * 888786858483828180;
let sayit = fxrand();
let currentState = 'loading';
let loopCount = 0;
let noiseSeedValue = 0;
let col1, col2, col3, col4, col5, doorContent, rows, cols, skyX, skyY, loader, font, startTime, elapsed;
let showLoader = false;
let showOriginal = false;
let cool1 = "https://coolors.co/c2efb3-97abb1-892f65-735f3d-594a26".split("/").pop().split("-").map((a) => "#" + a);
let cool11 = "https://coolors.co/f1fbee-c5d0d3-c9be9d-b2986c-9d8243".split("/").pop().split("-").map((a) => "#" + a);
let cool12 = "https://coolors.co/palette/f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0".split("/").pop().split("-").map((a) => "#" + a);
let cool2 = "https://coolors.co/db2b39-29335c-f3a712-f0cea0-534d41".split("/").pop().split("-").map((a) => "#" + a);
let cool21 = "https://coolors.co/0081af-00abe7-2dc7ff-ead2ac-eaba6b".split("/").pop().split("-").map((a) => "#" + a);
let cool22 = "https://coolors.co/palette/03045e-023e8a-0077b6-0096c7-00b4d8-48cae4-90e0ef-ade8f4-caf0f8".split("/").pop().split("-").map((a) => "#" + a);
let cool3 = "https://coolors.co/a63446-fbfef9-0c6291-000004-7e1946".split("/").pop().split("-").map((a) => "#" + a);
let cool31 = "https://coolors.co/f7b2b7-f7717d-de639a-7f2982-16001e".split("/").pop().split("-").map((a) => "#" + a);
let cool32 = "https://coolors.co/palette/582f0e-7f4f24-936639-a68a64-b6ad90-c2c5aa-a4ac86-656d4a-414833-333d29".split("/").pop().split("-").map((a) => "#" + a);
let cool4 = "https://coolors.co/dbd56e-88ab75-2d93ad-7d7c84-de8f6e".split("/").pop().split("-").map((a) => "#" + a);
let cool41 = "https://coolors.co/044389-fcff4b-ffad05-7cafc4-5995ed".split("/").pop().split("-").map((a) => "#" + a);
let cool42 = "https://coolors.co/palette/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529".split("/").pop().split("-").map((a) => "#" + a);
let cool5 = "https://coolors.co/241023-6b0504-a3320b-d5e68d-47a025".split("/").pop().split("-").map((a) => "#" + a);
let cool51 = "https://coolors.co/fdfffc-235789-c1292e-f1d302-161925".split("/").pop().split("-").map((a) => "#" + a);
let cool52 = "https://coolors.co/palette/10451d-155d27-1a7431-208b3a-25a244-2dc653-4ad66d-6ede8a-92e6a7-b7efc5".split("/").pop().split("-").map((a) => "#" + a);
let cool6 = "https://coolors.co/272932-4d7ea8-828489-9e90a2-b6c2d9".split("/").pop().split("-").map((a) => "#" + a);
let cool61 = "https://coolors.co/e08dac-6a7fdb-57e2e5-45cb85-153131".split("/").pop().split("-").map((a) => "#" + a);
let cool62 = "https://coolors.co/palette/eae4e9-fff1e6-fde2e4-fad2e1-e2ece9-bee1e6-f0efeb-dfe7fd-cddafd".split("/").pop().split("-").map((a) => "#" + a);

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
let drawBGCubes = false;
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

let rndBendChoose = 0;

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

let particleThis = false;

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
    let rngDeviaresult = "";
    if (value >= 0 && value < 0.25) {
        deviation = value * 60;  //random(0, 15);
        rngDeviaresult = "low";
    } 
    else if (value >= 0.25 && value < 0.55) {
        deviation = (value - 0.25) * 100 + 15; //random(15, 45);
        rngDeviaresult = "mid";
    } 
    else if (value >= 0.55 && value < 0.85) {
        deviation = (value - 0.55) * 83.33 + 40; //random(40, 65);
        rngDeviaresult = "high";
    } 
    else {
        deviation = 0; 
        rngDeviaresult = "none";
    }

    return rngDeviaresult;
}

$fx.features({
    "base model": $fx.rand() < 0.5 ? true : false,
    "particle mode": $fx.rand() < 0.3 ? true : false,
    "node mode": $fx.rand() < 0.9 ? true : false,
    "node type": Math.floor($fx.rand() * 3),
    "node grid size": Math.floor($fx.rand() * 5) + 2,
    "bend mode": $fx.rand(),
    "deviation": rngDeviaType(fxrand()),
    "nos type": Math.floor($fx.rand() * 3),
    "background type": rngBackgroundType(fxrand()),
    "background axis": rngBackgroundAxis(fxrand()),
    "nos color": $fx.rand() < 0.5 ? true : false,
    "nosh": $fx.rand() < 0.5 ? true : false,
    "cloud count": Math.floor($fx.rand() * 3) + 2,
    "cloud height": Math.floor($fx.rand() * 150) + 190,
    "number of stratus": Math.floor($fx.rand() * 25) + 50,
    "rise height": Math.floor($fx.rand() * 50) + 130,
    "border size": $fx.rand() < 0.95 ?'0':'20',
    "sun location": $fx.rand(),
    "moon location": $fx.rand(),
    "cross location": $fx.rand(),
});
console.log("seed", seed);
console.log($fx.getFeatures())


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
    nodeThis = $fx.getFeature("node mode");
    numberOfCircles = $fx.getFeature("number of stratus");
    riseH = $fx.getFeature("rise height") * m;
    particleThis = $fx.getFeature("particle mode");
    nosColor = $fx.getFeature("nos color");
    nosh = $fx.getFeature("nosh");
}

// SETUP //

function setup() {
    randomSeed(seed);
    noiseSeed(seed);
    grid = generateGrid(6, 4);

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
    original = createGraphics(wisW, wisH, P2D);
    evolved = createGraphics(wisW, wisH, P2D);
    doorContent = createGraphics(wisW, wisH, P2D);
    bg = createGraphics(wisW, wisH, P2D);

    rndBendChoose = fxrand();

    col1 = random([cool1, cool2, cool3]);
    col2 = random([cool11, cool21, cool31]);
    col3 = random([cool4, cool5, cool6]);
    col4 = random([cool41, cool51, cool61]);
    col5 = random([cool1, cool2, cool5, cool6]);
    col6 = random([cool12, cool32, cool42, cool52, cool62]);

    colr1 = random([cool1]);
    colr11 = random([cool11]);
    colr12 = random([cool12]);
    colr2 = random([cool2]);
    colr21 = random([cool21]);
    colr22 = random([cool22]);
    colr3 = random([cool3]);
    colr31 = random([cool31]);
    colr32 = random([cool32]);
    colr4 = random([cool4]);
    colr41 = random([cool41]);
    colr42 = random([cool42]);
    colr5 = random([cool5]);
    colr51 = random([cool51]);
    colr52 = random([cool52]);
    colr6 = random([cool6]);
    colr61 = random([cool61]);
    colr62 = random([cool62]);

    let bgCol = color(random(col3));
    bgCol.setAlpha(220);

    let groups = new Map();

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let num = grid[i][j];

            if (num === 0) {
                let x = j * (doorW + gap) + gap + (width - (grid[0].length * (doorW + gap))) / 2;
                let y = i * (doorH + gap) + doorH + gap + (height - (grid.length * (doorH + gap))) / 2;
                
                if (num === 0) {
                    doors.push(new Door(x, y, 1, 'vertical', [60, 200], bg));
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
                    color: [60, 200],
                    g: bg
                });
            } else {
                let group = groups.get(num);
                group.minX = min(group.minX, x);
                group.minY = min(group.minY, y);
                group.maxX = max(group.maxX, x);
                group.maxY = max(group.maxY, y);
                group.doors++;
            }
        }
    }

    for (let [num, group] of groups) {
        let g = bg;
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
        doors.push(new MultiDoor(x, y, w, h, group.color, bg));
        g.push(new DoorContent(x, y, bgCol, bg));
    }
    let clr1 = random() > 0.5 ? 0 : 255;
    let clr2 = random() > 0.5 ? 0 : 255;
    let clr3 = random() > 0.5 ? 0 : 255;
    bg.background(clr1, clr2, clr3, 255);
}


// DRAWING //
function draw() {
    loopCount++;
    elapsed = millis() - startTime;
    //randomSeed(seed);
    //noiseSeed(seed);

    structbg(bg);

    //bg.background(20, 5);
    
    // for (let door of doors) {
    //     if (door instanceof Door || door instanceof MultiDoor) {
    //         if (random() > 0.5) {
    //             if (isBgColorDark) {
    //                 door.drawStruct([250, 0, 0, 5], random(1, 60) * m);
    //                 bg.blendMode(SOFT_LIGHT);
    //                 bg.globalAlpha=0.05;
    //                 bg.filter="blur(280px)"
    //                 door.drawDoor([250, 0, 0, 5], random(1, 60) * m);
    //                 bg.blendMode(SOFT_LIGHT);
    //                 bg.globalAlpha=0.05;
    //                 bg.filter="blur(280px)"
    //             } else {
    //                 door.drawStruct([60, 0, 0, 5], random(1, 80) * m);
    //                 bg.blendMode(SOFT_LIGHT);
    //                 bg.globalAlpha=0.05;
    //                 bg.filter="blur(280px)"
    //                 door.drawDoor([60, 0, 0, 5], random(1, 80) * m);
    //                 bg.blendMode(HARD_LIGHT);
    //                 bg.globalAlpha=0.05;
    //                 bg.filter="blur(250px)"
    //             }
    //         }
    //     }
    // }
    
    image(bg, 0, 0);
    noLoop();

    if (loopCount > 50) {
            noLoop();
        }

}

function structbg(g) {
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