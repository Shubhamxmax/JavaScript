let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg")
let userscorep=document.querySelector("#userscore")
let compscorep=document.querySelector("#compscore")




choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        console.log("Choice was clicked",userchoice);
        playgame(userchoice);
    })
})



const genCompChoice= ()=>{
    const options=["rock","paper","scissor"];
    //rock,paper,scissor
    const rand=Math.floor(Math.random()*3); //The  Math.random() will give values in decimal ranges from 0 to 1 but when mutliplied by 3 it will give value to 0 to 2 but in decimal so then we use Math.floor() to remove decimal values
    return options[rand];

}




const drawGame=()=>{
    console.log("Game was Draw");
}




const playgame=(userchoice)=>{
    console.log("user choice =",userchoice);
    //Generate computer choice->modular
    const compchoice=genCompChoice();
    console.log("Computer choice =",compchoice);

    if(userchoice==compchoice){
        //Draw Game
        drawGame();
        msg.innerText="Game Draw. Play Again!"
        msg.style.backgroundColor= "#081b31"; 
    }
    else{
        let userwin;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice=="paper"){
            //rock,scissors
            userwin=compchoice==="scissor"?false:true;
        }
        else{
            //rock,paper
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }


};




const showwinner = (userwin,userchoice,compchoice) => {
    if (userwin) {
        userscore++;
        userscorep.innerText=userscore;
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor="green";
    } else {
        compscore++;
        compscorep.innerText=compscore;
        msg.innerText=`You Loose! ${compchoice} beats your ${userchoice}`  
         msg.style.backgroundColor="red"; 
    }
};
