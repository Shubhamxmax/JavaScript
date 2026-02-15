// console.log("hii Friends")
// window.alert("Hello")
console.dir(window.document.body.childNodes[0])
console.log(window.document.body)

// Accessing elements of HTML element through JavaScript

let var1=document.getElementById("para") //accessing element through id
console.log(var1) // showing content as it is in html
console.dir(var1) // showing content as object variable


let headings = document.getElementsByClassName("heading") //accessing element through class name in html
console.dir(headings)
console.log(headings)

let buttons=document.getElementsByTagName("button") //accessing element through tag name
console.dir(buttons)
console.log(buttons)

//  Accessing Element through QuerySelector
//  Query Selector is easy to use than getElement functions

let first=document.querySelector("p") // tag
console.dir(first)

let all=document.querySelectorAll("p") 
console.dir(all)


let first1=document.querySelector(".heading") // return first class named as heading
console.dir(first1) 

let all1=document.querySelectorAll(".heading") // return all classes named as heading
console.dir(all1) 

let para=document.querySelector("#para") // para
console.dir(para)


// Accesssing children of any element


let c=document.querySelector(".heading").tagName // it just return the tag name of first element of heading class
console.dir(c)


// if (el.tagName.toLowerCase() === "body") {
//   console.log("This is body");
// }


let a=document.querySelector("div").children // return all children inside first div tag of my html code as a collection 
console.dir(a)

let b=document.querySelector("body").children[1]
console.dir(b.innerText) // Accessing second div of html and then extracting all text stuff only from that
console.dir(b.innerHTML) // Accessing second div of html and then extracting all text stuff and html tags also from that div

console.log(b.innerText="abcd") // this will remove all the text inside the accessed div by me and then put abcd inside that at run time and not in my html code


console.log(b.innerHTML="<i>Fruits</i>") // this will remove all tags inside div and put i tag only at run time and not in my html code

// Practice Question

// q1>
let f=document.querySelector("h2")
f.innerText=f.innerText+" from Apna College"

//q2
let divs=document.querySelectorAll("div")

let idx=1
for(div of divs){
    div.innerText= `New Unique Value ${idx}`
    idx++;
}

// or
// divs[0].innerText="Shubham"
// divs[1].innerText="Kumar"
// divs[2].innerText="Bhagat"
// hiiii