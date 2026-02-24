// CallbackHell<<Promises<<Async-Await

function getData(dataid,getNextData){

   
   return new Promise((resolve,reject)=>{setTimeout(()=>{
    console.log("data info :",dataid)
    resolve("data")
    if(getNextData){
        getNextData();
    }
   },2000)})}

// 1.Callback Hell

// getData(1,()=>{console.log("getting data2 .......");
//                getData(2,()=>{
//                               console.log("getting data3.......");
//                               getData(3,()=>{
//                               console.log("getting data4.......");
//                               getData(4);});});})


// 2.Calling using PromiseChain
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

// 3.Async-Await(the best way)

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