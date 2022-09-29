////-------------------------------------------------------------------Import, Font, Render
import Dice from "./Dice.js";

function render() {
  //Origin: Background 1000x250 Pixel (1:4)
  //125, 500
  translate(125, 500);
  scale(1.0);
  background(131, 3, 166);
}

////-------------------------------------------------------------------Instanzierung

let dices = [];
for (let i = 2; i <= 6; i++) {
  let d = new Dice(2 * i, 0, -820 + 200 * i);
  dices.push(d);
}

////-------------------------------------------------------------------touchStarted
window.touchStarted = touchStarted;
function touchStarted() {
  for (let i = 0; i <= 4; i++) {
    dices[i].buttonClicked();
  }
}

////-------------------------------------------------------------------draw
window.draw = draw;
function draw() {
  render();

  for (let i = 0; i <= 4; i++) {
    dices[i].display();
    dices[i].button();
    dices[i].result();
  }
}
