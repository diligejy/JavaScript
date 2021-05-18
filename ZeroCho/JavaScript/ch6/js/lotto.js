const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

const candidate = Array(45).fill().map((v, i) => i + 1);
const shuffle = [];

while (candidate.length > 0) {
    const random = Math.floor(Math.random() * candidate.length);
    const spliceArray = candidate.splice(random, 1); // 뽑은 값은 배열에 들어 
    const value = spliceArray[0]; // 배열에 있는 값을 꺼내어
    shuffle.push(value); // shuffle에 넣기
}

function colorize(number, $tag) {
    if (number < 10) {
        $tag.style.backgroundColor = 'red';
        $tag.style.color = 'white';
    } else if (number < 20) {
        $tag.style.backgroundColor = 'orange';
    } else if (number < 30) {
        $tag.style.backgroundColor = 'yellow';
    } else if (number < 40) {
        $tag.style.backgroundColor = 'blue';
        $tag.style.color = 'white';
    } else {
        $tag.style.backgroundColor = 'green';
        $tag.style.color = 'white';
    }
}

console.log(shuffle);
const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonus = shuffle[6];
console.log(winBalls, bonus);
const showBall = (number, $target) => {
    const $ball = document.createElement('div');
    $ball.className = 'ball';
    $ball.textContent = number;
    colorize(number, $ball)
    $target.appendChild($ball);
}

for (let i = 0; i < winBalls.length; i++) {
    setTimeout(() => {
        showBall(winBalls[i], $result)
    }, (i + 1) * 1000);
}

setTimeout(() => {
    showBall(bonus, $bonus)
}, 7000);

