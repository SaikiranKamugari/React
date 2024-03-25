//Arthemetic Operators//

let x = 25;
let y = 10;
let result1 = x + y;
let result2 = x - y;
let result3 = x * y;
console.log(result1);
console.log(result2);
console.log(result3);

//Assignment Operators//

let a = 9;
a += 7;
console.log(a);

let b = 6;
b *= 2;
let c = 15;
c /= 5;
console.log(b);
console.log(c);

//Comparison Operators//

let p = 15;
let q = 20;
let result = p == q;

console.log(result);

let a1 = 3;
let a2 = 5;
let b1 = 10;
let b2 = 15;
console.log(a1 >= a2);
console.log(b1 <= b2);
console.log(b1 === a1);

//Logical Operators//

let value1 = true;
let value2 = false;

console.log(value1 && value2);
console.log(value1 || value2);
console.log(!value2);

console.log((20 > 35) && (25 > 34));
console.log((15 > 10) || (12 < 44));

//Terinary Operators//

let age = 22;
let message;


if (age >= 18) {
    console.log("you're an adult");
}

else {
    console.log("you're a minor");
}
