//VAR
var global = "aceita todas as alterações e funciona fora do escopo";
console.log("var: " + global);
console.log("")

var nome = "mychael";
console.log(nome);

if(true) {
    var nome = "wolter";
    console.log(nome);
};

console.log(nome);
console.log("")

//LET
let varLet = "aceita todas as alterações e não funciona fora do escopo";
console.log("let: " + varLet);
console.log("")

let numero = 1;
console.log(numero);

if(true) {
    let numero = 2;
    console.log(numero);
};

console.log(numero);
console.log("")

//CONST
const constante = "não aceita alteração e não funciona fora do escopo (so em propriedades de obj e arrays)";
console.log("const: " + constante);
console.log("")

const num = {
    valor: 10,
    name: "dez"
};
console.log(num);

num.valor = 15;
num.name = "quinze";
console.log(num);
console.log("")