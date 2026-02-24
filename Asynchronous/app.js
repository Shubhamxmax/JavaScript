// console.log("one")
// console.log("two")
// console.log("three")

// setTimeout(()=>{
//     console.log("hello");
// },3000);//timeout(this will execute at last)

// console.log("four")
// console.log("five")

// // CallBack Function

// //Example 1

// function calculator(a,b,sumCallback){
// sumCallback(a,b);
// }
// function sum(a,b){
//     console.log(a+b)
// }
// calculator(1,2,sum);//dont pass function using paranthesis()

// //Example2

// const hello=()=>{
//     console.log("Hello Shubham")
// }

// setTimeout(hello,2000)




// function getdata(dataid){//3sec
//     setTimeout(()=>{ console.log("Data",dataid)},3000)
   
// }//our database

// getdata(1);
// getdata(2);
// getdata(3);//all three comes in same time(after 3sec) but we want them to come in a interval of 3sec for eac data


// CallbackHell<<Promises<<Async-Await

function getData(dataid,getNextData){

   
   return new Promise((resolve,reject)=>{setTimeout(()=>{
    console.log("data info :",dataid)
    resolve("data")
    if(getNextData){
        getNextData();
    }
   },2000)})}

// Callback Hell


// getData(1,()=>{console.log("getting data2 .......");
//                getData(2,()=>{
//                               console.log("getting data3.......");
//                               getData(3,()=>{
//                                            console.log("getting data4.......");
//                                            getData(4);});});}
//     )

// Calling using promisechain
//getNextData(undefine not a problem)

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//     console.log(res);
//     getData(3).then((res)=>{
//     console.log(res);
//     getData(4).then((res)=>{
//     console.log(res);})
//  })
//     })

// })

// more simpler version of promise chain

// console.log("getting data5 .......");
// getData(5).then((res)=>{
//     console.log(res);
//     console.log("getting data6 .......");
//      return getData(6)
// }).then((res)=>{
//     console.log(res);
//     console.log("getting data7 .......");
//     return getData(7)
// }).then((res)=>{
//     console.log(res);
// })

// Async-Await(the best way)

//    async function getAllData(){
//     console.log("getting data1 .......");
//     await getData(1);
//     console.log("getting data2 .......");
//     await getData(2);
//     console.log("getting data3 .......");
//     await getData(3);
//     console.log("getting data4 .......");
//     await getData(4);
// }

// Async-Await(the best way using IIFE function)
  (async()=>{
    console.log("getting data1 .......");
    await getData(1);
    console.log("getting data2 .......");
    await getData(2);
    console.log("getting data3 .......");
    await getData(3);
    console.log("getting data4 .......");
    await getData(4);})();


//Promise

// let promise=new Promise((resolve,reject)=>{
//     console.log("I am a promise")
//     //resolve("123")
//     reject("There is some error")
// })


// how promises are working behind the scene

// function getData(dataid,getNextData){
//    return new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     console.log("data info :",dataid)
//     // resolve("Solved")
//     reject("Error")
//     if(getNextData){
//         getNextData();
//     }
//    },4000);
//    });
// }

// let promise=getData(123);

// promise.then((res)=>{
//     console.log("Data fullfilled",ress);
// });//for resole("resolved")
// promise.catch((errr)=>{
//     console.log("Networks Error",err);
// });//for reject("error")


//Promise Chaining

// function asyncFunc1(){
//     return new Promise((resolve,result)=>{
//             setTimeout(()=>{
//                 console.log("data1")
//                 resolve("success")
//             },4000)

//     });
// }// This work is genrally done by APIs

// function asyncFunc2(){
//     return new Promise((resolve,result)=>{
//             setTimeout(()=>{
//                 console.log("data2")
//                 resolve("success")
//             },4000)

//     });
// }// This work is genrally done by APIs

// console.log("Fetching Data1.......")
// // let p1=asyncFunc1();
// asyncFunc1().then((res)=>{
//     console.log(res)
//     console.log("Fetching Data2.......")
//     // let p2=asyncFunc2();
//     asyncFunc2().then((res)=>{
//     console.log(res)
// })
// })

// console.log("Fetching Data2.......")
// let p2=asyncFunc2();
// p2.then((res)=>{
//     console.log(res)
// })


//Async Await

//  function api(data){
//       return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("Weather Data",data);
//         resolve(200);},2000)
//       });
// }

// async function getWeatherData(){
//     await api(1);
//     await api(2);
// }


