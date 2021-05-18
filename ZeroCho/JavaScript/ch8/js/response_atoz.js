const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');

// 

let startTime;
let endTime;
const records = [];

$screen.addEventListener('click', () => {
    if (event.target.classList.contains('waiting')) {
        $screen.classList.replace('waiting', 'ready')
        $screen.textContent = '초록색이 되면 클릭하세요';
        timeoutId = setTimeout(() => {
            startTime = new Date();
            $screen.classList.replace('ready', 'now')
            $screen.textContent = '클릭하세요!';
        }, Math.floor(Math.random() * 1000) + 2000)
    } else if (event.target.classList.contains('ready')) {
        clearTimeout(timeoutId);
        $screen.textContent = '성급하셨읍니다'
        $screen.classList.replace('ready', 'waiting')
    } else if (event.target.classList.contains('now')) {
        endTime = new Date();
        const current = endTime - startTime;
        records.push(current);
        const average = records.reduce((a, b) => a + b) / records.length;
        $result.textContent = `이번 결과는 ${endTime - startTime}ms 평균 ${average}ms입니다`;
        const topFive = records.sort((a, b) => a - b).slice(0, 5);
        topFive.forEach((top, index) => {
            const elem = document.createElement('div');
            elem.innerHTML = `${index + 1}위 ${top}ms`;
            $result.appendChild(elem);
        });

        startTime = null;
        endTime = null;
        $screen.classList.remove('now');
        $screen.classList.add('waiting');
        $screen.textContent = '클릭해서 시작하세요';
    }
})