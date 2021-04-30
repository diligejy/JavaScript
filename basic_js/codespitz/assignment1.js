const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// sum = 0
// for (i = 0; i < arr.length; i ++){
//     sum += arr[i]
// }

// console.log(sum)

// 내 목표
// const _sum = v => v > 1 ? v + _sum(v - 1) : 1;의 형태로 만들어보기

// const _sum = i => i > 0 ? arr[i] + _sum( i - 1) : arr[0];
// console.log(_sum(9))

// 일반 재귀는 StackOverFlow나기 좋다 그럼 어떻게 해야할까?
//  return 위치를 인수인계 해주고 Parameter를 추가하고 TCO재귀를 해야 한다.
//  저번에 배웠던 코드는 다음과 같다.
// const _sum = (v, acc=0) => v > 1 ? _sum(v - 1, acc + v) : acc + 1;

// const _sum = (i, acc = 0) => i > 0 ? _sum(i - 1, acc + arr[i]) : acc + arr[0];
// console.log(_sum(9))

const v = 9; 
let acc = 0;
for (let i = v; i > 0; i--) acc += arr[i];
acc += arr[0]
console.log("acc", acc)