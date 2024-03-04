let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetButton");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let gameContainer = document.querySelector("#gameContainer");

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    gameContainer.classList.remove("hide-game")
};
boxes.forEach ((box)=>{
    gameContainer.classList.remove("hide-game")
    box.addEventListener("click", ()=>{
        if (turnO) {
            box.innerText="0";
            box.style.color = "red";
            turnO = false;
        }
        else{
            turnO = true;
            box.style.color = "green";
            box.innerText="X";
        }
        box.disabled=true;
        checkWinner();
    });
});

const disabledBoxes = ()=>{
    for (let box of boxes){
        box.disabled= true;
    }
   
}
const enableBoxes = ()=>{
    for (let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
   
}
const showWinner = (winner)=>{
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
    gameContainer.classList.add("hide-game");
}
const checkWinner = ()=>{
    for(let pattern of winPatterns){
       
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner");
                showWinner(pos1Val);
            }
        }
    }
}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);