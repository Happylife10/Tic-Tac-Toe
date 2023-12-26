let boxes = document.querySelectorAll(".box");
let turnO = true;
let newGamebtn=document.querySelector(".new-game");
let msgBtn=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let resetBtn=document.querySelector(".reset-btn");
// let player1=true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];


for(let i=0; i<boxes.length; i++)
{    
    
    boxes[i].addEventListener("click", () =>{
          
        
        if(turnO)
        {   
            
            boxes[i].innerText="O";
            turnO=false;
        }
        else
        {   
            
            boxes[i].innerText="X";
            turnO=true;
        }
        boxes[i].disabled=true;
        checkWinner(turnO);
        
    });
    
}

const newGame = () =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

const enableBoxes = () =>{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes = () =>{
    for(box of boxes)
    {
        box.disabled=true;
    }
}

const showWinner = (winner) =>{
    msgBtn.innerText=`Congratulations! winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = (turn) =>{
     for(let pattern of winPatterns)
     {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!="")
        {
            if(pos1Val==pos2Val && pos2Val==pos3Val)
            {
                console.log("winner is ", pos1Val);
                showWinner(pos1Val);
            }
        }
     }
}
newGamebtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", newGame);
