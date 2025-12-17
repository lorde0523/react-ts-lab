const items = [
    { id: 1, text: '사과', price: 1000 },
    { id: 2, text: '바나나', price: 2500 },
    { id: 3, text: '수박', price: 15000 },
    { id: 4, text: '딸기', price: 3000 },
];

// 1. .map() : 새로운 배열 생성 (React 랜더링 시 필수)
const names = items.map(item => item.text);
console.log(`상품 이름 목록: ${names}`); // 출력: [ '사과', '바나나', '수박', '딸기' ]

// 2. filter() : 조건을 만족하는 요소만 추출
const affordableItems = items.filter(item => item.price <= 3000);
console.log('3000원 이하 상품:' ,affordableItems);
// 출력: [ { id: 1, text: '사과', price: 1000 }, { id: 2, text: '바나나', price: 2500 }, { id: 4, text: '딸기', price: 3000 } ]

// 3. .reduce() : 배열을 하나의 값으로 축약 (총합 계산)
const totalPrice = items.reduce((accumulator, item) => {
    return accumulator + item.price;
} , 0); // 초기값 0
console.log(`총 가격: ${totalPrice}`); // 출력: 21500