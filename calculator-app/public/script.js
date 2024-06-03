
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = null;
let previousOperand = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      calculate();
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      handleOperator(value);
    } else if (value === 'C') {
      clearDisplay();
    } else {
      handleNumber(value);
    }
  });
});

function handleNumber(value) {
  currentInput += value;
  display.textContent = currentInput;
}

function handleOperator(value) {
  operator = value;
  previousOperand = parseFloat(currentInput);
  currentInput = '';
}

function calculate() {
  const currentOperand = parseFloat(currentInput);
  let result;

  switch (operator) {
    case '+':
      result = previousOperand + currentOperand;
      break;
    case '-':
      result = previousOperand - currentOperand;
      break;
    case '*':
      result = previousOperand * currentOperand;
      break;
    case '/':
      result = previousOperand / currentOperand;
      break;
  }

  display.textContent = result;
  currentInput = result.toString();
  operator = null;
  previousOperand = null;
}

function clearDisplay() {
  currentInput = '';
  operator = null;
  previousOperand = null;
  display.textContent = '0';
}
