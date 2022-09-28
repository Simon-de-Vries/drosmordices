//turquoise
//110, 248, 189
//purple
//131, 3, 166

export default class Dice {
  constructor(sideAmount, positionX, positionY) {
    this.sideAmount = sideAmount;

    //icon
    this.icon = loadImage("./Links/" + this.sideAmount + ".png");

    //position
    this.positionX = positionX;
    this.positionY = positionY;
  }

  display() {
    imageMode(CENTER);
    color(267, 198, 29);
    image(
      this.icon,
      0 + this.positionX,
      -40 + this.positionY,
      this.icon.width / 15,
      this.icon.height / 15
    );

    textFont("Harbour-Bold");
    textSize(20);
    textAlign(CENTER);
    fill(255);
    text("LEVEL 1", 0 + this.positionX, 0 + this.positionY);
    // image(this.icon, 0, 0, this.icon.width / 2, this.icon.height / 2);
  }
}
