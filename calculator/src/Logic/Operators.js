import Big from 'big.js';

export default function Operators(numberOne, numberTwo, operator) {
    const one = Big(numberOne || "0");
    const two = Big(numberTwo || (operator === "/" || operator === "X" ? "1" : "0"));

    if (operator === "+") return one.plus(two).toString();
    if (operator === "-") return one.minus(two).toString();
    if (operator === "X") return one.times(two).toString();
    if (operator === "/") return one.div(two).toString();
}