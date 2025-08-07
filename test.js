// 예: 1000번 문제 (A+B)
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);
console.log(A + B);


// 한 줄 입력
// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

// 여러 줄 입력
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 공백 구분 숫자 입력
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
