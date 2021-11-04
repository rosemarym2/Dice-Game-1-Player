const dieFace = document.getElementById("dieface");
const div = document.querySelectorAll("div");

let button = document.getElementById("button");
let score = document.getElementById("score");
let randomNum = document.getElementById("number");

const imgs = [
    "/Dice Images/dice-1.svg",
    "/Dice Images/dice-2.svg",
    "/Dice Images/dice-3.svg",
    "/Dice Images/dice-4.svg",
    "/Dice Images/dice-5.svg",
    "/Dice Images/dice-6.svg",
];
// button.onclick = function ()={

// }




// document.addEventListener ("click", (event) => {
//     document.getElementById("dieFace").style.visibility = "none";
// })

// document.querySelector("button").addEventListener("click", (event)=>{
//     document.getElementById("dieface").style.visibility="none";
// })


button.addEventListener("click", () =>{
    let randomNum = Math.floor(Math.random()*6) +1;
    if (randomNum ===1){
        document.getElementById("die1").src=`${imgs[0]}`
    }
    console.log(randomNum);
});