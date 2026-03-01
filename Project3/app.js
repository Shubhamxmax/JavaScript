let totalexpense=0;
let budgetleft=0;
let budget=0;

const budgetInput = document.querySelector("#budget");
const addBudgetBtn = document.querySelector("#adding");
const showbudget = document.querySelector("#show-budget");
const expensename = document.querySelector("#expensename");
const amount = document.querySelector("#amount");
const addexpense = document.querySelector("#addexpense");
const showexpense = document.querySelector("#show-expense");
const showbudgetleft=document.querySelector("#left");
const table=document.querySelector(".table");
const scrobble=document.querySelector(".scrobble");
const reset=document.querySelector("#reset");


addBudgetBtn.addEventListener("click", () => {

    if (budgetInput.value !== "") {
        budget=parseInt(budgetInput.value);
        budgetInput.disabled = true;
        addBudgetBtn.disabled = true;
        showbudget1(budgetInput.value);
    } else {
        alert("Please enter a budget first!");
    }

});

const showbudget1=(value)=>{
    showbudget.innerText=value;
}

addexpense.addEventListener("click",()=>{
        
        if(budgetInput.value!="" && expensename.value!=="" && amount.value!==""){   if(totalexpense+parseInt(amount.value)>parseInt(budgetInput.value)){
               return;
              }
            totalexpense=totalexpense+parseInt(amount.value);
            budgetleft=parseInt(budgetInput.value)-totalexpense;
            showbudgetleft.innerText=budgetleft;
            showexpense.innerText=totalexpense;
            showhistory();
            removeItem();
            resetexpense();}
            else{
                disablexpense1();
            }
        })


const disablexpense1=()=>{
   

}

const resetexpense=()=>{
    expensename.value="";
    amount.value=""; 
}

const showhistory = () => {

    let row = document.createElement("div");

    row.innerHTML = `
        <div class="newexp">${expensename.value}</div>
        <div class="newexp">${amount.value}</div>
        <div class="exp"><button class="remove">Remove</button></div>
    `;
    row.classList.add("newtable")//add a new class to row 
    scrobble.appendChild(row);
}

const removeItem=()=>{
    const removes = document.querySelectorAll(".remove");
    removes.forEach((remove1)=>{
            
            remove1.addEventListener("click",()=>{
            const row=remove1.parentElement.parentElement;
            const amount=row.children[1].innerText;
            console.log(amount);
            totalexpense=totalexpense-parseInt(amount);
            budgetleft=budgetleft+parseInt(amount);
            showbudgetleft.innerText=budgetleft;
            showexpense.innerText=totalexpense;
            console.log(totalexpense);
            remove1.parentElement.parentElement.remove();
           })
    })
    }

reset.addEventListener("click",()=>{
    // budgetInput.disabled = fasle;
    addBudgetBtn.disabled = false;
    budgetInput.disabled = false;
    showbudget.innerText="";
    budgetInput.value="";
    amount.value="";
    showexpense.innerText="";
    showbudgetleft.innerText="";
    removescrobbleitem();
})

const removescrobbleitem=()=>{
    const scrobbleitems=document.querySelectorAll(".newtable"); 
    scrobbleitems.forEach((item)=>{
        item.remove();
    })
}

// const showhistory = () => {

//     let row = document.createElement("div");
//     row.classList.add("newtable");

//     // Expense Name
//     let nameDiv = document.createElement("div");
//     nameDiv.classList.add("exp");

//     let nameBold = document.createElement("b");
//     nameBold.innerText = expensename.value;

//     nameDiv.appendChild(nameBold);

//     // Amount
//     let amountDiv = document.createElement("div");
//     amountDiv.classList.add("exp");

//     let amountBold = document.createElement("b");
//     amountBold.innerText = amount.value;

//     amountDiv.appendChild(amountBold);

//     // Remove Button
//     let actionDiv = document.createElement("div");
//     actionDiv.classList.add("exp");

//     let removeBtn = document.createElement("button");
//     removeBtn.classList.add("remove");
//     removeBtn.innerText = "Remove";

//     actionDiv.appendChild(removeBtn);

//     // Append everything to row
//     row.appendChild(nameDiv);
//     row.appendChild(amountDiv);
//     row.appendChild(actionDiv);

//     // Add row after table
//     table.after(row);

// };

// removeBtn.addEventListener("click", () => {
//     row.remove();
// });

