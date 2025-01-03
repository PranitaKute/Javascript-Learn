//Counter Program

const decrease = document.getElementById("decreasebtn");
const reset = document.getElementById("resetbtn");
const increase = document.getElementById("increasebtn");
const countLabel = document.getElementById("countLabel")

let count = 0;

increase.onclick = function(){
    count += 1;
    countLabel.textContent = count;
}

decrease.onclick = function(){
    count -= 1;
    countLabel.textContent = count;
}

reset.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
