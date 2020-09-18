let blue = 20;
let pink = 70;
let yellow = 120;

function setup() {
  createCanvas(1900, 1200);
  helvetica = loadFont('/proxima.otf');
  textFont(helvetica);
  textSize(150);
  frameRate(60);
}

function draw() {
blendMode(LIGHTEST);
background(256);


colorMode(HSB, 100);
blendMode(MULTIPLY);


fill(50, 85, 100);
text('BAUHAUS', blue, 300);

fill(330, 88, 100);
text('BAUHAUS', pink, 300);

fill(18, 100, 100);
text('BAUHAUS', yellow, 300);

// let time = millis();

if (millis() > 2000){
	if(blue != yellow){
	blue = blue+3;
	pink = pink+2;
	yellow = yellow+1
}
}


}
