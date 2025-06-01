function getAbsoluteValue(num) {
    if (num < 0){
        return -num; //Flip it to positive
    }
    return num; // Already positive
}

console.log("Absolute value of -45.67:", getAbsoluteValue(-45.67));

function calculatePower(base, exponent) {
    return base ** exponent;
}

console.log(calculatePower(5, 3));

function findSquareRoot(num){
    return Math.sqrt(num);
}

console.log(findSquareRoot(144));

function findMax(num){
    return Math.max(...num);
}

function findMin(num){
    return Math.min(...num);
}

const myNum =[3, 78, -12, 0.5, 27]
console.log(findMax(myNum));
console.log(findMin(myNum));

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 50));

function roundToDecimals(num, decimals) {
    const factor = 10 ** decimals;
    return Math.round(num * factor) / factor;
}

console.log(roundToDecimals(23.67891, 2));