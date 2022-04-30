//Obtaining all the elements we need in order to add functionality to the calculator
const calcBody = document.querySelector('#calc--body');
const result = document.querySelector('.calc--result');
const cancel = document.querySelector('.calc--cancel');
const percentage = document.querySelector('.calc--percentage');
const opposite = document.querySelector('.calc--opposite');
const divide = document.querySelector('.calc--divide');
const seven = document.querySelector('.calc--7');
const eight = document.querySelector('.calc--8');
const nine = document.querySelector('.calc--9');
const multiply = document.querySelector('.calc--multiply');
const four = document.querySelector('.calc--4');
const five = document.querySelector('.calc--5');
const six = document.querySelector('.calc--6');
const minus = document.querySelector('.calc--minus');
const one = document.querySelector('.calc--1');
const two = document.querySelector('.calc--2');
const three = document.querySelector('.calc--3');
const plus = document.querySelector('.calc--plus');
const comma = document.querySelector('.calc--comma');
const zero = document.querySelector('.calc--0');
const lessthan = document.querySelector('.calc--lessthan');
const equals = document.querySelector('.calc--equals');
const operation = document.querySelector('#operation');
const currentNumber = document.querySelector('#currentNumber');

//Using temporary variables to store numbers and what operation is going to be used when calculating
let numArray = [];
let numOperations = [];
let operationToBeUsed = '';
let previousNumber = 0;

function calculator() {

    // -- BOF NUMBER EVENT LISTENERS --
    nine.addEventListener('click', () => {
        numArray.push(9);
        currentNumber.innerText = numArray.join('');
    })
    
    eight.addEventListener('click', () => {
        numArray.push(8);
        currentNumber.innerText = numArray.join('');
    })

    seven.addEventListener('click', () => {
        numArray.push(7);
        currentNumber.innerText = numArray.join('');
    })

    six.addEventListener('click', () => {
        numArray.push(6);
        currentNumber.innerText = numArray.join('');
    })

    five.addEventListener('click', () => {
        numArray.push(5);
        currentNumber.innerText = numArray.join('');
    })

    four.addEventListener('click', () => {
        numArray.push(4);
        currentNumber.innerText = numArray.join('');
    })

    three.addEventListener('click', () => {
        numArray.push(3);
        currentNumber.innerText = numArray.join('');
    })

    two.addEventListener('click', () => {
        numArray.push(2);
        currentNumber.innerText = numArray.join('');
    })

    one.addEventListener('click', () => {
        numArray.push(1);
        currentNumber.innerText = numArray.join('');
    })

    zero.addEventListener('click', () => {
        numArray.push(0);
        currentNumber.innerText = numArray.join('');
    })

    comma.addEventListener('click', () => {
        numArray.push('.');
        currentNumber.innerText = numArray.join('');
    })

    lessthan.addEventListener('click', () => {
        numArray.push('<');
        currentNumber.innerText = numArray.join('');
    })

    // -- EOF NUMBER EVENT LISTENERS --

    // -- BOF OPERATOR EVENT LISTENERS --

    cancel.addEventListener('click', () => {
        numArray = [];
        currentNumber.innerText = '';
        numOperations = [];
        operationToBeUsed = '';
        hideOperation();
    })

    percentage.addEventListener('click', () => {
        //Functionality to be added
    })

    opposite.addEventListener('click', () => {
        if (+currentNumber.innerText > 0) {
            const negative = Math.abs(+currentNumber.innerText) * -1;
            currentNumber.innerText = negative;
            numArray = [];
            numArray.push(negative)
        } else if (+currentNumber.innerText < 0) {
            const positive = Math.abs(+currentNumber.innerText) * 1;
            currentNumber.innerText = positive;
            numArray = [];
            numArray.push(positive)
        }
    })

    divide.addEventListener('click', () => {
        if (!operationToBeUsed) {
            operationToBeUsed = 'DIVIDE';
            operation.innerText = `${+currentNumber.innerText} /`;
            operation.classList.remove('hidden');
            if (numOperations.length == 0) {
                numOperations.push(+currentNumber.innerText);
                previousNumber = +numArray.join('');
                numArray = [];
            } else if (numOperations.length > 0) {
                let currentNum = numOperations[0] / +currentNumber.innerText;
                numOperations = [];
                numOperations.push(currentNum);
            }
        } else if (operationToBeUsed && operationToBeUsed !== 'DIVIDE') {
            operationToBeUsed = 'DIVIDE';
            operation.innerText = `${previousNumber} /`;
        }
    })

    multiply.addEventListener('click', () => {
        if (!operationToBeUsed) {
            operationToBeUsed = 'MULTIPLY';
            operation.innerText = `${+currentNumber.innerText} *`;
            operation.classList.remove('hidden');
            if (numOperations.length == 0) {
                numOperations.push(+currentNumber.innerText);
                previousNumber = +numArray.join('');
                numArray = [];
            } else if (numOperations.length > 0) {
                let currentNum = numOperations[0] * +currentNumber.innerText;
                numOperations = [];
                numOperations.push(currentNum);
            }
        } else if (operationToBeUsed && operationToBeUsed !== 'MULTIPLY') {
            operationToBeUsed = 'MULTIPLY';
            operation.innerText = `${previousNumber} *`;
        }
    })

    minus.addEventListener('click', () => {
        if (!operationToBeUsed) {
            operationToBeUsed = 'MINUS';
            operation.innerText = `${+currentNumber.innerText} -`;
            operation.classList.remove('hidden');
            if (numOperations.length == 0) {
                numOperations.push(+currentNumber.innerText);
                previousNumber = +numArray.join('');
                numArray = [];
            } else if (numOperations.length > 0) {
                let currentNum = numOperations[0] - +currentNumber.innerText;
                numOperations = [];
                numOperations.push(currentNum);
            }
        } else if (operationToBeUsed && operationToBeUsed !== 'MINUS') {
            operationToBeUsed = 'MINUS';
            console.log(numArray)
            operation.innerText = `${previousNumber} -`;
        }
    })

    plus.addEventListener('click', () => {
        if (!operationToBeUsed) {
            operationToBeUsed = 'PLUS';
            operation.innerText = `${+currentNumber.innerText} +`;
            operation.classList.remove('hidden');
            if (numOperations.length == 0) {
                numOperations.push(+currentNumber.innerText);
                previousNumber = +numArray.join('');
                numArray = [];
            } else if (numOperations.length > 0) {
                let currentNum = numOperations[0] + +currentNumber.innerText;
                numOperations = [];
                numOperations.push(currentNum);
            }
        // Checks if user has selected an operation different than this and wants to change it to this one
        } else if (operationToBeUsed && operationToBeUsed !== 'PLUS') {
            operationToBeUsed = 'PLUS';
            operation.innerText = `${previousNumber} +`;
        }
    })

    // Shows results of the calculation based on what user wants to do with the numbers.
    equals.addEventListener('click', () => {
        switch (operationToBeUsed) {
            case 'DIVIDE':
                currentNumber.innerText = numOperations[0] / +currentNumber.innerText;
                operation.innerText = `${numOperations[0]} + ${numArray.join('')}`
                resetCalculator();
                break;
            case 'PLUS':
                currentNumber.innerText = numOperations[0] + +currentNumber.innerText;
                operation.innerText = `${numOperations[0]} + ${numArray.join('')}`
                resetCalculator();
                break;
            case 'MINUS':
                currentNumber.innerText = numOperations[0] - +currentNumber.innerText;
                operation.innerText = `${numOperations[0]} - ${numArray.join('')}`
                resetCalculator();
                break;
            case 'MULTIPLY':
                currentNumber.innerText = numOperations[0] * +currentNumber.innerText;
                operation.innerText = `${numOperations[0]} * ${numArray.join('')}`
                resetCalculator();
                break;
            default:
                break;
        }
    })
}

//Used to remove operation mark from the result screen when calculation is complete
function hideOperation() {
    operation.classList.add('hidden');
}

//Reset all temporary variables to prevent possible errors caused by them before starting new calculations
function resetCalculator() {
    numArray = [];
    numOperations = [];
    operationToBeUsed = '';
}

calculator();