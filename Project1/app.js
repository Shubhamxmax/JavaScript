let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
console.log(boxes)
let turnO=true;//if turnO==true then playerO if false then playerX

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],

];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){//playerO
           box.innerText="O";
           turnO=false;

        }
        else{// playerX
            box.innerText="X";
            turnO=true;
        }

        box.disabled=true;

        checkwinner();

    })
})

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;}
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";}
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulation Winner is ${winner} `
    msgContainer.classList.remove("hide");
    disableBoxes();

}
 const checkwinner=()=>{   
        for(let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log(`Winner is Player ${pos1}`)
                showwinner(pos1);
            }
        }
    }
 };
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide")

}
newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
