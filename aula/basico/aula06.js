let n1 = 1;
let n2 = "1";

console.log(n1 == n2);
console.log(n1 === n2);

let v1 = {nome: "mychael"};
let v2 = {nome: "mychael"};

console.log(v1 == v2);
console.log(v1 === v2);

let nm = prompt("qual teu nome?");
console.log(nm);

if(navigator.userAgent.match(/iPhone/i)){
    console.log("iPhone");
}else{
    console.log("nao e iPhone");
};