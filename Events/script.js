let btn1=document.querySelector("#btn1")

// btn1.onclick = () =>{
//     console.log("btn1 was clicked")
//     let a = 25;
//     a++;
//     console.log(a)

// };

// btn1.onclick = (e) =>{
    // e is an object of event that hold all the property of that event
//     console.log(e)
//     console.log(e.type);
//     console.log(e.target);
//     console.log("btn1 was clicked")
//     let a = 25;
//     a++;
//     console.log(a)

// };// this will override upper event handler

btn1.addEventListener("click", ()=>{
    console.log('Button  was clicked-handler1')
})

btn1.addEventListener("click", ()=>{
    console.log('Button  was clicked-handler2')
})

const handler3= ()=>{
    console.log('Button  was clicked-handler3')
} // created so that we can remove this later

btn1.addEventListener("click", handler3)

btn1.addEventListener("click", ()=>{
    console.log('Button  was clicked-handler4')
})

btn1.removeEventListener("click",handler3) // removing  an event

let box=document.querySelector("div");
box.onmouseover = (e) =>{
    console.log(e)
    console.log(e.type);
    console.log(e.target);
    console.log("You are inside Div")
};

//practice question

let body=document.querySelector("body")
let modebtn=document.querySelector("#mode");
let currMode="light";
modebtn.addEventListener("click",()=>{
    if(currMode==="dark"){
        currMode="light"
        // document.querySelector("body").style.backgroundColor="white";
        body.classList.add("light")
        body.classList.remove("dark")
    }
    else{
        currMode="dark";
        // document.querySelector("body").style.backgroundColor="black";
        body.classList.add("dark")
        body.classList.remove("light")
    }
    console.log(currMode)
});