let col1,col2,col3,col4,col5,doorContent,rows,cols,skyX,skyY,loader,font,cloud,seed=0xc559af054f6c600*fxrand(),sayit=fxrand(),currentState="loading",loopCount=0,noiseSeedValue=0,showLoader=!1,cool1="https://coolors.co/c2efb3-97abb1-892f65-735f3d-594a26".split("/").pop().split("-").map((o=>"#"+o)),cool11="https://coolors.co/f1fbee-c5d0d3-c9be9d-b2986c-9d8243".split("/").pop().split("-").map((o=>"#"+o)),cool12="https://coolors.co/palette/f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0".split("/").pop().split("-").map((o=>"#"+o)),cool2="https://coolors.co/db2b39-29335c-f3a712-f0cea0-534d41".split("/").pop().split("-").map((o=>"#"+o)),cool21="https://coolors.co/0081af-00abe7-2dc7ff-ead2ac-eaba6b".split("/").pop().split("-").map((o=>"#"+o)),cool22="https://coolors.co/palette/03045e-023e8a-0077b6-0096c7-00b4d8-48cae4-90e0ef-ade8f4-caf0f8".split("/").pop().split("-").map((o=>"#"+o)),cool3="https://coolors.co/a63446-fbfef9-0c6291-000004-7e1946".split("/").pop().split("-").map((o=>"#"+o)),cool31="https://coolors.co/f7b2b7-f7717d-de639a-7f2982-16001e".split("/").pop().split("-").map((o=>"#"+o)),cool4="https://coolors.co/dbd56e-88ab75-2d93ad-7d7c84-de8f6e".split("/").pop().split("-").map((o=>"#"+o)),cool41="https://coolors.co/044389-fcff4b-ffad05-7cafc4-5995ed".split("/").pop().split("-").map((o=>"#"+o)),cool5="https://coolors.co/241023-6b0504-a3320b-d5e68d-47a025".split("/").pop().split("-").map((o=>"#"+o)),cool51="https://coolors.co/fdfffc-235789-c1292e-f1d302-161925".split("/").pop().split("-").map((o=>"#"+o)),cool6="https://coolors.co/272932-4d7ea8-828489-9e90a2-b6c2d9".split("/").pop().split("-").map((o=>"#"+o)),cool61="https://coolors.co/e08dac-6a7fdb-57e2e5-45cb85-153131".split("/").pop().split("-").map((o=>"#"+o)),doorW=80,doorH=140,doorBd=2,shdwL=60,shdwA=.5,gap=60,bd=0,bd2=bd/2,depth=60,padding=25,gS=15,pD=4,ar=1,drawShdw=!0,drawBGCubes=!0,sizeMod=6,size=2,cubesRows=90,cubesCols=90,roundIt=!1,squareIt=!0,nos=0,nosh=!1,nosColor=!1,strokeW=2,noiseValues=[],nodeThis=!0,nodeType=0,pointGridSize=7,globalPointSize=24,minPointSize=1,pointSizeDecrement=1.5,allNodes=[],counter=0,isBgColorDark=!1,drawStr=!0,deviation=0,phase=0,duneH=75,duneCount=7,dunes=[],stratus=!1,cloudCount=3,cloudHeight=230,clouds=[],stratusCircles=[],numberOfCircles=55,riseH=130,perspectiveFactor=.04,doors=[],doorContents=[];function preload(){exo_black=loadFont("fonts/Exo-Black.ttf"),exo_bold=loadFont("fonts/Exo-Bold.ttf"),exo_regular=loadFont("fonts/Exo-Regular.ttf"),exo_semibold=loadFont("fonts/Exo-SemiBold.ttf"),exo_thin=loadFont("fonts/Exo-Thin.ttf"),exo_extra_light=loadFont("fonts/Exo-ExtraLight.ttf"),exo_light=loadFont("fonts/Exo-Light.ttf"),exo_medium=loadFont("fonts/Exo-Medium.ttf"),exo_extra_bold=loadFont("fonts/Exo-ExtraBold.ttf")}let fontPts=[];function rngBackgroundType(o){return o>=0&&o<.125?"cubik A":o>=.125&&o<.25?"cubik B":o>=.25&&o<.375?"cubik full B":o>=.375&&o<.5?"cubik alea":o>=.5&&o<.625?"cubik full C":o>=.625&&o<.75?"cubik C":o>=.75&&o<.86?"cubik full":o>=.86&&o<.9?"bubulles":o>=.9&&o<.96?"cubik destruct":"flat"}function rngBackgroundAxis(o){return o<.5?"X":o>=.95?"R":"Y"}function rngDeviaType(o){let e;return o>=0&&o<.25?(e=60*o,"low"):o>=.25&&o<.55?(e=100*(o-.25)+15,"mid"):o>=.55&&o<.85?(e=83.33*(o-.55)+40,"high"):(e=0,"none")}function setParams(o){doorW*=o,doorH*=o,doorBd*=o,shdwL*=o,shdwA*=o,gap*=o,bd*=o,depth*=o,padding*=o,sizeMod*=o,size*=o,globalPointSize*=o,minPointSize*=o,pointSizeDecrement*=o,deviation*=o,duneH*=o,doorBd=int(random(1,3)*o),pointGridSize=$fx.getFeature("node grid size"),nodeType=$fx.getFeature("node type"),nos=$fx.getFeature("nos type"),cloudCount=$fx.getFeature("cloud count"),cloudHeight=$fx.getFeature("cloud height")*o,bd=$fx.getFeature("border size")*o,stratus=$fx.getFeature("base model"),numberOfCircles=$fx.getFeature("number of stratus"),riseH=$fx.getFeature("rise height")*o}function setup(){$fx.rand.reset(),$fx.randminter.reset(),randomSeed(seed),noiseSeed(seed),grid=generateGrid(6,4);let o=1080,e=1080;1<ar?(createCanvas(e,e/ar),wisW=e,wisH=e/ar):(createCanvas(o*ar,o),wisW=o*ar,wisH=o),m=min(wisW,wisH)/1080,angleMode(DEGREES),pixelDensity(pD),p5grain.setup({random:fxrand}),setParams(m),loader=createGraphics(wisW,wisH,P2D),col1=random([cool1,cool2,cool3]),col2=random([cool11,cool21,cool31]),col3=random([cool4,cool5,cool6]),col4=random([cool41,cool51,cool61]),col5=random([cool1,cool2,cool5,cool6]),colr1=random([cool1]),colr11=random([cool11]),colr12=random([cool12]),colr2=random([cool2]),colr21=random([cool21]),colr22=random([cool22]),colr3=random([cool3]),colr31=random([cool31]),colr4=random([cool4]),colr41=random([cool41]),colr5=random([cool5]),colr51=random([cool51]),colr6=random([cool6]),colr61=random([cool61]);let t=color(random(col3));t.setAlpha(220);let r=new Map;for(let o=0;o<grid.length;o++){for(let e=0;e<grid[o].length;e++){let t=grid[o][e];if(0===t){let r=e*(doorW+gap)+gap+(width-grid[0].length*(doorW+gap))/2,i=o*(doorH+gap)+doorH+gap+(height-grid.length*(doorH+gap))/2;if(0===t){doors.push(new Door(r,i,1,"vertical",[60,200]));continue}}if(0===t)continue;let i=e*(doorW+gap)+gap+(width-grid[0].length*(doorW+gap))/2,d=o*(doorH+gap)+doorH+gap+(height-grid.length*(doorH+gap))/2;if(r.has(t)){let o=r.get(t);o.minX=min(o.minX,i),o.minY=min(o.minY,d),o.maxX=max(o.maxX,i),o.maxY=max(o.maxY,d),o.doors++}else r.set(t,{minX:i,minY:d,maxX:i,maxY:d,doors:1,color:[60,200]})}if(doorContent=createGraphics(wisW,wisH,P2D),!0===stratus)initStratus();else if(!1===stratus){for(let o=0;o<cloudCount;o++){let e=createCloud(map(o,0,cloudCount,0,wisH/2));clouds.push(e)}for(let o=0;o<duneCount;o++){let e=createDune(map(o,0,duneCount,wisH/2,wisH));dunes.push(e)}}}for(let[o,e]of r){let o,r=(e.minX+e.maxX)/2;o=e.maxY-e.minY>doorH?(e.minY+e.maxY)/2+doorH/1.5:(e.minY+e.maxY)/2;let i=e.maxX-e.minX+doorW,d=e.maxY-e.minY+doorH;doors.push(new MultiDoor(r,o,i,d,e.color)),doorContents.push(new DoorContent(r,o,t))}}function draw(){if(loopCount++,randomSeed(seed),noiseSeed(seed),"loading"===currentState)drawL(),showLoader&&image(loader,0,0);else if("drawing"===currentState){let o=random(),e=color(random(col2));e.setAlpha(230);let t=color(random(col1));t.setAlpha(210);let r=random();r<.85?doorsGrad(doorContent,0,0,doorContent.width,doorContent.height,e,t,r<.75?"X":"Y"):(background(20),gradDoors(doorContent,4,random(col3),random(col4),random(col5),random(col4))),background(random()<.5?20:235);let i=color(random(col3));i.setAlpha(210);let d=color(random(col4));d.setAlpha(230),bd>0&&drawBd(2);const n=$fx.getFeature("background type"),s=$fx.getFeature("background axis");if(1==drawBGCubes&&("cubik A"===n?(bgGrad(0,0,wisW,wisH,i,d,"X"===s?"X":"Y"),drawCubes()):"cubik B"===n?(gradBg(4,random(col4),random(col3),random(col5),random(col4)),drawCubesB()):"cubik full B"===n?(bgGrad(0,0,wisW,wisH,i,d,"X"===s?"X":"Y"),drawCubesAllB()):"cubik alea"===n?(bgGrad(0,0,wisW,wisH,i,d,"X"===s?"X":"Y"),drawCubesRand()):"cubik full C"===n?(gradBg(4,random(col4),random(col3),random(col3),random(col4)),drawCubesAllC()):"cubik C"===n?(gradBg(4,random(col4),random(col3),random(col4),random(col5)),drawCubesC()):"cubik full"===n?(gradBg(7,random(col1),random(col2),random(col3),random(col4),random(col3),random(col2),random(col1)),drawCubesAll()):"bubulles"===n?(bgGrad(0,0,wisW,wisH,i,d,"R"),drawBub()):"cubik destruct"===n?(bgGrad(0,0,wisW,wisH,i,d,"X"===s?"X":"R"),drawCubesDestructC()):background(random()<.5?20:235)),!0===stratus)doorContent.blendMode(SOFT_LIGHT),doorContent.globalAlpha=.5,doorContent.filter="blur(20px)",drawStratus(doorContent,13),initRise();else if(!1===stratus){for(let o of clouds)for(let e of o){let o=map(e.y,e.cloudY,e.cloudY+cloudHeight,255,50);o=constrain(o,50,255);let t=color(random(col4));t.setAlpha(o),doorContent.push(),doorContent.stroke(t),doorContent.strokeWeight(random(.25,3)*m),doorContent.point(e.x,e.y),doorContent.pop()}for(let o of dunes)for(let e of o){let o=map(e.y,e.duneY,e.duneY+duneH,180,10),t=color(random(col5));t.setAlpha(o),doorContent.push(),doorContent.stroke(t),doorContent.strokeWeight(random(.25,1.5)*m),doorContent.point(e.x,e.y),doorContent.pop()}}for(let o of doors)if(o instanceof Door||o instanceof MultiDoor){1==drawStr&&deviation>=20&&(isBgColorDark?(o.drawStruct([250,230],random(4,7)*m),o.drawDoor([250,230],random(4,7)*m)):(o.drawStruct([60,230],random(3,6)*m),o.drawDoor([60,230],random(3,6)*m)));let e=new DoorContent(doorContent,o.x,o.y,color(random(col3)));e.moreHit(random(5,25),random(col3),random(col4)),e.moreTouch(random(2,4),random(col2),random(col5)),random()>.93&&e.moreCross(random(5,25),random(8,12),random(col3)),random()<.15?e.moreBirdsRemind(int(random(25,55)),2,7):e.moreBirdsActual(int(random(15,25))),e.moreCircles(int(random(20,40)))}for(let e of doors)if(e instanceof Door||e instanceof MultiDoor){1==drawShdw&&random()<.5?e.drawDoorShdw([180,70]):e.drawDoorShdwInv([180,90]),random()<.01&&(doorContent.loadPixels(),morePoint(3,3,10,200,2,6)),e.copyContent(),1==drawStr&&deviation<20&&o<.5?isBgColorDark?(e.drawStruct([240,220],random(1,4)*m),e.drawDoor([240,220],random(1,4)*m)):(e.drawStruct([80,220],random(1,4)*m),e.drawDoor([80,220],random(1,4)*m)):1==drawStr&&deviation<20&&o>.5&&(isBgColorDark?(e.drawStructInv([240,220],random(1,4)*m),e.drawDoor([240,220],random(1,4)*m)):(e.drawStructInv([80,220],random(1,4)*m),e.drawDoor([80,220],random(1,4)*m)));let t=random();t>=.074&&t<.087&&(isBgColorDark?e.drawCtx([240,150],random(col5),random(2,4)*m):e.drawCtx([80,170],random(col5),random(2,4)*m)),1==nodeThis&&(doorContent.loadPixels(),drawPoint()),bd>0&&drawBd(int(random(1,3)))}drawD(),stopping()}}$fx.features({"border size":$fx.rand()<.95?"0":"20","node type":Math.floor(3*$fx.rand()),"node grid size":Math.floor(5*$fx.rand())+2,"nos type":Math.floor(3*$fx.rand()),"base model":$fx.rand()<.5,"cloud count":Math.floor(3*$fx.rand())+2,"cloud height":Math.floor(150*$fx.rand())+190,deviation:rngDeviaType(fxrand()),"background type":rngBackgroundType(fxrand()),"background axis":rngBackgroundAxis(fxrand()),"number of stratus":Math.floor(25*$fx.rand())+50,"rise height":Math.floor(50*$fx.rand())+130});class Door{constructor(o,e,t=1,r="horizontal",i=[0,0,0]){this.x=o,this.y=e,this.numDoors=t,this.orientation=r,this.color=i,this.g=doorContent}drawDoor(o,e){push(),translate(this.x,this.y),noFill(),stroke(o),strokeWeight(e),"horizontal"==this.orientation&&(this.numDoors,this.numDoors),"vertical"==this.orientation&&(this.numDoors,this.numDoors),beginShape(),vertex(-doorW/2,-doorH),vertex(doorW/2,-doorH),vertex(doorW/2,0),vertex(-doorW/2,0),endShape(CLOSE),pop()}drawCtx(o,e,t){let r=random(-30,30)*m,i=random(-30,30)*m,d=random(-30,30)*m;push(),translate(this.x,this.y),stroke(o),strokeWeight(t/2),fill(e),random()<.5&&(beginShape(),vertex(-doorW/2,-doorH),vertex(-doorW/2-r,-doorH-r),vertex(-doorW/2-r,0-r),vertex(-doorW/2,0),endShape(CLOSE)),random()<.5&&(beginShape(),vertex(doorW/2,-doorH),vertex(doorW/2+i,-doorH-i),vertex(doorW/2+i,0-i),vertex(doorW/2,0),endShape(CLOSE)),random()<.15&&(beginShape(),vertex(-doorW/2,-doorH),vertex(-doorW/2-d,-doorH-d),vertex(doorW/2+d,-doorH-d),vertex(doorW/2,-doorH),endShape(CLOSE)),pop()}drawStruct(o,e){push(),stroke(o),strokeWeight(e),rndBend(this.x-doorW/2,this.y-doorH,this.x-doorW/2+depth,this.y-doorH-depth,deviation),rndBend(this.x+doorW/2,this.y-doorH,this.x+doorW/2+depth,this.y-doorH-depth,deviation),rndBend(this.x-doorW/2+depth,this.y-doorH-depth,this.x+doorW/2+depth,this.y-doorH-depth,deviation),rndBend(this.x+doorW/2+depth,this.y-doorH-depth,this.x+doorW/2+depth,doorH+depth,deviation),pop()}drawStructInv(o,e){push(),stroke(o),strokeWeight(e),rndBend(this.x-doorW/2,this.y-doorH,this.x-doorW/2+depth,this.y-doorH-depth,deviation),rndBend(this.x+doorW/2,this.y-doorH,this.x+doorW/2+depth,this.y-doorH-depth,deviation),rndBend(this.x-doorW/2+depth,this.y-doorH-depth,this.x+doorW/2+depth,this.y-doorH-depth,deviation),rndBend(this.x+doorW/2+depth,this.y-doorH-depth,this.x+doorW/2+depth,doorH+doorH/1.75,deviation),pop()}drawDoorShdw(o){let e=noise(.1*this.y);push(),translate(this.x,this.y),noFill(),stroke(o),strokeWeight(doorBd),beginShape(),stroke(random(0,20),random(30,50)),drawingContext.setLineDash([0,2*m,3*m]),vertex(-doorW/2,0),rndBendVertex(-doorW/2,0,doorW/2,0,deviation),vertex(doorW/2,0),rndBendVertex(doorW/2,0,doorW/2-shdwL*e,shdwL/2,deviation),vertex(doorW/2-shdwL*e,shdwL/2),rndBendVertex(doorW/2-shdwL*e,shdwL/2,-doorW/2-shdwL*e,shdwL/2,deviation),vertex(-doorW/2-shdwL*e,shdwL/2),rndBendVertex(-doorW/2-shdwL*e,shdwL/2,-doorW/2,0,deviation),vertex(-doorW/2,0),endShape(CLOSE),pop()}drawDoorShdwInv(o){let e=noise(.1*this.y);push(),translate(this.x,this.y),stroke(o),strokeWeight(doorBd),fill(random(40,80),random(45,65)),stroke(random(40,80),random(45,65)),drawingContext.setLineDash([0*m,2*m,3*m]),beginShape(),vertex(-doorW/2,0),rndBendVertex(-doorW/2,0,doorW/2,0,deviation),vertex(doorW/2,0),rndBendVertex(doorW/2,0,doorW/2-shdwL*e,-shdwL/2,deviation),vertex(doorW/2-shdwL*e,-shdwL/2),rndBendVertex(doorW/2-shdwL*e,-shdwL/2,-doorW/2-shdwL*e,-shdwL/2,deviation),vertex(-doorW/2-shdwL*e,-shdwL/2),rndBendVertex(-doorW/2-shdwL*e,-shdwL/2,-doorW/2,0,deviation),vertex(-doorW/2,0),endShape(CLOSE),pop()}copyContent(){push(),this.w,this.h,copy(doorContent,int(this.x)-int(doorW),int(this.y-doorH),int(doorW),int(doorH),int(this.x-doorW/2),int(this.y-doorH),int(doorW),int(doorH)),pop()}}class MultiDoor{constructor(o,e,t,r,i){this.x=o,this.y=e+3.5*m,this.w=t,this.h=r-3.5*m,this.color=i,this.g=doorContent}drawDoor(o,e){push(),translate(this.x,this.y),noFill(),stroke(o),strokeWeight(e);let t=this.w,r=this.h;beginShape(),vertex(-t/2,-r),vertex(t/2,-r),vertex(t/2,0),vertex(-t/2,0),endShape(CLOSE),pop()}drawCtx(o,e,t){let r=random(-50,50),i=random(-50,50),d=random(-50,50),n=this.w,s=this.h;push(),translate(this.x,this.y),stroke(o),strokeWeight(t/2),fill(e),random()<.5&&(beginShape(),vertex(-n/2,-s),vertex(-n/2-r,-s-r),vertex(-n/2-r,0-r),vertex(-n/2,0),endShape(CLOSE)),random()<.5&&(beginShape(),vertex(n/2,-s),vertex(n/2+i,-s-i),vertex(n/2+i,0-i),vertex(n/2,0),endShape(CLOSE)),random()<.15&&(beginShape(),vertex(-n/2,-s),vertex(-n/2-d,-s-d),vertex(n/2+d,-s-d),vertex(n/2,-s),endShape(CLOSE)),pop()}drawStruct(o,e){let t=this.w,r=this.h;push(),stroke(o),strokeWeight(e),rndBend(this.x-t/2,this.y-r,this.x-t/2+depth,this.y-r-depth,deviation),rndBend(this.x+t/2,this.y-r,this.x+t/2+depth,this.y-r-depth,deviation),rndBend(this.x-t/2+depth,this.y-r-depth,this.x+t/2+depth,this.y-r-depth,deviation),rndBend(this.x+t/2+depth,this.y-r-depth,this.x+t/2+depth,doorH+depth,deviation),pop()}drawStructInv(o,e){let t=this.w,r=this.h;push(),stroke(o),strokeWeight(e),rndBend(this.x-t/2,this.y-r,this.x-t/2+depth,this.y-r-depth,deviation),rndBend(this.x+t/2,this.y-r,this.x+t/2+depth,this.y-r-depth,deviation),rndBend(this.x-t/2+depth,this.y-r-depth,this.x+t/2+depth,this.y-r-depth,deviation),rndBend(this.x+t/2+depth,this.y-r-depth,this.x+t/2+depth,r+r/1.75,deviation),pop()}drawDoorShdw(o){let e=noise(.1*this.y),t=this.w;this.h,push(),translate(this.x,this.y),noFill(),stroke(o),strokeWeight(doorBd),beginShape(),stroke(random(0,20),random(30,50)),drawingContext.setLineDash([0,2*m,3*m]),vertex(-t/2,0),rndBendVertex(-t/2,0,t/2,0,deviation),vertex(t/2,0),rndBendVertex(t/2,0,t/2-shdwL*e,shdwL/2,deviation),vertex(t/2-shdwL*e,shdwL/2),rndBendVertex(t/2-shdwL*e,shdwL/2,-t/2-shdwL*e,shdwL/2,deviation),vertex(-t/2-shdwL*e,shdwL/2),rndBendVertex(-t/2-shdwL*e,shdwL/2,-t/2,0,deviation),vertex(-t/2,0),endShape(CLOSE),pop()}drawDoorShdwInv(o){let e=noise(.1*this.y),t=this.w;this.h,push(),translate(this.x,this.y),stroke(o),strokeWeight(doorBd),fill(random(40,80),random(45,65)),stroke(random(40,80),random(45,65)),drawingContext.setLineDash([0,2*m,3*m]),beginShape(),vertex(-t/2,0),rndBendVertex(-t/2,0,t/2,0,deviation),vertex(t/2,0),rndBendVertex(t/2,0,t/2-shdwL*e,-shdwL/2,deviation),vertex(t/2-shdwL*e,-shdwL/2),rndBendVertex(t/2-shdwL*e,-shdwL/2,-t/2-shdwL*e,-shdwL/2,deviation),vertex(-t/2-shdwL*e,-shdwL/2),rndBendVertex(-t/2-shdwL*e,-shdwL/2,-t/2,0,deviation),vertex(-t/2,0),endShape(CLOSE),pop()}copyContent(){push();let o=this.w,e=this.h;doorContent.blendMode(MULTIPLY),doorContent.globalAlpha=.5,doorContent.filter="blur(15px)",copy(doorContent,this.x-int(o),int(this.y-e),int(o),int(e),int(this.x-o/2),int(this.y-e),int(o),int(e)),pop()}}class DoorContent{constructor(o,e,t,r){this.g=doorContent,this.originX=e,this.originY=t,this.color=r}moreCircles(o){this.g.push(),this.g.blendMode(SCREEN),this.g.globalAlpha=.5,this.g.filter="blur(15px)",this.g.noFill(),this.g.stroke(this.color),this.g.strokeWeight(.5*m);for(let e=10;e<o;e++){let o=Math.pow(1.15,e);this.g.drawingContext.setLineDash([4*m,3*m,5*m,2*m,3*m]),this.g.circle(this.originX,this.originY,2*o)}this.g.pop()}moreBirdsRemind(o,e,t){this.g.push(),this.g.blendMode(MULTIPLY),this.g.globalAlpha=.5,this.g.filter="blur(15px)",this.g.noFill();for(let r=0;r<o;r++){let o=random(100,wisW-100)*m,r=random(100,wisH-100)*m,i=random(e,t)*m;this.g.stroke(this.color),this.g.beginShape(),this.g.vertex(o+i,r+i),this.g.vertex(o,r),this.g.vertex(o-i,r+i),this.g.endShape()}this.g.pop()}moreBirdsActual(o){this.g.push(),this.g.blendMode(SCREEN),this.g.globalAlpha=.5,this.g.filter="blur(15px)";for(let e=0;e<o;e++){let o=random(100,wisW-100)*m,e=random(100,wisH-100)*m,t=random(4,7)*m,r=random(2,4)*m;random(2,6),m,this.g.stroke(this.color),this.g.beginShape(LINES),this.g.vertex(o-r,e-r),this.g.vertex(o+t,e+t),this.g.vertex(o+t,e+t),this.g.vertex(o-t,e-t),this.g.vertex(o-t,e+t),this.g.vertex(o+r,e+r),this.g.endShape()}this.g.pop()}moreDunes(o){let e=.75*o,t=TWO_PI/wisW,r=0,i=this.originY;this.g.push(),this.g.stroke(255,160),this.g.strokeWeight(random(.25,1.5)*m);let d=[];for(let n=0;n<wisW;n+=1)for(let s=0;s<o;s+=1){let a=noise(.003*n,.005*(i+s))*o,l=e*sin(t*n+r),h=createVector(n,i+s+a+l);h.duneY=i,d.push(h)}r+=.05;for(let e of d){let t=map(e.y,e.duneY,e.duneY+o,100,30);this.g.stroke(255,t),this.g.point(e.x,e.y)}this.g.pop()}moreHit(o,e,t){this.g.push();let r=color(e),i=color(t);this.g.noStroke();for(let e=o;e>0;--e){let t=map(e,0,o,0,1),d=this.g.lerpColor(r,i,t);this.g.fill(d),this.g.circle(this.originX+random(-130,130)*m,this.originY+random(-80,80)*m,4*e)}this.g.pop()}moreTouch(o,e,t){this.g.push();let r=color(e),i=color(t);this.g.noStroke();for(let e=o;e>0;--e){let t=map(e,0,o,0,1),d=this.g.lerpColor(r,i,t);this.g.fill(d),this.g.circle(this.originX-doorW/random(1,3)*m,this.originY-doorH/random(1,3)*m,2*e)}for(let e=0;e<6;e++){let e=random(TWO_PI),t=random(.5*o),r=this.originX+cos(e)*t,i=this.originY+sin(e)*t,d=random(5,10);this.g.fill(0,0,100),this.g.circle(r+random(-doorW,doorW),i+random(-doorH,doorH),2*d)}this.g.pop()}moreCross(o,e,t){this.g.push(),this.g.strokeWeight(e),this.g.stroke(t),this.g.noFill();for(let e=0;e<o;e++){let e=this.originX+random(-130,130)*m,t=this.originY+random(-80,80)*m,r=o/2,i=random(TWO_PI);this.g.push(),this.g.translate(e,t),this.g.rotate(i),this.g.line(-r,0,r,0),this.g.line(0,-r,0,r),this.g.pop()}this.g.pop()}}function generateGrid(o,e){let t=Array(e).fill(0).map((()=>Array(o).fill(0))),r=[[[1,1],[1,1]],[[1,1]],[[1],[1]]],i=floor(random()*(o*e/4));for(let d=1;d<=i;d++){let i,n,s=r[floor(random()*r.length)];do{i=floor(random()*o),n=floor(random()*e)}while(!canPlaceShape(t,s,i,n));placeShape(t,s,i,n,d)}return t}function canPlaceShape(o,e,t,r){for(let i=0;i<e.length;i++)for(let d=0;d<e[i].length;d++)if(r+i>=o.length||t+d>=o[0].length||0!==o[r+i][t+d])return!1;return!0}function placeShape(o,e,t,r,i){for(let d=0;d<e.length;d++)for(let n=0;n<e[d].length;n++)o[r+d][t+n]=i}function drawL(){loader.background(20),loader.push(),loader.translate(wisW/2,wisH/2.75),loader.noFill(),loader.stroke(255,210),loader.strokeWeight(2*m),loader.line(-80*m/2,-140*m,-80*m/2+60*m,-140*m-60*m),loader.line(80*m/2,-140*m,80*m/2+60*m,-140*m-60*m),loader.line(-80*m/2+60*m,-140*m-60*m,80*m/2+60*m,-140*m-60*m),loader.line(80*m/2+60*m,-140*m-60*m,80*m/2+60*m,140*m+60*m+60*m),loader.beginShape(),loader.vertex(-80*m/2,-140*m),loader.vertex(80*m/2,-140*m),loader.vertex(80*m/2,0),loader.vertex(-80*m/2,0),loader.endShape(CLOSE),loader.pop(),loader.push(),loader.noStroke(),loader.fill(255,220),loader.textAlign(CENTER,CENTER),loader.textSize(40*m),loader.textFont(exo_black),loader.text("naïf",wisW/2,wisH/3.2),loader.textFont(exo_bold),loader.textSize(14*m),loader.text("abstraction",wisW/2,wisH/3.2+40*m),loader.pop(),loader.push(),loader.angleMode(DEGREES),loader.translate(wisW/1.64,wisH/1.66),loader.rotate(-90),loader.noStroke(),loader.fill(255,220),loader.textFont(exo_regular),loader.textSize(14*m),loader.text("# "+$fx.iteration+" de 128",0,0),loader.pop(),loader.push(),sayit<.2?(loader.noStroke(),loader.fill(255,220),loader.textAlign(RIGHT,CENTER),loader.textSize(16*m),loader.textFont(exo_medium),loader.text('"Toute connaissance dégénère en probabilité."',wisW/1.89,wisH/1.9),loader.textFont(exo_extra_light),loader.text("Christian Bobin",wisW/1.89,wisH/1.9+40)):sayit>=.2&&sayit<.4?(loader.noStroke(),loader.fill(255,220),loader.textAlign(RIGHT,CENTER),loader.textSize(16*m),loader.textFont(exo_medium),loader.text("\"Ce qu'il y a de plus criminel au monde, c'est l'absence de naïveté.  ",wisW/1.89,wisH/1.9),loader.text("Elle réduit l'essentiel à des minuties et abolit nos élans.\"",wisW/1.89,wisH/1.9+25),loader.textFont(exo_extra_light),loader.text("Alexandre Jardin",wisW/1.89,wisH/1.9+75)):sayit>=.4&&sayit<.5?(loader.noStroke(),loader.fill(255,220),loader.textAlign(RIGHT,CENTER),loader.textSize(16*m),loader.textFont(exo_medium),loader.text('"Nous étions encore tous les cinq proches des naïvetés  ',wisW/1.89,wisH/1.9),loader.text("de l'enfance -- de ces naïvetés qui sont peut-être  ",wisW/1.89,wisH/1.9+25),loader.text('la part la plus féconde que la vie nous donne et ensuite nous reprend."',wisW/1.89,wisH/1.9+50),loader.textFont(exo_extra_light),loader.text("Romain Gary",wisW/1.89,wisH/1.9+100)):sayit>=.5&&sayit<.6?(loader.noStroke(),loader.fill(255,220),loader.textAlign(RIGHT,CENTER),loader.textSize(16*m),loader.textFont(exo_medium),loader.text("\"“La même chose souvent est, dans la bouche d'un homme d'esprit,  ",wisW/1.89,wisH/1.9),loader.text('une naïveté ou un bon mot, et dans celle du sot, une sottise."',wisW/1.89,wisH/1.9+25),loader.textFont(exo_extra_light),loader.text("Jean de La Bruyère",wisW/1.89,wisH/1.9+75)):sayit>=.6&&sayit<.7?(loader.noStroke(),loader.fill(255,220),loader.textAlign(RIGHT,CENTER),loader.textSize(16*m),loader.textFont(exo_medium),loader.text('"“En permettant aux uns de duper les autres,  ',wisW/1.89,wisH/1.9),loader.text("la naïveté est un élément trop capital du bonheur humain,  ",wisW/1.89,wisH/1.9+25),loader.text("pour qu'on ne lui doive pas de l'indulgence.\"",wisW/1.89,wisH/1.9+50),loader.textFont(exo_extra_light),loader.text("Henry de Montherlant",wisW/1.89,wisH/1.9+100)):sayit>=.7&&sayit<.8?(loader.noStroke(),loader.fill(255,220),loader.textAlign(RIGHT,CENTER),loader.textSize(16*m),loader.textFont(exo_medium),loader.text('"L\'affection et la naïveté muette disent bien plus en disant moins."',wisW/1.89,wisH/1.9),loader.textFont(exo_extra_light),loader.text("William Shakespeare ",wisW/1.89,wisH/1.9+50)):sayit>=.8&&sayit<.9?(loader.noStroke(),loader.fill(255,220),loader.textAlign(RIGHT,CENTER),loader.textSize(16*m),loader.textFont(exo_medium),loader.text('"Il faut beaucoup de naïveté pour faire de grandes choses."',wisW/1.89,wisH/1.9),loader.textFont(exo_extra_light),loader.text("René Crevel ",wisW/1.89,wisH/1.9+50)):(loader.noStroke(),loader.fill(255,220),loader.textAlign(RIGHT,CENTER),loader.textSize(16*m),loader.textFont(exo_medium),loader.text('"Si les hommes ont la naïveté de croire en Dieu,   ',wisW/1.89,wisH/1.9),loader.text('les chiens ont la naïveté de croire en l’homme."',wisW/1.89,wisH/1.9+25),loader.textFont(exo_extra_light),loader.text("Eric-Emmanuel Schmitt",wisW/1.89,wisH/1.9+75)),loader.pop(),loader.push(),loopCount>15&&(loader.ellipseMode(CORNER),loader.stroke(20,220),loader.fill(random(col1)),random()<.5?loader.rect(wisW/6,wisH/1.35,25*m):loader.ellipse(wisW/6,wisH/1.35,25*m),loader.fill(random(col1)),random()<.5?loader.rect(wisW/6+25*m,wisH/1.35,25*m):loader.ellipse(wisW/6+25*m,wisH/1.35,25*m),loader.fill(random(col1)),random()<.5?loader.rect(wisW/6,wisH/1.35+25*m,25*m):loader.ellipse(wisW/6,wisH/1.35+25*m,25*m),loader.fill(random(col1)),random()<.5?loader.rect(wisW/6+25*m,wisH/1.35+25*m,25*m):loader.ellipse(wisW/6+25*m,wisH/1.35+25*m,25*m)),loopCount>30&&(loader.stroke(20,220),loader.fill(random(col2)),random()<.5?loader.rect(wisW/6+100*m,wisH/1.35,25*m):loader.ellipse(wisW/6+100*m,wisH/1.35,25*m),loader.fill(random(col2)),random()<.5?loader.rect(wisW/6+100*m+25*m,wisH/1.35,25*m):loader.ellipse(wisW/6+100*m+25*m,wisH/1.35,25*m),loader.fill(random(col2)),random()<.5?loader.rect(wisW/6+100*m,wisH/1.35+25*m,25*m):loader.ellipse(wisW/6+100*m,wisH/1.35+25*m,25*m),loader.fill(random(col2)),random()<.5?loader.rect(wisW/6+100*m+25*m,wisH/1.35+25*m,25*m):loader.ellipse(wisW/6+100*m+25*m,wisH/1.35+25*m,25*m)),loopCount>45&&(loader.stroke(20,220),loader.fill(random(col3)),random()<.5?loader.rect(wisW/6+200*m,wisH/1.35,25*m):loader.ellipse(wisW/6+200*m,wisH/1.35,25*m),loader.fill(random(col3)),random()<.5?loader.rect(wisW/6+200*m+25*m,wisH/1.35,25*m):loader.ellipse(wisW/6+200*m+25*m,wisH/1.35,25*m),loader.fill(random(col3)),random()<.5?loader.rect(wisW/6+200*m,wisH/1.35+25*m,25*m):loader.ellipse(wisW/6+200*m,wisH/1.35+25*m,25*m),loader.fill(random(col3)),random()<.5?loader.rect(wisW/6+200*m+25*m,wisH/1.35+25*m,25*m):loader.ellipse(wisW/6+200*m+25*m,wisH/1.35+25*m,25*m)),loopCount>60&&(loader.stroke(20,220),loader.fill(random(col4)),random()<.5?loader.rect(wisW/6+300*m,wisH/1.35,25*m):loader.ellipse(wisW/6+300*m,wisH/1.35,25*m),loader.fill(random(col4)),random()<.5?loader.rect(wisW/6+300*m+25*m,wisH/1.35,25*m):loader.ellipse(wisW/6+300*m+25*m,wisH/1.35,25*m),loader.fill(random(col4)),random()<.5?loader.rect(wisW/6+300*m,wisH/1.35+25*m,25*m):loader.ellipse(wisW/6+300*m,wisH/1.35+25*m,25*m),loader.fill(random(col4)),random()<.5?loader.rect(wisW/6+300*m+25*m,wisH/1.35+25*m,25*m):loader.ellipse(wisW/6+300*m+25*m,wisH/1.35+25*m,25*m)),loopCount>75&&(loader.stroke(20,220),loader.fill(random(col5)),random()<.5?loader.rect(wisW/6+400*m,wisH/1.35,25*m):loader.ellipse(wisW/6+400*m,wisH/1.35,25*m),loader.fill(random(col5)),random()<.5?loader.rect(wisW/6+400*m+25*m,wisH/1.35,25*m):loader.ellipse(wisW/6+400*m+25*m,wisH/1.35,25*m),loader.fill(random(col5)),random()<.5?loader.rect(wisW/6+400*m,wisH/1.35+25*m,25*m):loader.ellipse(wisW/6+400*m,wisH/1.35+25*m,25*m),loader.fill(random(col5)),random()<.5?loader.rect(wisW/6+400*m+25*m,wisH/1.35+25*m,25*m):loader.ellipse(wisW/6+400*m+25*m,wisH/1.35+25*m,25*m),loader.pop()),showLoader=!0,loopCount>100&&(currentState="drawing")}function drawD(){currentState="stopping"}function stopping(){saveCanvas(`naïf_pixScreen_${$fx.hash}-${$fx.minter}`,"png"),noLoop()}function drawBd(o){if(0==o){push(),noFill();let o=color(random(col2));o.setAlpha(random(65,80)),stroke(o),strokeWeight(bd),rect(bd/2,bd/2,wisW-bd,wisH-bd),pop()}if(2==o){let o,e,t=.5;push(),noFill();let r=color(random(col2));r.setAlpha(random(65,80)),stroke(r);for(let r=0;r<wisW;r+=t)o=random(bd/2,2*bd2),e=random(.25,2.5),strokeWeight(e*m),line(r,0,r,o),line(r,wisH,r,wisH-o);for(let r=0;r<wisH;r+=t)o=random(bd/2,2*bd2),e=random(.5,2.5),strokeWeight(e*m),line(0,r,o,r),line(wisW,r,wisW-o,r);pop()}if(3==o){push(),noFill();let o=color(random(col2));o.setAlpha(random(65,80)),stroke(o),strokeWeight(bd*ar*1.3*m),line(0,bd/2,wisW+bd,bd/2),line(bd/2,0,bd/2,wisH+bd),line(0,wisH-bd/2,wisW,wisH-bd/2),line(wisW-bd/2,0,wisW-bd/2,wisH),fill(random(col2));for(let o=0;o<wisW;o+=random(bd,bd2))square(2*+o,0,random(bd,bd2)),square(2*+o,wisH,-random(bd,bd2));for(let o=0;o<wisH;o+=random(bd,bd2))square(0,2*+o,random(bd,bd2)),square(wisW,2*+o,-random(bd,bd2));pop()}}function morePoint(o,e,t,r,i,d){let n=o,s=0,a=doorContent,l=doorContent.width/n,h=doorContent.height/n;for(a.push(),a.noStroke(),a.fill(20,35),a.rect(0,0,a.width,a.height),a.pop();s<e;){for(let o=0;o<n;o++)for(let e=0;e<n;e++){let s=map(o+e,0,2*n,t,r),m=map(o+e,0,2*n,i,d);for(let t=0;t<s;t++){let t=o*l+random(l),r=e*h+random(h),i=floor(map(t,0,wisW,0,a.width)),d=4*(floor(map(r,0,wisH,0,a.height))*a.width+i),n=[a.pixels[d],a.pixels[d+1],a.pixels[d+2],a.pixels[d+3]];a.push(),a.stroke(n),a.strokeWeight(random(1.5,4)),a.fill(n),a.line(t,r,t+m*random(12,20),r+m*random(12,20)),a.pop()}}s++}}function createDune(o){let e=[],t=duneH*random(.15,.55),r=TWO_PI/wisW;for(let i=0;i<wisW;i+=1)for(let d=0;d<duneH;d+=1){let n=noise(.003*i,.005*(o+d))*duneH,s=t*sin(r*i);s=t*sin(r*i-phase);let a=createVector(i,o+d+n+s);a.duneY=o,e.push(a)}return phase+=.2,e}function createCloud(o){let e=[];for(let t=0;t<width;t+=7)for(let r=0;r<cloudHeight;r+=7){let i=noise(.035*t,.015*(o+r))*cloudHeight,d=createVector(t,o+r+i);d.cloudY=o,e.push(d)}return e}function drawPoint(){if(globalPointSize<=2*minPointSize)return void noLoop();let o=doorContent.width/pointGridSize,e=doorContent.height/pointGridSize;for(let t=0;t<pointGridSize;t++)for(let r=0;r<pointGridSize;r++){let i=new makeNode(null,{x:t*o+o/2+random(-o/2,o/2),y:r*e+e/2+random(-e/2,e/2)},globalPointSize,100);allNodes.push(i),i.grow()}for(let o=0;o<allNodes.length;o++)allNodes[o].display();pointSizeDecrement=globalPointSize/150,pointSizeDecrement<.01&&(pointSizeDecrement=.001),globalPointSize-=pointSizeDecrement}function makeNode(o,e,t,r){this.parentNode=o,this.position=e,this.radius=t,this.depth=r,this.id=counter++,this.childrenNodes=[],angleMode(RADIANS),this.grow=function(){let o=.9*this.radius;if(o<.5*minPointSize||this.depth<=-10)return;let e=random(TWO_PI),t=new makeNode(this,{x:this.position.x+1.5*this.radius*cos(e),y:this.position.y+1.5*this.radius*sin(e)},o,this.depth-1),r=!0;for(let o=0;o<allNodes.length;o++)t.intersects(allNodes[o])&&(r=!1);r&&(allNodes.push(t),this.childrenNodes.push(t),t.grow())},this.intersects=function(o){let e=sqrt(sq(this.position.x-o.position.x)+sq(this.position.y-o.position.y));return this.id!=o.id&&e<.005*(this.radius+o.radius)&&!this.childrenNodes.includes(o)&&(!this.parentNode||!this.parentNode.childrenNodes.includes(o))},this.display=function(){let o=floor(map(this.position.x,0,wisW,0,doorContent.width)),e=4*(floor(map(this.position.y,0,wisH,0,doorContent.height))*doorContent.width+o);if(e<0||e>=doorContent.pixels.length-2)return;let t=[doorContent.pixels[e],doorContent.pixels[e+1],doorContent.pixels[e+2],doorContent.pixels[e+3]];if(!t.some(isNaN)){if(0==nodeType){push(),t[3]=15,doorContent.fill(t),t[3]=50,doorContent.stroke(t),doorContent.strokeWeight(.25*m);for(let o=0;o<random(2,5);o++)this.radius=Math.pow(1.165,o+10),doorContent.drawingContext.setLineDash([4*m,3*m,5*m,2*m]),doorContent.circle(this.position.x,this.position.y,this.radius);pop()}1==nodeType&&(push(),t[3]=30,doorContent.fill(t),t[3]=60,doorContent.stroke(t),doorContent.strokeWeight(.35*m),doorContent.ellipse(this.position.x,this.position.y,this.radius,this.radius),pop()),2==nodeType&&(push(),t[3]=25,doorContent.fill(t),t[3]=40,doorContent.stroke(t),doorContent.strokeWeight(.35*m),doorContent.rect(this.position.x-this.radius/2,this.position.y-this.radius/2,this.radius,this.radius),pop()),this.parentNode&&(rndNodLine=random(),push(),rndNodLine<.6?(doorContent.stroke(t),doorContent.drawingContext.setLineDash([1*m,0,1*m]),doorContent.line(this.position.x,this.position.y,this.parentNode.position.x,this.parentNode.position.y)):(doorContent.stroke(t),doorContent.drawingContext.setLineDash([1*m,0,1*m]),doorContent.curve(this.position.x,this.position.y,this.position.x+random(-5,5),this.position.y+random(-5,5),this.parentNode.position.x+random(-5,5),this.parentNode.position.y+random(-5,5),this.parentNode.position.x,this.parentNode.position.y)),pop())}}}function initStratus(){for(let o=0;o<numberOfCircles;o++){let o=random(50,width-50),e=height/random(3,5)+random(-120,80),t=random(5,60);stratusCircles.push({x:o,y:e,r:t})}}function drawStratus(o,e){let t=e,r=[];for(let e=0;e<o.width;e+=t){r[e/t]=[];for(let i=0;i<o.height;i+=t)r[e/t][i/t]=densityAtPoint(e,i)}o.drawingContext.setLineDash([4,2,1,3,5]);for(let e=0;e<r.length-1;e++)for(let i=0;i<r[e].length-1;i++){let d=createVector(e*t,i*t),n=createVector((e+1)*t,i*t),s=createVector((e+1)*t,(i+1)*t),a=createVector(e*t,(i+1)*t),l=.05;drawContour(o,[r[e][i]>l,r[e+1][i]>l,r[e+1][i+1]>l,r[e][i+1]>l],d,n,s,a)}o.push(),o.drawingContext.setLineDash([]),o.pop()}function densityAtPoint(o,e){let t=0;for(let r of stratusCircles){let i=dist(o,e,r.x,r.y);t+=exp(-.02*pow(i-r.r,2))}return t}function drawContour(o,e,t,r,i,d){if(e[0]===e[1]&&e[1]===e[2]&&e[2]===e[3])return;let n=[t,r,i,d];for(let t=0;t<n.length;t++)if(e[t]!==e[(t+1)%4]){let e=n[t],r=n[(t+1)%4],i=createVector((e.x+r.x)/2,(e.y+r.y)/2);o.push(),o.strokeWeight(random(4,10)*m),o.stroke(random(colr22)),o.line(e.x,e.y,i.x,i.y),o.pop()}}function initRise(){let o=int(random(12,18));for(let e=0;e<o;e++){let o=createRise(doorContent,doorContent.height/2+e*riseH/2,e);drawRise(doorContent,o)}}function createRise(o,e,t){let r=[],i=riseH*random(.15,.55),d=TWO_PI/wisW;for(let n=0;n<wisW;n+=1){let s=(wisW/2-n)*perspectiveFactor*t,a=noise(.003*n,.005*e)*riseH,l=i*sin(d*n),h=o.createVector(n,e+a+l+s);r.push(h)}return r}function drawRise(o,e){o.push();for(let t=0;t<8;t++){let r=riseH/8*t,i=map(t,0,7,0,15);o.drawingContext.setLineDash([i,i]),o.noFill(),o.stroke(random(colr12)),o.strokeWeight(random(1.5,3.5)*m),o.beginShape();for(let t of e)o.vertex(t.x,t.y+r);o.endShape()}o.drawingContext.setLineDash([]),o.pop()}function rndBend(o,e,t,r,i){i*=m;let d=(o+t)/2,n=(e+r)/2;d+=random(-i,i),n+=random(-i,i),line(o,e,d,n),line(d,n,t,r)}function rndBendVertex(o,e,t,r,i){i*=m;let d=(o+t)/2+random(-i,i),n=(e+r)/2+random(-i,i);vertex(d,n)}function keyPressed(){"S"!=key&&"s"!=key||saveCanvas(`naïf_pixScreen_${$fx.hash}-${$fx.minter}`,"png")}function keyTyped(){"l"!==key&&"L"!==key||(showLoader=!showLoader)}