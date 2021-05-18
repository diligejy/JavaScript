const twoDimArr = Array(3).fill([])
console.log(twoDimArr);

const { body } = document;
const $table = document.createElement('table');
const $result = document.createElement('div');
const rows = [];
let turn = 'O';

const checkWinner = (target) => {
    const rowIndex = target.parentNode.rowIndex; // tr은 rowIndex가지고 있음
    const cellIndex = target.cellIndex; // td는 cellIndex가지고 있음
    // rows.forEach((row, ri) => {
    //     row.forEach((cell, ci) => {
    //         if (cell === target) {
    //             rowIndex = ri;
    //             cellIndex = ci;
    //         }
    //     });
    // });
    // 세 칸 다 채워졌나?
    let hasWinner = false;
    // 가로줄 검사
    if (
        rows[rowIndex][0].textContent === turn &&
        rows[rowIndex][1].textContent === turn &&
        rows[rowIndex][2].textContent === turn
    ) {
        hasWinner = true;
    }
    // 세로줄 검사
    if (
        rows[0][cellIndex].textContent === turn &&
        rows[1][cellIndex].textContent === turn &&
        rows[2][cellIndex].textContent === turn
    ) {
        hasWinner = true;
    }
    // 대각선 검사
    if (
        rows[0][0].textContent === turn &&
        rows[1][1].textContent === turn &&
        rows[2][2].textContent === turn
    ) {
        hasWinner = true;
    }
    if (
        rows[2][0].textContent === turn &&
        rows[1][1].textContent === turn &&
        rows[0][2].textContent === turn
    ) {
        hasWinner = true;
    }
    return hasWinner
}

const checkWinnerAndDraw = (target) => {
    const hasWinner = checkWinner(target);
    // 승자가 있으면
    if (hasWinner) {
        $result.textContent = `${turn}님이 승리!`;
        $table.removeEventListener('click', callback);
        return;
    }
    // 승자가 없으면
    const draw = rows.flat().every((cell) => cell.textContent)
    if (draw) {
        $result.textContent = '무승부';
        return;
    }
    turn = turn === 'X' ? 'O' : 'X';
}

let clickable = true;
const callback = (event) => {
    // 칸에 글자가 있나?
    if (!clickable) {
        return;
    }
    if (event.target.textContent !== '') {
        console.log('빈칸이 아닙니다.');
        return;
    }
    console.log('빈칸입니다')
    event.target.textContent = turn;
    // 승부 확인
    checkWinnerAndDraw(event.target);
    if (turn === 'X') {
        const emptyCells = rows.flat().filter((v) => !v.textContent);
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        clickable = false;
        setTimeout(() => {
            randomCell.textContent = 'X';
            checkWinnerAndDraw(event.target);
            clickable = true;
        }, 500);
    }
};

for (let i = 0; i < 3; i++) {
    const $tr = document.createElement('tr');
    const cells = [];
    for (let i = 0; i < 3; i++) {
        const $td = document.createElement('td');
        cells.push($td);
        $tr.append($td)
    }
    rows.push(cells);
    $table.append($tr);
};
$table.addEventListener('click', callback);
document.body.append($table);
document.body.append($result);
