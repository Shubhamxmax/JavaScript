console.log("one")
console.log("two")
console.log("three")

setTimeout(()=>{
    console.log("hello");
},3000);//timeout(this will execute at last)

console.log("four")
console.log("five")

// CallBack Function

//Example 1

function calculator(a,b,sumCallback){
sumCallback(a,b);
}
function sum(a,b){
    console.log(a+b)
}
calculator(1,2,sum);//dont pass function using paranthesis()

//Example2

const hello=()=>{
    console.log("Hello Shubham")
}

setTimeout(hello,2000)


// CallBack Hell

function getdata(dataid){//3sec
    setTimeout(()=>{ console.log("Data",dataid)},3000)
   
}//our database

getdata(1);
getdata(2);
getdata(3);//all three comes in same time(after 3sec) but we want them to come in a interval of 3sec for eac data

//data1
//data2
//data3
