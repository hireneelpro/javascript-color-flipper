const colors = ["green", "red", "rgba(133,122,200)", "#f15025","blue","yellow","purple","grey"];
const main = document.querySelector('.section-center');
const btn = document.querySelector('.main-btn');
const text = document.querySelector('.text-color');
console.log(text)

btn.addEventListener('click', function () {
    let random = Math.floor( Math.random()*8)
    main.style.background = colors[random]
    text.innerText= colors[random]
})