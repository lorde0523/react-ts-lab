// 비동기 작업을 시뮬레이션하는 Promise 함수
function fetchData(id) {
    return new Promise((resolve, reject) => {
        // 1초 후 실행
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, data: 'API에서 가져온 데이터' });
            } else {
                reject('데이터를 찾을 수 없습니다.');
            }
        }, 1000);
    });
}

// async/await를 사용하여 비동기 코드를 동기 코드처럼 작성
async function processData() {
    console.log('데이터 요청 시작...');

    try {
        // await: Promise가 resolve(성공)될 때까지 기다립니다.
        const data1 = await fetchData(1);
        console.log('성공: ', data1);

        // 두 번째 요청 (실패 시나리오)
        const data2 = await fetchData(2);
        console.log('실패 시도: ', data2); // 이 줄은 실행되지 않음
    } catch (error) {
        // catch: Promise가 reject(실패)되면 여기서 에러를 잡습니다.
        console.log('에러 발생: ', error);
    }

    console.log('데이터 요청 종료.');
}

// 함수 실행
processData();
// 출력 순서 :
// 1. 데이터 요청 시작...
// 2. (1초 후) 성공: { id: 1, data: 'API에서 가져온 데이터' }
// 3. 에러 발생: 데이터를 찾을 수 없습니다.
// 4. 데이터 요청 종료.