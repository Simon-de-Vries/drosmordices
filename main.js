import Dice from "./Dice";

//Harbour-Bold
let myFont = loadFont("./Links/Harbour Regular.ttf");

function render() {
  //Origin: Background 1000x250 Pixel (1:4)
  //500, 125
  translate(500, 125);
  scale(1.0);
  background(110, 248, 189);
}

////-------------------------------------------------------------------mouseClicked

window.touchStarted = touchStarted;

function touchStarted() {
  // if (mouseX > 240 && mouseX < 360 && mouseY > 631 && mouseY < 692) {
  //   screen = "planetStart";
  // }
}

////-------------------------------------------------------------------draw

window.draw = draw;

function draw() {
  render();
}
