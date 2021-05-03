let numOne = '';
let operator = '';
let numTwo = '';

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

const onClickNumber = (event) => {
    if (!operator) {
        numOne += event.target.textContent;
        $result.value += event.target.textContent;
        return;
    }
    if (!numTwo) {
        $result.value = '';
    }
    numTwo += event.target.textContent;
    $result.value += event.target.textContent;
};

document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);

const onClickOperator = (op) => (event) => {
    // -1, -2 처럼 음수를 만들기
    if (!numOne && !numTwo && !operator && (operator === '-')) {
        $operator.value = op;
        numOne = -1;
    }

    if (numTwo) {
        switch (operator) {
            case '+':
                $result.value = parseInt(numOne) + parseInt(numTwo);
                break;
            case '-':
                $result.value = parseInt(numOne) - parseInt(numTwo);
                break;
            case '*':
                $result.value = parseInt(numOne) * parseInt(numTwo);
                break;
            case '/':
                $result.value = parseInt(numOne) / parseInt(numTwo);
                break;
            default:
                break;
        }
        $operator.value = '';
        numOne = $result.value;
        numTwo = '';
    }

    if (numOne) {
        operator = op;
        $operator.value = op;
    } else {
        alert('숫자를 먼저 입력하세요');
    }
}

const onClickCalculate = () => {
    if (numTwo) {
        switch (operator) {
            case '+':
                $result.value = parseInt(numOne) + parseInt(numTwo);
                break;
            case '-':
                $result.value = parseInt(numOne) - parseInt(numTwo);
                break;
            case '*':
                $result.value = parseInt(numOne) * parseInt(numTwo);
                break;
            case '/':
                $result.value = parseInt(numOne) / parseInt(numTwo);
                break;
            default:
                break;
        }
        $operator.value = '';
        numOne = $result.value;
        operator = '';
        numTwo = '';
    } else {
        alert('숫자를 먼저 입력하세요');
    }
}

document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));
document.querySelector('#calculate').addEventListener('click', onClickCalculate);
document.querySelector('#clear').addEventListener('click', () => {
    numOne = '';
    operator = '';
    numTwo = '';
    $operator.value = '';
    $result.value = '';
});


