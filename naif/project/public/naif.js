// FX Features //
$fx.rand.reset();
$fx.randminter.reset();


// VARIABLES //
let seed = fxrand() * 888786858483828180;
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
    "node mode": $fx.rand() < 0.9 ? true : false,
    "node type": Math.floor($fx.rand() * 3),
    "node grid size": Math.floor($fx.rand() * 5) + 2,
    "bend mode": $fx.rand(),
    "particle mode": $fx.rand() < 0.3 ? true : false,
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
    //$fx.rand.reset();
    //$fx.randminter.reset();
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
        doorContents.push(new DoorContent(doorContent, x, y, doorC3)); //x, y, color(random(col2))), seed);
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
       
        drawD();
        stopping();
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
    doorContent.globalAlpha=random();
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
            let content = new DoorContent(doorContent, door.x, door.y, color(random(col4)));
            if (particleThis == true) {
                content.createParticles(500); //int(random(550, 900)));
                content.moreAttractors(random(7, 16));
                content.moreRepulsors(random(4, 8));
                content.updateParticles(500); //int(random(300, 500)));
                content.showParticles();  
            }
        }
    }

    for (let door of doors) { 
        if (door instanceof Door || door instanceof MultiDoor) {
            let content = new DoorContent(doorContent, door.x, door.y, color(random(col3)));
            if (random() < 0.25) {
            content.moreSun(random(15, 25), random(col3), random(col4));
            }
            if (random() < 0.55) {
            content.moreMoon(random(8, 12), random(col2), random(col5));
            }
            if (random() < 0.9 && particleThis == false) {
            content.moreBoom(random(12, 16), random(col3), random(col4), random(10, 30));
            }

            if (random() > 0.93) {
                content.moreCross(random(5, 25), random(8, 12), random(col3));
            }
            if (random() < 0.15) {
                content.moreBirdsRemind(int(random(25, 55)), 2, 7);
            } else {
                content.moreBirdsActual(int(random(15, 25)));
            }
            content.moreCircles(int(random(20, 40)));


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

    currentState = 'stopping';
}
