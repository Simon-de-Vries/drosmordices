// window.preload = preload;

// let fourSidedDice
// function preload() {
// fourSidedDice.icon = loadImage("./Links/" + this.sideAmount + ".svg");
// }

function setup() {
  //1000 x 250 px
  let myCanvas = createCanvas(250, 1000);
  myCanvas.parent("drosmordices");

  frameRate(30);
}

// deaktiviert Pfeiltasten
window.addEventListener("keydown", function (event) {
  if ([32].indexOf(event.keyCode) > -1) {
    event.preventDefault();
  }
});

new p5();
let width = windowWidth;
let height = windowHeight;
