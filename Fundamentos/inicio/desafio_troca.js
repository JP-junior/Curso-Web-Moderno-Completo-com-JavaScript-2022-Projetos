let a = 7;
let b = 94;
let c;

// c = a; // c = 7
// a = b;// a = 94
// b = c; // b = 7

[a, b] = [b, a];

console.log(a);
console.log(b);