const colors = ["red", "green", "blue", "yellow", "violet", "purple", "pink", "brown", "#ff33cc", "rgb(255, 102, 35)"];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    // toma un numero random del 0 al 6
    const randomNumber = getRandomNumber();
    
    // console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
