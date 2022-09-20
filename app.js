const main = document.querySelector(".main");

for (let i = 0; i < 100; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  main.appendChild(square);
}
