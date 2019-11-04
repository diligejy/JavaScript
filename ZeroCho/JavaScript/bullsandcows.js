var badi = document.body;

var cand;
var arr;

var cand = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr = [];

for (var i = 0; i < 4; i += 1){
    var sel = cand.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    arr.push(sel);
}

console.log(arr);

var rs = document.createElement('h1');
badi.append(rs);
var pom = document.createElement('form');
document.body.append(pom);
var ip = document.createElement('input');
ip.type = 'number';
ip.maxLength = 4;
pom.append(ip);
var bt = document.createElement('button');
bt.textContent = '입력!';
pom.append(bt);

var err = 0;


pom.addEventListener('submit', function 콜백함수(e) {
    e.preventDefault();
    var as = ip.value;
    if (as == arr.join('')) {
     // 답이 맞으면
        rs.textContent = '홈런';
        ip.value = '';
        ip.focus();
        cand = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        arr = [];

        for ( var i = 0; i < 4; i += 1){
            var sel = cand.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
            arr.push(sel);
        }
        err = 0;
    } else {
        // 답이 틀리면
        var as_arr = as.split('');
        var strike = 0;
        var ball = 0;
        err += 1;
        if (err > 10){
            rs.textContent = '10번 넘게 틀려서 실패! 답은' + arr.join(',') + '였습니다!';
            ip.value = '';
            ip.focus();
            cand = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            arr = [];
    
            for ( var i = 0; i < 4; i += 1){
                var sel = cand.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
                arr.push(sel);
            }
            err = 0;
        } else{
            for (var i = 0; i < 3 ; i += 1){
                if(Number(as_arr[i]) === arr[i]){
                    strike += 1;
                } else if(arr.indexOf(Number(as_arr[i])) > -1){
                    ball += 1;
                }
            }
            rs.textContent = strike + '스트라이크' + ball + '볼입니다.' + '남은 횟수는 : ' + (10-err)+ '회입니다';
            ip.value = '';
            ip.focus();
        }
    }
});
