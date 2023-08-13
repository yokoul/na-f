function drawL(g) {
    g.background(20);
    g.push();
    g.translate(wisW / 2, wisH / 2.75);
    g.noFill();
    g.stroke(255, 210);
    g.strokeWeight(2 * m);
    g.line(-80 * m / 2, -140 * m, -80 * m / 2 + 60 * m, -140 * m - 60 * m);
    g.line(80 * m / 2, -140 * m, 80 * m / 2 + 60 * m, -140 * m - 60 * m);
    g.line(-80 * m / 2 + 60 * m, -140 * m - 60 * m, 80 * m / 2 + 60 * m, -140 * m - 60 * m);
    g.line(80 * m / 2 + 60 * m, -140 * m - 60 * m, 80 * m / 2 + 60 * m, 140 * m + 60 * m + 60 * m);
    g.beginShape();
    g.vertex(-80 * m / 2, -140 * m);
    g.vertex(80 * m / 2, -140 * m);
    g.vertex(80 * m / 2, 0);
    g.vertex(-80 * m / 2, 0);
    g.endShape(CLOSE);
    g.pop();

    g.push();
    g.noStroke();
    g.fill(255, 220);
    g.textAlign(CENTER, CENTER);
    g.textSize(40 * m);
    g.textFont(exo_black);
    g.text("naïf", wisW / 2, wisH / 3.2);
    //g.textFont(exo_bold);
    //g.textSize(14 * m);
    //g.text("abstraction", wisW / 2, wisH / 3.2 + 40 * m);
    g.pop();

    g.push();
    g.angleMode(DEGREES);
    g.translate(wisW / 1.64, wisH / 1.66);
    g.rotate(-90);
    g.noStroke();
    g.fill(255, 220);
    g.textFont(exo_regular);
    g.textSize(14 * m);
    g.text("# " + $fx.iteration + " de 128", 0, 0);
    g.pop();

    g.push();
    if (sayit < 0.2) {
        g.noStroke();
        g.fill(255, 220);
        g.textAlign(RIGHT, CENTER);
        g.textSize(16 * m);
        g.textFont(exo_medium);
        g.text("\"Toute connaissance dégénère en probabilité.\"", wisW / 1.89, wisH / 1.9);
        g.textFont(exo_extra_light);
        g.text("Christian Bobin", wisW / 1.89, wisH / 1.9 + 40);
    } else if (sayit >= 0.2 && sayit < 0.4) {
        g.noStroke();
        g.fill(255, 220);
        g.textAlign(RIGHT, CENTER);
        g.textSize(16 * m);
        g.textFont(exo_medium);
        g.text("\"Ce qu'il y a de plus criminel au monde, c'est l'absence de naïveté.  ", wisW / 1.89, wisH / 1.9);
        g.text("Elle réduit l'essentiel à des minuties et abolit nos élans.\"", wisW / 1.89, wisH / 1.9 + 25);
        g.textFont(exo_extra_light);
        g.text("Alexandre Jardin", wisW / 1.89, wisH / 1.9 + 75);
    } else if (sayit >= 0.4 && sayit < 0.5) {
        g.noStroke();
        g.fill(255, 220);
        g.textAlign(RIGHT, CENTER);
        g.textSize(16 * m);
        g.textFont(exo_medium);
        g.text("\"Nous étions encore tous les cinq proches des naïvetés  ", wisW / 1.89, wisH / 1.9);
        g.text("de l'enfance -- de ces naïvetés qui sont peut-être  ", wisW / 1.89, wisH / 1.9 + 25);
        g.text("la part la plus féconde que la vie nous donne et ensuite nous reprend.\"", wisW / 1.89, wisH / 1.9 + 50);
        g.textFont(exo_extra_light);
        g.text("Romain Gary", wisW / 1.89, wisH / 1.9 + 100);
    } else if (sayit >= 0.5 && sayit < 0.6) {
        g.noStroke();
        g.fill(255, 220);
        g.textAlign(RIGHT, CENTER);
        g.textSize(16 * m);
        g.textFont(exo_medium);
        g.text("\"“La même chose souvent est, dans la bouche d'un homme d'esprit,  ", wisW / 1.89, wisH / 1.9);
        g.text("une naïveté ou un bon mot, et dans celle du sot, une sottise.\"", wisW / 1.89, wisH / 1.9 + 25);
        g.textFont(exo_extra_light);
        g.text("Jean de La Bruyère", wisW / 1.89, wisH / 1.9 + 75);
    } else if (sayit >= 0.6 && sayit < 0.7) {
        g.noStroke();
        g.fill(255, 220);
        g.textAlign(RIGHT, CENTER);
        g.textSize(16 * m);
        g.textFont(exo_medium);
        g.text("\"“En permettant aux uns de duper les autres,  ", wisW / 1.89, wisH / 1.9);
        g.text("la naïveté est un élément trop capital du bonheur humain,  ", wisW / 1.89, wisH / 1.9 + 25);
        g.text("pour qu'on ne lui doive pas de l'indulgence.\"", wisW / 1.89, wisH / 1.9 + 50);
        g.textFont(exo_extra_light);
        g.text("Henry de Montherlant", wisW / 1.89, wisH / 1.9 + 100);
    } else if (sayit >= 0.7 && sayit < 0.8) {
        g.noStroke();
        g.fill(255, 220);
        g.textAlign(RIGHT, CENTER);
        g.textSize(16 * m);
        g.textFont(exo_medium);
        g.text("\"L'affection et la naïveté muette disent bien plus en disant moins.\"", wisW / 1.89, wisH / 1.9);
        g.textFont(exo_extra_light);
        g.text("William Shakespeare ", wisW / 1.89, wisH / 1.9 + 50);
    } else if (sayit >= 0.8 && sayit < 0.9) {
        g.noStroke();
        g.fill(255, 220);
        g.textAlign(RIGHT, CENTER);
        g.textSize(16 * m);
        g.textFont(exo_medium);
        g.text("\"Il faut beaucoup de naïveté pour faire de grandes choses.\"", wisW / 1.89, wisH / 1.9);
        g.textFont(exo_extra_light);
        g.text("René Crevel ", wisW / 1.89, wisH / 1.9 + 50);
    } else {
        g.noStroke();
        g.fill(255, 220);
        g.textAlign(RIGHT, CENTER);
        g.textSize(16 * m);
        g.textFont(exo_medium);
        g.text("\"Si les hommes ont la naïveté de croire en Dieu,   ", wisW / 1.89, wisH / 1.9);
        g.text("les chiens ont la naïveté de croire en l’homme.\"", wisW / 1.89, wisH / 1.9 + 25);
        g.textFont(exo_extra_light);
        g.text("Eric-Emmanuel Schmitt", wisW / 1.89, wisH / 1.9 + 75);
    }
    g.pop();

    g.push();
    if (loopCount > 15) {
        g.ellipseMode(CORNER);
        g.stroke(20, 220);
        //g.fill(random(col1));
        g.fill(random(col1));
        if (random() < 0.5) {
            g.rect(wisW / 6, wisH / 1.35, 25 * m);
        } else {
            g.ellipse(wisW / 6, wisH / 1.35, 25 * m);
        }
        g.fill(random(col1));
        if (random() < 0.5) {
            g.rect(wisW / 6 + 25 * m, wisH / 1.35, 25 * m);
        } else {
            g.ellipse(wisW / 6 + 25 * m, wisH / 1.35, 25 * m);
        }
        g.fill(random(col1));
        if (random() < 0.5) {
            g.rect(wisW / 6, wisH / 1.35 + 25 * m, 25 * m);
        } else {
            g.ellipse(wisW / 6, wisH / 1.35 + 25 * m, 25 * m);
        }
        g.fill(random(col1));
        if (random() < 0.5) {
            g.rect(wisW / 6 + 25 * m, wisH / 1.35 + 25 * m, 25 * m);
        } else {
            g.ellipse(wisW / 6  + 25 * m, wisH / 1.35 + 25 * m, 25 * m);
        }
    }
    if (loopCount > 30) {
        g.stroke(20, 220);
        g.fill(random(col2));
        if (random() < 0.5) {
            g.rect(wisW / 6 + 100 * m, wisH / 1.35, 25 * m);
        } else {
            g.ellipse(wisW / 6 + 100 * m, wisH / 1.35, 25 * m);
        }
        g.fill(random(col2));
        if (random() < 0.5) {
            g.rect(wisW / 6 + 100 * m + 25 * m, wisH / 1.35, 25 * m);
        } else {
            g.ellipse(wisW / 6 + 100 * m + 25 * m, wisH / 1.35, 25 * m);
        }
        g.fill(random(col2));
        if (random() < 0.5) {
            g.rect(wisW / 6 + 100 * m, wisH / 1.35 + 25 * m, 25 * m);
        } else {
            g.ellipse(wisW / 6 + 100 * m, wisH / 1.35 + 25 * m, 25 * m);
        }
        g.fill(random(col2));
        if (random() < 0.5) {
            g.rect(wisW / 6 + 100 * m + 25 * m, wisH / 1.35 + 25 * m, 25 * m);
        } else {
            g.ellipse(wisW / 6 + 100 * m + 25 * m, wisH / 1.35 + 25 * m, 25 * m);
        }
    }
    if (loopCount > 45) {
        g.stroke(20, 220);
        g.fill(random(col3));
        if (random() < 0.5) {
            g.rect(wisW / 6 + 200 * m, wisH / 1.35, 25 * m);
        } else {
            g.ellipse(wisW / 6 + 200 * m, wisH / 1.35, 25 * m);
        }
        g.fill(random(col3));
        if (random() < 0.5) {
            g.rect(wisW / 6 + 200 * m + 25 * m, wisH / 1.35, 25 * m);
        } else {
            g.ellipse(wisW / 6 + 200 * m + 25 * m, wisH / 1.35, 25 * m);
        }
        g.fill(random(col3));
        if (random() < 0.5) {
            g.rect(wisW / 6 + 200 * m, wisH / 1.35 + 25 * m, 25 * m);
        } else {
            g.ellipse(wisW / 6 + 200 * m, wisH / 1.35 + 25 * m, 25 * m);
        }
        g.fill(random(col3));
        if (random() < 0.5) {
            g.rect(wisW / 6 + 200 * m + 25 * m, wisH / 1.35 + 25 * m, 25 * m);
        } else {
            g.ellipse(wisW / 6 + 200 * m + 25 * m, wisH / 1.35 + 25 * m, 25 * m);
        }
    }
    if (loopCount > 60) {
        g.stroke(20, 220);
        g.fill(random(col4));
        if (random() < 0.5) {
            g.rect(wisW / 6 + 300 * m, wisH / 1.35, 25 * m);
        } else {
            g.ellipse(wisW / 6 + 300 * m, wisH / 1.35, 25 * m);
        }
        g.fill(random(col4));
        if (random() < 0.5) {
            g.rect(wisW / 6 + 300 * m + 25 * m, wisH / 1.35, 25 * m);
        } else {
            g.ellipse(wisW / 6 + 300 * m + 25 * m, wisH / 1.35, 25 * m);
        }
        g.fill(random(col4));
        if (random() < 0.5) {
            g.rect(wisW / 6 + 300 * m, wisH / 1.35 + 25 * m, 25 * m);
        } else {
            g.ellipse(wisW / 6 + 300 * m, wisH / 1.35 + 25 * m, 25 * m);
        }
        g.fill(random(col4));
        if (random() < 0.5) {
            g.rect(wisW / 6 + 300 * m + 25 * m, wisH / 1.35 + 25 * m, 25 * m);
        } else {
            g.ellipse(wisW / 6 + 300 * m + 25 * m, wisH / 1.35 + 25 * m, 25 * m);
        }
    }
    if (loopCount > 75) {
        g.stroke(20, 220);
        g.fill(random(col5));
        if (random() < 0.5) {
            g.rect(wisW / 6 + 400 * m, wisH / 1.35, 25 * m);
        } else {
            g.ellipse(wisW / 6 + 400 * m, wisH / 1.35, 25 * m);
        }
        g.fill(random(col5));
        if (random() < 0.5) {
            g.rect(wisW / 6 + 400 * m + 25 * m, wisH / 1.35, 25 * m);
        } else {
            g.ellipse(wisW / 6 + 400 * m + 25 * m, wisH / 1.35, 25 * m);
        }
        g.fill(random(col5));
        if (random() < 0.5) {
            g.rect(wisW / 6 + 400 * m, wisH / 1.35 + 25 * m, 25 * m);
        } else {
            g.ellipse(wisW / 6 + 400 * m, wisH / 1.35 + 25 * m, 25 * m);
        }
        g.fill(random(col5));
        if (random() < 0.5) {
            g.rect(wisW / 6 + 400 * m + 25 * m, wisH / 1.35 + 25 * m, 25 * m);
        } else {
            g.ellipse(wisW / 6 + 400 * m + 25 * m, wisH / 1.35 + 25 * m, 25 * m);
        }
        g.pop();
    }
    showLoader = true;

    if (loopCount > 100) {
        currentState = "showLoader";
        // currentState = 'drawingO';
    }
}

