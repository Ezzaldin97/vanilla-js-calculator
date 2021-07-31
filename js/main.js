const numBtns = document.querySelectorAll(".nums");
const resetBtn = document.getElementById("reset");
const signBtns = document.querySelectorAll(".signs");
const equalBtn = document.getElementById("eq");
const delBtn = document.getElementById("del");
const dotBtn = document.getElementById("dot");
const displayOutput = document.getElementById("display");

var num = undefined;
var operator = undefined;

numBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    displayOutput.innerHTML += e.target.value;
  });
});

dotBtn.addEventListener("click", (e) => {
  displayOutput.innerHTML += e.target.value;
});

signBtns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        operator = e.target.value;
        num = Number(displayOutput.innerHTML);
        displayOutput.innerHTML = "";
    });
});

resetBtn.addEventListener("click", (e)=>{
    num = undefined;
    operator = undefined;
    displayOutput.innerHTML = "";
});

delBtn.addEventListener("click", (e)=>{
    displayOutput.innerHTML = displayOutput.innerHTML.replace(displayOutput.innerHTML[displayOutput.innerHTML.length-1], "");
});

const stringLength = str => {
    if ((str.length>7)&&(str.includes("."))) {
        str = str.slice(0,7);
    }
    return str;
} 

equalBtn.addEventListener("click", (e)=>{
    if (num != undefined) {
        var res = 0;
        if (operator === "+") {
            res = num + Number(displayOutput.innerHTML);
            displayOutput.innerHTML = stringLength(String(res));
        }else if (operator === "-") {
            res = num - Number(displayOutput.innerHTML);
            displayOutput.innerHTML = stringLength(String(res));  
        }else if (operator === "*") {
            res = num * Number(displayOutput.innerHTML);
            displayOutput.innerHTML = stringLength(String(res));  
        }else if (operator === "/") {
            res = num / Number(displayOutput.innerHTML);
            displayOutput.innerHTML = stringLength(String(res));  
        }else{
            num = displayOutput.innerHTML;
        }
        num = res;
    }else{
        alert("Enter Number First!");
    }
});
