const numero = [1, 2, 3, 4, 5];
console.log(numero);

numero.push(6);
console.log("\n" + numero);
console.log("push manda pro final");

numero.pop();
console.log("\n" + numero);
console.log("pop apaga o ultimo");

numero.shift();
console.log("\n" + numero);
console.log("apaga o primeiro");

numero.unshift(1);
console.log("\n" + numero);
console.log("adiciona em primeiro");

console.log("\n" + numero.length);
console.log("numero de elementos do arrays");