const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = [];
for (let n = 1; n < 10; n++) {
    numbers.push(n);
}

answer = [];
for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * numbers.length);
    answer.push(numbers[index]);
    numbers.splice(index, 1);
}

const tries = [];
function validInput(input) {
    if (!(Number.isInteger(Number(input)))) {
        return alert('숫자를 입력하세요');
    } else if (input.length !== 4) {
        return alert('4자리 숫자를 입력하세요');
    } else if (new Set(input).size !== 4) {
        return alert('중복되지 않게 해주세요');
    } else if (tries.includes(input)) {
        return alert('이미 시도한 값입니다');
    }
    return true;
}

function defeated() {
    const message = document.createTextNode(`실패! 정답은 ${answer.join('')}`)
    $logs.append(message);
}

let out = 0;
$form.addEventListener('submit', (event) => {
    event.preventDefault(); // 기본 동작 막기
    const value = $input.value;
    $input.value = '';
    // validation 코드
    if (!(validInput(value))) {
        return;
    }

    if (answer.join('') === value) {
        $logs.textContent = '홈런!';
        return;
    }
    if (tries.length >= 9) {
        defeated();
        return;
    }
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < answer.length; i++) {
        const index = value.indexOf(answer[i])
        if (index > -1 && index === i) {
            strike += 1;
        }
        if (index > -1 && index !== i) {
            ball += 1;
        }
    }
    if (strike === 0 && ball === 0) {
        out++;
        // document.getElementById('logs').innerHTML(`${value} : ${out} <span style="color:red">아웃</span>`);
        const elem = document.createElement('p');
        elem.innerHTML = `${value} : ${out} <span style="color:red">아웃</span>`
        $logs.appendChild(elem);
    } else {
        $logs.append(`${value} : ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
    }

    if (out >= 3) {
        defeated();
        return;
    }
    tries.push(value);
});

console.log(answer);