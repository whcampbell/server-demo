var canvas = document.getElementById("can");
var context = canvas.getContext("2d");

var x = 0;
var y = 0;
var xdir = 1;
var ydir = 1;
var fills = ["#FF2222", "#22FF22", "#2222FF"];
var currFill = 1;

window.addEventListener("load", function() {
  context.fillStyle = "#22FF22";
  console.log("starting the bounce");
  bounce();
});

can.onclick = function() {
  console.log("you clicked it");
};

function bounce() {
  updatePosition();
  draw();
  window.requestAnimationFrame(bounce);
}

function updatePosition() {
  if (x >= 520) {
    xdir = -1;
    changeColor();
  }
  if (x <= 0) {
    xdir = 1;
    changeColor();
  }
  if (y >=320) {
    ydir = -1;
    changeColor();
  }
  if (y <= 0) {
    ydir = 1;
    changeColor();
  }

  x += xdir * 1;
  y += ydir * 1;
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(x, y, 80, 80);
}

function changeColor() {
  currFill = (currFill + 1) % 3;
  context.fillStyle = fills[currFill];
}

