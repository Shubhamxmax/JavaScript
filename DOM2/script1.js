let newbtn=document.createElement("button")

newbtn.innerText="Click Me!";
newbtn.style.backgroundColor="red";
newbtn.style.color="white";

document.querySelector("body").prepend(newbtn)

//q2

let para2=document.querySelector("p")
// let para1=para2.getAttribute("class")
// console.log(para2.setAttribute("class","newclass")) This will remove previous class
console.log(para2.classList)
para2.classList.add("newclass") // this method will not remove previous class but add the newclass with that at the end


//Removing class from element
para2.classList.remove("newclass")