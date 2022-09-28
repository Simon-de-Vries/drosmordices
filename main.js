////-------------------------------------------------------------------Import, Font, Render
import Dice from "./Dice.js";
let myFont = loadFont("./Links/Harbour Regular.ttf"); //Harbour-Bold
function render() {
  //Origin: Background 1000x250 Pixel (1:4)
  //125, 500
  translate(125, 500);
  scale(1.0);
  background(131, 3, 266);
}

////-------------------------------------------------------------------Instanzierung
let fourSidedDice = new Dice(4, 0, 0);

////-------------------------------------------------------------------touchStarted
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

  fourSidedDice.display();
}
