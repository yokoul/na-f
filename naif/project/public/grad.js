// GRADIENTS //

function isColorDark(c) {
    let grayscale = 0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2];
    return grayscale < 165; //128;
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
