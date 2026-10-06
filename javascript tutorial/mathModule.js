function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

export default function vip() {
    console.log("I am Vip");
}

export { sum as doSum, sub as doSub, div as doDiv, mul as doMul };