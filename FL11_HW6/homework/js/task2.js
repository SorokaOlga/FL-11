// Your code goes here
let firstSide = prompt('enter 1 val');
let secondSide = prompt('enter 2 val');
let thirdSide = prompt('enter 3 val');

if(firstSide <= 0 || secondSide <= 0 || thirdSide <= 0) {
    console.log('Triangle doesn’t exist');
} else if (firstSide === secondSide && secondSide === thirdSide && thirdSide === firstSide) {
console.log('Eequivalent triangle');
} else if (firstSide === secondSide || secondSide === thirdSide || thirdSide === firstSide) {
    console.log('Isosceles triangle!!!');
} else {
    console.log('Normal triangle');
}