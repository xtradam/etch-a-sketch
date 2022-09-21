const main = document.querySelector(".main");
const small = document.querySelector(".small");
const medium = document.querySelector(".medium");
const large = document.querySelector(".large");

for (let i = 0; i < 100; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  square.classList.add("smallSquare");
  main.appendChild(square);
}

for (let i = 0; i < 400; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  square.classList.add("mediumSquare");
  main.appendChild(square);
}

for (let i = 0; i < 1600; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  square.classList.add("largeSquare");
  main.appendChild(square);
}

const smallSquare = document.querySelectorAll(".smallSquare");
const mediumSquare = document.querySelectorAll(".mediumSquare");
const largeSquare = document.querySelectorAll(".largeSquare");

small.addEventListener("click", () => {
  smallSquares();
});

medium.addEventListener("click", () => {
  mediumSquares();
});

large.addEventListener("click", () => {
  largeSquares();
});

function smallSquares() {
  mediumSquare.forEach((square) => {
    square.style.display = "none";
  });
  largeSquare.forEach((square) => {
    square.style.display = "none";
  });
  smallSquare.forEach((square) => {
    square.style.display = "block";
  });
  resetGrid();
}

function mediumSquares() {
  smallSquare.forEach((square) => {
    square.style.display = "none";
  });
  largeSquare.forEach((square) => {
    square.style.display = "none";
  });
  mediumSquare.forEach((square) => {
    square.style.display = "block";
  });
  resetGrid();
}

function largeSquares() {
  smallSquare.forEach((square) => {
    square.style.display = "none";
  });
  mediumSquare.forEach((square) => {
    square.style.display = "none";
  });
  largeSquare.forEach((square) => {
    square.style.display = "block";
  });
  resetGrid();
}

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
  });
});

const reset = document.querySelector(".reset");

reset.addEventListener("click", resetGrid);

function resetGrid() {
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}
