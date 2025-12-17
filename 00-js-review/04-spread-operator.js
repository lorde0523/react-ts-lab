// 1. 객체 병합 및 업데이트 (상태 불변성 유지)
const originalSettings = { theme: 'dark', notifications: true, volume: 50 };

// theme만 'light'로 변경하고 나머지는 유지하여 새로운 객체 생성
const newSettings = { ...originalSettings, theme: 'light' };
console.log(`새로운 테마: ${newSettings.theme}`); // 출력: 새로운 테마: light
console.log(`원래 객체와 다름: ${originalSettings !== newSettings}`); // 출력: 원래 객체와 다름: true

// 2. 배열 병합
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(`합쳐진 배열: ${combined}`); // 출력: [1, 2, 3, 4, 5, 6]

// 3. 배열에 새 요소 추가
const newArr = [0, ...arr1, 4];
console.log(`새로운 배열: ${newArr}`); // 출력: [0, 1, 2, 3, 4]