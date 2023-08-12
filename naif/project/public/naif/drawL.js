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
        currentState = 'drawing-O';
    }
}

