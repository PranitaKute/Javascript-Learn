//Random Number Generator
/*
const min = 50;
const max = 100;
let randomNum = Math.floor(Math.random() * (max - min)) + min;  //gives random number between 0 - 6
console.log(randomNum);     */


 
const button = document.getElementById("myBtn").onclick = function(){
    const label1 = document.getElementById("myLabel1").textContent = Math.floor(Math.random() * 6) + 1;
    const label2 = document.getElementById("myLabel2").textContent = Math.floor(Math.random() * 6) + 1;
    const label3 = document.getElementById("myLabel3").textContent = Math.floor(Math.random() * 6) + 1;
}