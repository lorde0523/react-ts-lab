function add(a: number, b: number): number {
    return a + b;
}

const greet = (name: string): void => {
    console.log(`Hello, ${name}`);
}

console.log(add(10, 20));
greet("User");