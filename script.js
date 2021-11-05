const placeholder = document.getElementById("placeholder");
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
        die1.innerHTML+= `<img class= "die1" src="${imgs[0]}"`;
        counter = 0;
        score.innerText = `You lost! Total score: ${counter}`;
        die1.style.visibility = "visible";
        placeholder.style.visibility = "hidden";
    } else if (randomNum ===2){
        imgs.innerHTML+= `<img class= "die2" src="${imgs[1]}"`;
        counter += 2;
        score.innerText = `Total score: ${counter}`;
        die2.style.visibility = "visible";
        placeholder.style.visibility = "hidden";
    } else if (randomNum ===3){
        document.getElementById("die3").src= "/Dice Images/dice-3.svg";
        counter += 3;
        score.innerText = `Total score: ${counter}`;
        die3.style.visibility = "visible";
        placeholder.style.visibility = "hidden";
    } else if (randomNum ===4){
        document.getElementById("die4").src= "/Dice Images/dice-4.svg";
        counter += 4;
        score.innerText = `Total score: ${counter}`;
        die4.style.visibility = "visible";
        placeholder.style.visibility = "hidden";
    } else if (randomNum ===5){
        document.getElementById("die5").src= "/Dice Images/dice-5.svg";
        counter += 5;
        score.innerText = `Total score: ${counter}`;
        die5.style.visibility = "visible";
        placeholder.style.visibility = "hidden";
    } else if (randomNum ===6){
        document.getElementById("die6").src= "/Dice Images/dice-6.svg";
        counter += 6;
        score.innerText = `Total score: ${counter}`;
        die6.style.visibility = "visible";
        placeholder.style.visibility = "hidden";
    }
    console.log(randomNum);
    if (counter >= 21) {
        score.innerText =`You Won! Total score: ${counter}`;
    
    }
});

startBtn.onclick = () => {
    counter = 0;
    score.innerText = `Total score: 0`;
};




// document.addEventListener ("click", (event) => {
//     document.getElementById("dieFace").style.visibility = "none";
// })

// document.querySelector("button").addEventListener("click", (event)=>{
//     document.getElementById("dieface").style.visibility="none";
// })
