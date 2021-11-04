const randomNum = document.getElementById("number");
const score = document.getElementById("score");
const button = document.getElementById("button");
const div = document.getElementById("dieface");
const div = document.querySelectorAll("div");

document.addEventListener ("click", (event) => {
    document.getElementById("dieFace").style.visibility = "none";
})

document.querySelector("button").addEventListener("click", (event)=>{
    document.getElementById("dieface").style.visibility="none";
})


// button.addEventListener("click", () =>{
//     let randomNum = Math.floor(Math.random()*6) +1;
//     console.log(randomNum);
// });