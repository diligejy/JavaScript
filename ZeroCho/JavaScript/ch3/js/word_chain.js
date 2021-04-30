// 10진법
const participant_num = parseInt(prompt("몇 명이 참가하나요?"), 10);
const yesOrNo = confirm("맞나요?");
const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");

let word; // 제시어
let newWord; // 새로 입력한 단어

// const onInput = (e) => {
//     console.log('글자 입력', e.target.value);
// }
const onInput = (event) => {
    newWord = event.target.value;
};

$input.addEventListener("input", onInput);

const onClickButton = () => {
    if (!word || word[word.length - 1] === newWord[0]) {
        // 제시어가 비어있는가? || 단어의 마지막 글자가 새로 입력된 단어의 첫 글자와 같은가?
        // 비어 있다.
        word = newWord; // 입력한 단어가 제시어가 된다.
        $word.textContent = word;

        const order = Number($order.textContent);
        if (order + 1 > participant_num) {
            $order.textContent = 1;
        } else {
            $order.textContent = order + 1;
        }

    } else {
        alert("틀렸읍니다.");
    }
    $input.value = "";
    $input.focus();
};

$button.addEventListener("click", onClickButton);
