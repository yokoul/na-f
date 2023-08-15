async function drawD(g) {

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
        gradDoors(doorContent, 4, random(col3), random(col4), random(col3));
    }

    // background(random() < 0.5 ? 20 : 235);

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
        if (backgroundType === "amplify") {
            let checkBgColor = g.get(g.width/2, g.height/2);
            isBgColorDark = isColorDark(checkBgColor);
            structbg(bg);
        } else if (backgroundType === "cubik B") {
            if (random() < 0.5) {
                gradBg(4, random(col4), random(col3), random(col5), random(col4));
            }
            drawCubesB();
            if (random() < 0.5) {
                let checkBgColor = g.get(g.width/2, g.height/2);
                isBgColorDark = isColorDark(checkBgColor);
        
                structbg(bg);
            }            
        } else if (backgroundType === "cubik full B") {
            if (random() < 0.35) {
                bgGrad(0, 0, wisW, wisH, c1, c2, backgroundAxis === "X" ? "X" : "Y");
            }
            drawCubesAllB();
            if (random() < 0.65) {
                let checkBgColor = g.get(g.width/2, g.height/2);
                isBgColorDark = isColorDark(checkBgColor);
        
                structbg(bg);
            }
        } else if (backgroundType === "cubik alea") { //NOT WORKING
            if (random() < 0.25) {
                bgGrad(0, 0, wisW, wisH, c1, c2, backgroundAxis === "X" ? "X" : "Y");
            }
            drawCubesRand();
            if (random() < 0.75) {
                let checkBgColor = g.get(g.width/2, g.height/2);
                isBgColorDark = isColorDark(checkBgColor);
        
                structbg(bg);
            }
        } else if (backgroundType === "cubik full C") {
            if (random() < 0.25) {
                gradBg(4, random(col4), random(col3), random(col3), random(col4));
            }
            drawCubesAllC();
            if (random() < 0.5) {
                let checkBgColor = g.get(g.width/2, g.height/2);
                isBgColorDark = isColorDark(checkBgColor);
        
                structbg(bg);
            }
        } else if (backgroundType === "cubik C") {
            if (random() < 0.25) {
                gradBg(4, random(col4), random(col3), random(col4), random(col5));
            }
            drawCubesC();
            if (random() < 0.65) {
                let checkBgColor = g.get(g.width/2, g.height/2);
                isBgColorDark = isColorDark(checkBgColor);
        
                structbg(bg);
            }
        } else if (backgroundType === "cubik full") {
            if (random() < 0.75) {
                gradBg(7, random(col1), random(col2), random(col3), random(col4), random(col3), random(col2), random(col1));
            }
            drawCubesAll();
            if (random() < 0.85) {
                let checkBgColor = g.get(g.width/2, g.height/2);
                isBgColorDark = isColorDark(checkBgColor);
        
                structbg(bg);
            }
        } else if (backgroundType === "amplify more") { 
            let checkBgColor = g.get(g.width/2, g.height/2);
            isBgColorDark = isColorDark(checkBgColor);
            structbg(bg);
        } else if (backgroundType === "cubik destruct") { 
            if (random() < 0.25) {
                bgGrad(0, 0, wisW, wisH, c1, c2, backgroundAxis === "X" ? "X" : "R");
            }
            drawCubesDestructC();
            if (random() < 0.75) {
                let checkBgColor = g.get(g.width/2, g.height/2);
                isBgColorDark = isColorDark(checkBgColor);
        
                structbg(bg);
            }
        } else {
            background(random() < 0.5 ? 20 : 235);
        }
    } else {
        doorContent.background(random() < 0.5 ? color(20, 20, 20, 135) : color(235, 235, 235, 135));

        let checkBgColor = g.get(g.width/2, g.height/2);
        isBgColorDark = isColorDark(checkBgColor);

        structbg(bg);
    }
    
    if (stratus === true) {
        if (random() < 0.65) {
        doorContent.blendMode(SOFT_LIGHT);
        } else {
        doorContent.blendMode(HARD_LIGHT);
        }
        // doorContent.globalAlpha=random();
        doorContent.filter="blur(3)"
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
            let content = new DoorContent(door.x, door.y, color(random(col3)), doorContent);
            if (particleThis == true) {
                content.createParticles(250); //int(random(550, 900)));
                content.moreAttractors(random(7, 16));
                content.moreRepulsors(random(4, 8));
                content.updateParticles(250); //int(random(300, 500)));
                content.showParticles();  
                content.updateParticles(250); //int(random(300, 500)));
                content.showParticles();  
            }
        }
    }

    for (let door of doors) { 
        if (door instanceof Door || door instanceof MultiDoor) {
            let content = new DoorContent(door.x, door.y, color(random(col3)), doorContent);
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
                // content.moreBoom(random(4, 8), random(col3), random(col4), random(20, 40));
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
                morePoint(3, 3, 10, 200, 2, 6, doorContent); //grS, floop, nPl, nPh, pSs, pSb
            }
        
            door.copyContent(bg);

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
                drawBd(int(random(1, 3)), bg);
            }
        }
    }
    bg.applyMonochromaticGrain(gS);
    // await sleep(1);
    showEvolving = true;
}