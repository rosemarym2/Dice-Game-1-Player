const placeholder = document.getElementById("placeholder");
const roll = document.getElementById("diceRoll");
const die1 = document.getElementById("die1");
const die2 = document.getElementById("die2");
const die3 = document.getElementById("die3");
const die4 = document.getElementById("die4");
const die5 = document.getElementById("die5");
const die6 = document.getElementById("die6");

let button = document.getElementById("button");
let startBtn = document.getElementById("start-agn-btn");
let score = document.getElementById("score");
let randomNum = document.getElementById("number");
let counter = 0;

const imgs = [
    "./Dice-Images/dice-1.svg",
    "./Dice-Images/dice-2.svg",
    "./Dice-Images/dice-3.svg",
    "./Dice-Images/dice-4.svg",
    "./Dice-Images/dice-5.svg",
    "./Dice-Images/dice-6.svg",
    "./Dice-Images/winner.gif",
];


button.addEventListener("click", () =>{
    let randomNum = Math.floor(Math.random()*6) +1;
    if (randomNum ===1){
        roll.src =`${imgs[0]}`;
        counter = 0;
        score.innerText = `Oh no, you lost! Total score: ${counter}`;
        document.getElementById("number").innerHTML= `Dice Roll: ${randomNum}`;
        button.style.visibility = "hidden";
    } else if (randomNum ===2){
        roll.src =`${imgs[1]}`;
        counter += 2;
        score.innerText = `Total score: ${counter}`;
        document.getElementById("number").innerHTML= `Dice Roll: ${randomNum}`;
    } else if (randomNum ===3){
        roll.src =`${imgs[2]}`;
        counter += 3;
        score.innerText = `Total score: ${counter}`;
        document.getElementById("number").innerHTML= `Dice Roll: ${randomNum}`;
    } else if (randomNum ===4){
        roll.src =`${imgs[3]}`;
        counter += 4;
        score.innerText = `Total score: ${counter}`;
        document.getElementById("number").innerHTML= `Dice Roll: ${randomNum}`;
    } else if (randomNum ===5){
        roll.src =`${imgs[4]}`;
        counter += 5;
        score.innerText = `Total score: ${counter}`;
        document.getElementById("number").innerHTML= `Dice Roll: ${randomNum}`;
    } else if (randomNum ===6){
        roll.src =`${imgs[5]}`;
        counter += 6;
        score.innerText = `Total score: ${counter}`;
        document.getElementById("number").innerHTML= `Dice Roll: ${randomNum}`;
    }
    console.log(randomNum);
    if (counter >= 20) {
        score.innerText =`You Won! Total score: ${counter}`;
        roll.src =`${imgs[6]}`;
        button.style.visibility = "hidden";
    }
});

startBtn.onclick = () => {
    counter = 0;
    score.innerText = `Total score: 0`;
    button.style.visibility = "visible";
    document.getElementById("number").innerHTML= `Number`;
};




// document.addEventListener ("click", (event) => {
//     document.getElementById("dieFace").style.visibility = "none";
// })

// document.querySelector("button").addEventListener("click", (event)=>{
//     document.getElementById("dieface").style.visibility="none";
// })
