let inputSize = document.querySelector("input");
let color = "black";
let eraserBtn = document.getElementById("eraserBtn");
let greyBtn = document.getElementById("greyBtn");
let blackBtn = document.getElementById("blackBtn");
let randColorBtn = document.getElementById("randColorBtn");
let resetBtn = document.getElementById("resetBtn");
let click = true;
let colorMode = document.querySelector("div.mode");
let errMsg = document.querySelector(".error-text");
let divContainer = document.querySelector(".square-container");

blackBtn.addEventListener("click", () => {
  changeColor("black");
});
greyBtn.addEventListener("click", () => {
  changeColor("grey");
});
eraserBtn.addEventListener("click", () => {
  changeColor("white");
});
randColorBtn.addEventListener("click", () => {
  changeColor("random");
});
resetBtn.addEventListener("click", resetFn);

function resetFn() {
  let divContainer = document.querySelector(".square-container");

  let existingSqr = divContainer.querySelectorAll("div"); //remove the existing squares in the DivContainer variable
  console.log(existingSqr);
  existingSqr.forEach((squares) => {
    squares.style.backgroundColor = "white";
  });
}
function createGrid(size) {
  let divContainer = document.querySelector(".square-container");

  let existingSqr = divContainer.querySelectorAll("div"); //remove the existing squares in the DivContainer variable

  existingSqr.forEach((squares) => {
    squares.remove();
  });

  divContainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
  divContainer.style.gridTemplateRows = `repeat(${size},1fr)`;

  let totalGrid = size * size;
  for (i = 0; i < totalGrid; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    divContainer.append(square);
  }
}

createGrid(16);

function changeSize(input) {
  if (input >= 2 && input <= 64) {
    createGrid(input);
  } else {
    errMsg.textContent = "Input must be between 2 to 64";
  }
}
inputSize.addEventListener("change", function (e) {
  changeSize(e.target.value);
});

function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360 + 1},100%,50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

divContainer.addEventListener("click", () => {
  click = !click;
  if (click) {
    colorMode.textContent = "Mode: Coloring";
  } else {
    colorMode.textContent = "Mode: Not Coloring";
  }
});
