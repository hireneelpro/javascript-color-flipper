const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const main = document.querySelector(".section-center");
const btn = document.querySelector(".main-btn");
const text = document.querySelector(".text-color");

btn.addEventListener("click", function () {
  let hexcolor = "#";

  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * 16);
    hexcolor += hex[random];
    console.log(hexcolor);
  }
  main.style.background = hexcolor;
  text.innerText = hexcolor;
});
