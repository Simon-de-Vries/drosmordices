//turquoise
//110, 248, 189
//purple
//131, 3, 166

let myFont = loadFont("./Links/Harbour Regular.ttf"); //Harbour-Bold

export default class Dice {
  constructor(sideAmount, positionX, positionY) {
    this.sideAmount = sideAmount;

    //icon
    this.icon = loadImage("./Links/" + this.sideAmount + ".png");

    //position
    this.positionX = positionX;
    this.positionY = positionY;

    //result
    this.randomresult;
    this.generateRandomNumber;
    this.fadeIn = false;
    this.fadeInVariable = 0;
    this.levelArray = [1, 1, 1, 2, 3, 4, 5];
  }

  display() {
    noStroke();

    //icon
    imageMode(CENTER);
    color(267, 198, 29);
    image(
      this.icon,
      0 + this.positionX,
      -40 + this.positionY,
      this.icon.width / 15,
      this.icon.height / 15
    );

    //Level
    textFont(myFont);
    textSize(20);
    textAlign(CENTER);
    fill(255);
    text(
      "LEVEL " + this.levelArray[this.sideAmount / 2],
      0 + this.positionX,
      0 + this.positionY
    );
    // image(this.icon, 0, 0, this.icon.width / 2, this.icon.height / 2);
  }

  result() {
    noStroke();

    //Result display
    textSize(40);
    fill(110, 248, 189, this.fadeInVariable);
    text(this.randomresult, 0 + this.positionX, 85 + this.positionY);

    //generateRandomNumber once
    if (this.generateRandomNumber === true) {
      this.randomresult = Math.floor(random(1, this.sideAmount + 1));
      this.fadeIn = true;
      this.generateRandomNumber = false;
    }

    //fade in
    if (this.fadeIn === true) {
      this.fadeInVariable += 10;
      if (this.fadeInVariable > 255) {
        this.fadeInVariable = 255;
      }
    }
  }

  button() {
    fill(110, 248, 189);
    rectMode(CENTER);
    rect(0 + this.positionX, 23 + this.positionY, 85, 30, 5);

    textSize(14);
    fill(131, 3, 166);
    text("throw", 0 + this.positionX, 28 + this.positionY);

    // stroke(110, 248, 189);
    // strokeWeight(5);
    // fill(110, 248, 189);
    // line(
    //   -42 + this.positionX,
    //   100 + this.positionY,
    //   42 + this.positionX,
    //   100 + this.positionY
    // );
  }

  buttonClicked() {
    if (
      mouseX > -43 + 125 + this.positionX &&
      mouseX < 43 + 125 + this.positionX &&
      mouseY > -15 + 500 + 23 + this.positionY &&
      mouseY < 15 + 500 + 23 + this.positionY
    ) {
      this.generateRandomNumber = true;

      //reset result-fadeIn
      this.fadeIn = true;
      this.fadeInVariable = 0;
    }
  }
}
