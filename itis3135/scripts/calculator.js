let firstNum = 0.0;
let secondNum = 0.0;
let operation = '';
window.onload = function ()
{
    document.getElementById("b7").onclick = displayNum;
    document.getElementById("b8").onclick = displayNum;
    document.getElementById("b9").onclick = displayNum;
    document.getElementById("b1").onclick = displayNum;
    document.getElementById("b2").onclick = displayNum;
    document.getElementById("b3").onclick = displayNum;
    document.getElementById("b4").onclick = displayNum;
    document.getElementById("b5").onclick = displayNum;
    document.getElementById("b6").onclick = displayNum;
    document.getElementById("b0").onclick = displayNum;
    document.getElementById("decimal").onclick = displayNum;
    document.getElementById("clear").onclick = clearButton;
    document.getElementById('calc').onclick = compute;
    document.getElementById('add').onclick = operate;
    document.getElementById("sub").onclick = operate;
    document.getElementById('divide').onclick = operate;
    document.getElementById('multiply').onclick = operate;
}
function displayNum(){
    document.getElementById('result').value += this.value;
    document.querySelectorAll('input.operation').forEach(function (item){
        item.disabled=false;
    });
    document.getElementById('decimal').disabled = false;
}
function clear(){
    document.getElementById('result').value = '';
}
function clearButton(){
    clear();
    document.querySelectorAll('input.operation').forEach(function (item){
        item.disabled=true;
    });
    document.getElementById('decimal').disabled = true;
    document.getElementById('calc').disabled = true;
}
function compute(){
    secondNum = parseFloat(document.getElementById('result').value)
    if(operation === '+'){
        document.getElementById("result").value = (firstNum + secondNum).toString();
    }
    else if(operation === '-'){
        document.getElementById("result").value = (firstNum - secondNum).toString();
    }
    else if(operation === '/'){
        if (secondNum != 0){
            document.getElementById("result").value = (firstNum / secondNum).toString();
        }
        else{
            document.getElementById("result").value = "Error! Divide by 0";
        }
    }
    else if(operation === '*'){
        document.getElementById("result").value = (firstNum * secondNum).toString();
    }
}
function operate(){
    if (document.getElementById("result").value != ''){
        firstNum = parseFloat(document.getElementById('result').value);
    }
    operation = this.value;
    document.getElementById('calc').disabled = false;
    clear();
}
function negation(){
    document.getElementById('result').value = '-' + document.getElementById('result').value;
}