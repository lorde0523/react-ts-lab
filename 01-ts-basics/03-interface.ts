interface User {
    id: number,
    name: string,
    email?: string // ?는 선택적 속성 (있어도 되고 없어도 됨)
}

const me: User = {
    id: 1,
    name: "나",
    // email이 없어도 에러가 나지 않음
};

console.log("interface: ", me);