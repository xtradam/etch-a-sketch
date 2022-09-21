const main = document.querySelector(".main");

let squareNumber = 100;
for (let i = 0; i < squareNumber; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  main.appendChild(square);
}

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
  });
});
