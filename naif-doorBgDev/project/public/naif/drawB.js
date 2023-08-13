function drawD(g) {





    for (let door of doors) {
        if (door instanceof Door || door instanceof MultiDoor) {
            if (random() > 0.5) {
                if (isBgColorDark) {
                    g.blendMode(SOFT_LIGHT);
                    g.globalAlpha=random();
                    g.filter="blur(20px)"
                    door.drawStruct([250, 230], random(4, 7) * m);
                    door.drawDoor([250, 230], random(4, 7) * m);
                } else {
                    g.blendMode(HARD_LIGHT);
                    g.globalAlpha=random();
                    g.filter="blur(20px)"
                    door.drawStruct([60, 230], random(3, 6) * m);
                    door.drawDoor([60, 230], random(3, 6) * m);
                }
            }
        }
    }

    currentState = 'stopping';
}