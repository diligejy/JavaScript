var body = document.body;
var table = document.createElement('table');
var lines = [];
var rooms = [];
var turn = 'X';

var 비동기콜백 = function (e) {
    console.log(e.target); // 칸
    console.log(e.target.parentNode); // 줄
    console.log(e.target.parentNode.parentNode); // 테이블

    var 몇줄 = lines.indexOf(e.target.parentNode);
    console.log('몇줄', 몇줄);
    var 몇칸 = rooms[몇줄].indexOf(e.target);
    console.log('몇칸', 몇칸);

    if (rooms[몇줄][몇칸].textContent !== '') { //칸이 채워져 있는가
        console.log('빈칸아닙니다');
    } else {
        console.log('빈칸입니다');
        rooms[몇줄][몇칸].textContent = turn;
        // 세 칸 다 채워졌나?
        var full = false;
        // 가로 줄 검사
        if (rooms[몇줄][0].textContent === turn &&
            rooms[몇줄][1].textContent === turn &&
            rooms[몇줄][2].textContent === turn) {
            full = true;
        }
        // 세로줄 검사
        if (rooms[0][몇칸].textContent === turn &&
            rooms[1][몇칸].textContent === turn &&
            rooms[2][몇칸].textContent === turn) {
            full = true;
        }
        // 대각선 검사
        if (몇줄 === 몇칸 || Math.abs(몇줄 - 몇칸) === 2) { // 대각선 필요한 경우
            if (
                rooms[0][0].textContent === turn &&
                rooms[1][1].textContent === turn &&
                rooms[2][2].textContent === turn
            ) {
                full = true;
            }
        }

        // 다찼으면
        if (full === true) {
            console.log(turn + '님이 승리');
        } else {
            // 다 안찼으면
            if (turn === 'X') {
                turn = 'O';
            } else {
                turn = 'X';
            }
        }
    }
};
for (i = 1; i <= 3; i += 1) {
    var line = document.createElement('tr');
    lines.push(line);
    rooms.push([]);
    for (var j = 1; j <= 3; j += 1) {
        var room = document.createElement('td');
        room.addEventListener('click', 비동기콜백);
        rooms[i - 1].push(room);
        line.append(room);
    }
    table.appendChild(line);
}
body.appendChild(table);
console.log(lines, rooms);