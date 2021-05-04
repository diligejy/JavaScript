/*
    4자릿수 숫자야구
    1. 10번의 기회
    2. 1에서 9까지 중복되지 않는 숫자로 구성
*/

const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const p1 = Number(prompt('4자리 숫자를 입력하세요'));
let p2 = Number(prompt('4자리 숫자를 입력하세요'));

function user_input_validation(inputNum) {
    if (typeof inputNum === 'number') {
        if (inputNum.toString().length === 4) {
            let inputNumArr = Array.from(String(inputNum));
            let inputNumArrToSet = [...new Set(inputNumArr)];
            if (inputNumArr.length !== inputNumArrToSet.length) {
                alert('중복되지 않도록 입력해주세요');
            }
        } else {
            alert('4자리 숫자를 제대로 입력하세요');
        }
    } else {
        alert('숫자를 입력하세요')
    }
}
user_input_validation(p1);

for (let i = 0; i < 10; i++) {
    p2 = Number(prompt('4자리 숫자를 입력하세요'));
    user_input_validation(p2);

    let strike = 0;
    let ball = 0;

    p1Arr = Array.from(String(p1));
    p2Arr = Array.from(String(p2));

    for (let i = 0; i < p1Arr.length; i++) {
        for (let j = 0; j < p2Arr.length; j++) {
            if (p1Arr[i] === p2Arr[j] && i === j) {
                strike += 1;
            } else if (p1Arr[i] === p2Arr[j]) {
                ball += 1;
            }
        }
    }
    if (strike === 4) {
        alert('끝났읍니다');
        break;
    } else if (strike === 0 && ball === 0) {
        alert('아웃입니다')
    } else {
        alert(`${ball}볼 ${strike}스트라이크입니다`);
    }
}
