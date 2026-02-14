let marks=[33,67,89,90,76]
marks.push(8)

console.log(marks)
console.log(marks.length)

let heroes=['ironman','thor','spiderman']
console.log(heroes)
console.log(heroes.length)


for(i=0;i<heroes.length;i++)
    console.log(heroes[i])

for(let  item of heroes)
    console.log(item.toUpperCase())

let arr=[89,98,98,67,54]
let sum=0;

for(let i=0;i<arr.length;i++)
    sum=sum+arr[i];

let res=`Average of array length ${arr.length} is ${sum/arr.length}`;
console.log(res)


let items=[250,645,300,900,50]
for(let i=0;i<items.length;i++)
    items[i]=items[i]-(0.1*items[i]);
console.log("Offer Prices are ",items)

let veggies=["tomato","potato","bringjal"]

let marvel=['thor','ironman','spiderman']
let dc=['superman','batman']
let heroes_1=marvel.concat(dc);
console.log(heroes_1);
let b=marvel.shift()
marvel.unshift("krish")

let arr4=[1,2,3,4,5,6,7]
arr4.splice(1,3,9,9,9)



/*PRACTICE QUESTION*/

let companies1=["bloomberg","Microsoft","uber","Google","IBM","Netflix"]
console.log(companies1.shift())
console.log(companies1.splice(1,1,"Ola"))
console.log(companies1.push("Amazon"))
