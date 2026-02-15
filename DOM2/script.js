let a=document.querySelector("div")
console.dir(a)

// Accessing Attribute of a tag from html

let value=a.getAttribute("id")
console.log(value)

//Changing Attribute of a html tag

console.log(a.setAttribute("id","box1")) 

// Changing Style of a HTML tag

a.style.backgroundColor="blue"
a.style.fontSize="1rem"
a.style.color="white";
a.style.height="100px"



let para1=document.querySelector("p")
console.dir(para1)
let p=para1.getAttribute("class")
console.log(p)
console.log(para1.setAttribute("class","paragraph")) //changing attribute of tag


//Creating new element or node through js

let newbtn=document.createElement("button"); // create new element
newbtn.innerText="Click Me"
console.log(newbtn)
let par=document.querySelector("p")
par.after(newbtn) // adding button after para(outside)


let newbtn1=document.createElement("button"); // create new element
newbtn1.innerText="Click Me"
console.log(newbtn1)
let diva=document.querySelector("div")
diva.append(newbtn1) // adding button inside div at end


let newheading=document.createElement("h2")
newheading.innerText="Learning DOM"
diva.before(newheading)

//or document.querySelector("body").prepend(heading)

// Removing element

diva.remove(); // removed the div
