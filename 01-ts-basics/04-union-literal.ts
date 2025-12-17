// Union: 여러 타입 중 하나
let direction: "left" | "right" | "up" | "down";
direction = "left";
// direction = "top"; // 에러 발생 (정해진 값 외에는 허용 안함)

type Status = "success" | "error" | "loading";
let currentStatus: Status = "loading";
