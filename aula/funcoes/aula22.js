function soma(p1){
    console.log(p1);
};

soma("mychael");
soma(500);
soma(2.5);

function total(n1=0,n2=0){
    console.log(n1+n2);
};

total(10);

function para(num1, num2){
    return num1+num2;
};

console.log(para(10,9));

function resSoma(nu1,nu2){
    let res;
    res = nu1+nu2;
    return res;
};

let resultado = resSoma(5,8);
console.log(resultado);

let valor = 0;
console.log(valor);

function add(v){
    return valor+v;
};

valor = add(10);
console.log(valor);

valor = add(5);
console.log(valor);