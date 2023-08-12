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
            if (random() < 0.3 && particleThis == false) {
                content.moreBoom(random(12, 16), random(col3), random(col4), random(10, 30));
            } else if (random() < 0.9 && particleThis == false) {
                content.moreBadaBoom(random(4, 8), random(col3), random(col4), random(10, 20));
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