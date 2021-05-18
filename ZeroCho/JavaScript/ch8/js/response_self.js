const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');

let startTime;
let endTime;
const records = [];
$screen.addEventListener('click', () => {
    if (event.target.classList.contains('waiting')) {
        $screen.classList.remove('waiting');
        $screen.classList.add('ready');
        $screen.textContent = '초록색이 되면 클릭하세요';
        // 랜덤 타이머 작동
        timeoutId = setTimeout(() => {
            startTime = new Date();
            $screen.classList.remove('ready');
            $screen.classList.add('now');
            $screen.textContent = '클릭하세요!';
            // 시간재기
        }, Math.floor((Math.random() * 1000) + 2000));
    } else if ($screen.classList.contains('ready')) {
        clearTimeout(timeoutId);
        $screen.classList.remove('ready');
        $screen.classList.add('waiting');
        $screen.textContent = '성급하셨어요';
    } else if (event.target.classList.contains('now')) {
        // 끝 시간 재기
        // 시간 차이 저장하기
        endTime = new Date();
        const current = endTime - startTime;
        debugger;
        records.push(current);
        const average = records.reduce((a, c) => a + c) / records.length;
        $result.textContent = `현재 ${current}ms, 평균 : ${average}ms`;
        const topFive = records.sort((a, b) => a - b).slice(0, 5);
        topFive.forEach((top, index) => {
            const elem = document.createElement('div');
            elem.innerHTML = `${index + 1}등 ${top}ms`;
            $result.appendChild(elem)
        })
        startTime = null;
        endTime = null;
        $screen.classList.remove('now');
        $screen.classList.add('waiting');
        $screen.textContent = '클릭해서 시작하세요';
    }
});