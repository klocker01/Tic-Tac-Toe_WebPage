let next = "crosses";
let nextText = document.querySelector("#next");
let game = true;
function choice(event){
    if (game == true){
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
}
function playAgain(){
    for (let i = 0; i < btnClass.length; i++){
        btnClass[i].textContent = "";
    }  
    next = "crosses";
    nextText.textContent = "Next: X"; 
    game = true; 
}
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];
let winner = document.querySelector("#winner");
function checkWinner() {
    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        
        let valA = btnClass[a].textContent;
        let valB = btnClass[b].textContent;
        let valC = btnClass[c].textContent;

        // Check if all 3 match and are not empty
        if (valA !== "" && valA === valB && valA === valC) {
            console.log(`Player ${valA} wins!`);
            winner.textContent = `Winner: ${valA}`
            game = false; 
        }
    }
    return null;
}

let btnClass = document.querySelectorAll(".box");
for (let i = 0; i < btnClass.length; i++){
    btnClass[i].addEventListener("click",choice)
}

let playAgainBtn = document.querySelector("#again");
playAgainBtn.addEventListener("click",playAgain);