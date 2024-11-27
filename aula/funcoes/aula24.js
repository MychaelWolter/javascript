const f = function(...val){
    let tot = 0;
    for(v of val){
        tot+=v;
    };
    return tot;
};

f(5,10);
console.log(f);
console.log("funcao anonima: " + f(10,20));

const funcao = new Function("valor1", "valor2", "valor3", "return valor1+valor2+valor3");

console.log("funcao construtora: " + funcao(50,70,30));