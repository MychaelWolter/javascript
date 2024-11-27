let num = [10, 20, 30, 40, 50];

for(let i = 0; i < num.length; i++){
    console.log("posição do array " + num[i] + ": " + i);
};

console.log("");
console.log("for in (ex: posição do array)");
for(n in num){
    console.log(num[n] + ": " + n);
};

console.log("");
console.log("for of (ex: conteudo do array)");
for(n of num){
    console.log(num[n] + ": " + n);
};

const objs = document.getElementsByTagName("div");

for(o of objs){
    console.log(o);//conteudo das divs
};

for(o in objs){
    console.log(o);//posicao das divs
};