// 1. 객체 구조 분해 할당 (React Props에서 가장 많이 사용)
const student = { id: 101, name:'Mina', major: '컴퓨터 공학' };

// 객체의 속성을 변수로 추출
const { name, major } = student;
console.log(`이름: ${name}, 전공: ${major}`); // 출력: 이름: Mina, 전공: 컴퓨터 공학

// 2. 배열 구조 분해 할당 (React useState에서 사용)
const colors = ['Red', 'Green', 'Blue'];

// 배열의 요소를 순서대로 변수로 추출
const [primary, secondary] = colors;
console.log(`주 색상: ${primary}, 보조 색상: ${secondary}`); // 출력: 주 색상: Red. 보조 색상: Green