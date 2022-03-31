let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const  calculatorScreen = document.querySelector('.calculator-screen');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal');
const clearBtn = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');
const percent = document.querySelector('.percentage');

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

updateScreen(currentNumber);

numbers.forEach((number) =>{
    number.addEventListener("click",(event)=>{
        // console.log(event.target.value);
        updateScreen(event.target.value);
    })
})
const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number;
    }
    else {
        currentNumber += number;
    }
}
numbers.forEach ((number) => {
    number.addEventListener("click", (event) =>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})

operators.forEach((operator) =>{
    operator.addEventListener("click",(event)=>{
        inputOperator(event.target.value);
    })
})
const inputOperator = (operator) => {
    if (calculationOperator === ''){
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
}

equals.addEventListener('click',() =>{
    calculate();
    updateScreen(currentNumber);
})
const calculate = () => {
    let result = '';
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = ''
}

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})
const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

decimal.addEventListener('click', (event) =>{
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})
const inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return;
    }
    currentNumber += dot;
}

percent.addEventListener('click',(event) =>{
    inputPercent(event.target.value);
    updateScreen(currentNumber);
})
const inputPercent = (percentage) => {
    if(currentNumber.includes('%')){
        console.log('persen');
        return;
    }
    currentNumber /= 100;
}
