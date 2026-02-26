const promise1=new Promise((resolve,reject)=>{
    //Do an async task
    //DB calls, cyptography,network
    setTimeout(()=>{
        console.log("Async task 1 is completed")
        resolve()
    },1000)
})
promise1.then(()=>{
    console.log("Asyn 1 solved")
})


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task 2")
        resolve()
    },1000)
}).then(()=>{
    console.log("Asyn 2 solved")
})


const promisethree=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve({username:"Chai",email:"chai@example.com"},)
    },1000)


})

promisethree.then((user)=>{//by reso
    console.log(user)
})

const promisefour=new Promise((resolve,reject)=>{

     setTimeout(()=>{

        let error=false;
        if(!error){
            resolve({username:"hitesh chodhary",password:"123"})
        }
        else{
            reject("ERROR Something went wong")
        }

     },1000)

})

 promisefour
 .then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Finally the promise is either resolve or rejected.")
})

const promisefive=new Promise((resolve,reject)=>{

        setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({username:"hitesh chodhary",password:"123"})
        }
        else{
            reject("ERROR Something went wong")
        }
     },1000)


})

async function consumepromisefive(){
    try{
    const response1 = await promisefive;
    }
    catch(error){
    console.log(error)}
}
consumepromisefive()


// async function getusers(){
//    try{ const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data=await response.json();
//     console.log(data)}
//     catch(error){
//         console.log(error)
//     }

// }
// getusers()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();})
    .then((data)=>{
         console.log(data)
    }).catch((error)=>{
        console.log("ERROR 404")
    })