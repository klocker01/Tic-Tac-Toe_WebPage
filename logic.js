let next = "crosses";
let nextText = document.querySelector("#next");
function choice(event){
    if (event.target.textContent !== "") return;
    else if (next == "crosses"){
        event.target.textContent = "X";
        event.target.style.color = "red";
        next = "naughts";
        nextText.textContent = "Next: O"
    }
    else {
        event.target.textContent = "O";
        event.target.style.color = "blue";
        next = "crosses";
        nextText.textContent = "Next: X";
    }
    checkWinner();
}
function playAgain(){
    for (let i = 0; i < btnClass.length; i++){
        btnClass[i].textContent = "";
    }  
    next = "crosses";
    nextText.textContent = "Next: X";  
}
//function checkWinner(){}

let btnClass = document.querySelectorAll(".box");
for (let i = 0; i < btnClass.length; i++){
    btnClass[i].addEventListener("click",choice)
}

let playAgainBtn = document.querySelector("#again");
playAgainBtn.addEventListener("click",playAgain);