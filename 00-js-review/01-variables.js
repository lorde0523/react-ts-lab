// 1. const (재할당 불가능)
const PI = 3.141592;
console.log(`원주율 ${PI}`);

// PI = 3.14; // Uncaught TypeError: Assignment to constant variable. (에러 발생)

// 2. let (재할당 가능)
let counter = 10;
counter = counter + 1; // 값 변경 가능
console.log(`카운터 ${counter}`); // 출력: 11

// 3. const로 선언된 객체의 내부 속성은 변경 가능 (참조 자체는 불변)
const user = { name: 'Alice', age: 25 };
user.age = 26; // 객체 내부 속성은 변경 가능
console.log(`사용자 나이: ${user.age}`); // 출력: 26

// user = { name: 'Bob', age: 30 }; // 에러 발생 (객체 자체를 재할당 시도)