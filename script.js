
let billAmountInput = document.querySelector(".billAmount");
let tipArray = document.querySelectorAll(".tip");
let userCnt = document.querySelector(".display");
let increment = document.querySelector(".add");
let decrement = document.querySelector(".subtract");
let tipAmountPP = document.querySelector(".tipAmountValue");
let totalAmount = document.querySelector(".totalAmountValue");
let calculator = document.querySelector(".calculate");
let resetBtn = document.querySelector(".reset");

let billAmount = 0;
let tipPercentage = 0;

makeDefault();


billAmountInput.addEventListener("change", function(){
    billAmount = this.value;
})


tipArray.forEach(function(item){
    item.addEventListener("click", function(){
        tipArray.forEach(function(item){
            item.classList.remove("selectedTip");
        })
        item.classList.add("selectedTip");

        tipPercentage = item.innerText.slice(0, -1);
    })
})


increment.addEventListener("click", function(){
    let cnt = parseInt(userCnt.innerText);
    cnt++;
    userCnt.innerText = cnt;
})


decrement.addEventListener("click", function(){
    let cnt = parseInt(userCnt.innerText);
    cnt--;
    if(cnt < 1) cnt = 1;
    userCnt.innerText = cnt;
})


calculator.addEventListener("click", function(){
    billAmount = parseInt(billAmount);
    tipPercentage = parseInt(tipPercentage);
    let cnt = parseInt(userCnt.innerText);
    let finalAmount = billAmount*tipPercentage/100;
    // finalAmount = finalAmount.toFixed(2);
    totalAmount.innerText = ((finalAmount + billAmount)/cnt).toFixed(2);

    let finalAmountPerPerson = finalAmount/cnt;
    // finalAmountPerPerson = finalAmountPerPerson.toFixed(2);
    tipAmountPP.innerText = finalAmountPerPerson.toFixed(2);
})


resetBtn.addEventListener("click", function(){
    makeDefault();
})


function makeDefault(){
    billAmountInput.value = "0.0";
    userCnt.innerText = 1;
    tipAmountPP.innerText = "0.0";
    totalAmount.innerText = "0.0";
    tipArray.forEach(function(item){
        item.classList.remove("selectedTip");
    })
}

