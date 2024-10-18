console.log("& = 1 e 1 = 1, senao é 0");

let n1 = 10; 
let n2 = 11;
let res = n1 & n2;
console.log(res);

n1 = 11;
n2 = 14;
res = n1 & n2;
console.log(res);

console.log("| = se tiver 1 é 1, senao é 0");

n1 = 10;
n2 = 14;
res = n1 | n2;
console.log(res);

n1 = 11;
n2 = 14;
res = n1 | n2;
console.log(res);

console.log("^ = se tiver 1 com 0 = 1, senao é 0");

n1 = 10;
n2 = 5;
res = n1 ^ n2;
console.log(res);

n1 = 10;
res = n1 << 1;
console.log(res);

n1 = 80;
res = n1 >> 2;
console.log(res);