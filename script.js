const btns = document.querySelectorAll("button");

let currentNumber = ''; 
let operator = '';
let total = 0; 

function appendNumber(number) {
  currentNumber += number;
  document.getElementById('result').value = currentNumber;
}

function appendDecimal() {
    // Check if decimal point already exists in the current number
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        document.getElementById('result').value = currentNumber;
    }
}

function appendOperator(op) {
    if(currentNumber !== '') {
        calculate();
    }
    operator = op; 
}

function calculate() {
  const number = Number(currentNumber);
  if (operator === '+') {
    total += number;
  } else if (operator === '-') {
    total -= number;
  } else if (operator === '*') {
    total *= number;
  } else if (operator === '/') {
    total /= number;
  } else {
    total = number; //3
  }

  document.getElementById('result').value = total;
  currentNumber = '';
  operator = '';
}

const clearCalculator = () => {
    currentNumber = '';
    operator = '';
    total = 0;
    document.getElementById("result").value = 0;
}

const btncolor = (event) => event.target.style.backgroundColor = 'orange';
const resetcolor = (event) => event.target.style.backgroundColor = '';

btns.forEach(btns => btns.addEventListener('mousedown', btncolor));
btns.forEach(btns => btns.addEventListener('mouseup', resetcolor));
