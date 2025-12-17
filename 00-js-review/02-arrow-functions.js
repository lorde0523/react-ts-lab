// 1. 기본 화살표 함수 (명시적 return)
const add = (a, b) => {
    return a + b;
}
console.log(`뎃셈 결과: ${add(5, 3)}`); // 출력: 8

// 2. 간결한 화살표 함수 (암시적 return, return 생략)
const multiply = (a, b) => a * b;
console.log(`곱셈 결과: ${multiply(5, 3)}`); // 출력: 15

// 3. 매개변수가 하나일 때 괄호 생략 가능
const greet = name => console.log(`안녕하세요, ${name}님!`);
greet('철수'); // 출력: 안녕하세요, 철수님!