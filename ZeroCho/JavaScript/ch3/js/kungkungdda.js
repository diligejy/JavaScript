const participant_num = prompt('몇 명이 참가합니까?');
const yesOrNo = confirm("맞나요?");
const $input = document.querySelector('input');
const $button = document.querySelector('button'); 3
const $current_word = document.querySelector('#word');
const $order = document.querySelector('#order');
let word;
let newWord;

if (!yesOrNo) {
    alert('종료합니다');
} else {
    $input.addEventListener('input', onInput);
    $button.addEventListener('click', onClickButton); 3
}

function onInput(e) {
    newWord = e.target.value;
}

function onClickButton() {
    if ((!word & (newWord.length === 3)) || (word[word.length - 1] === newWord[0] & (newWord.length === 3))) { // 첫 제시어가 없으면
        word = newWord; // 입력 단어를 새로 받아준다.
        $current_word.textContent = word; // 제시어를 바꿔주고

        const order = Number($order.textContent);
        if (order + 1 > participant_num) {
            $order.textContent = 1;
        } else {
            $order.textContent = order + 1;
        }
    } else {
        alert('다시입력하세요');
    }
    $input.value = '';
    $input.focus();
}

