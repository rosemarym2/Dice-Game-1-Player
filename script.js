const placeholder = document.getElementById("placeholder");
const div = document.querySelectorAll("div");

let button = document.getElementById("button");
let score = document.getElementById("score");
let randomNum = document.getElementById("number");
let counter = 0;

const imgs = [
    "/Dice Images/dice-1.svg",
    "/Dice Images/dice-2.svg",
    "/Dice Images/dice-3.svg",
    "/Dice Images/dice-4.svg",
    "/Dice Images/dice-5.svg",
    "/Dice Images/dice-6.svg",
];


button.addEventListener("click", () =>{
    let randomNum = Math.floor(Math.random()*6) +1;
    if (randomNum ===1){
        document.getElementById("die1").src= "/Dice Images/dice-1.svg";
        counter = 0;
        score.innerText = `Total score: ${counter}`;
    } else if (randomNum ===2){
        document.getElementById("die2").src= "/Dice Images/dice-2.svg";
        counter += 2;
        score.innerText = `Total score: ${counter}`;
    } else if (randomNum ===3){
        document.getElementById("die3").src= "/Dice Images/dice-3.svg";
        counter += 3;
        score.innerText = `Total score: ${counter}`;
    } else if (randomNum ===4){
        document.getElementById("die4").src= "/Dice Images/dice-4.svg";
        counter += 4;
        score.innerText = `Total score: ${counter}`;
    } else if (randomNum ===5){
        document.getElementById("die5").src= "/Dice Images/dice-5.svg";
        counter += 5;
        score.innerText = `Total score: ${counter}`;
    } else if (randomNum ===6){
        document.getElementById("die6").src= "/Dice Images/dice-6.svg";
        counter += 6;
        score.innerText = `Total score: ${counter}`;
    }
    console.log(randomNum);
    if (counter >= 21) {
        score.innerText =`You Won! Total score: ${counter}`;
    }
});

// button.onclick = function ()={

// }




// document.addEventListener ("click", (event) => {
//     document.getElementById("dieFace").style.visibility = "none";
// })

// document.querySelector("button").addEventListener("click", (event)=>{
//     document.getElementById("dieface").style.visibility="none";
// })
