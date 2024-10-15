let n = 11;
let res = n%2;
if(res == 0){
    console.log("par");
}else{
    console.log("impar");
}

/* 
0 = false, 1 = true 
(operação - verdadeira - falsa ))
*/
res = (!(n%2) ? "par" : "impar");
console.log(res);

let n1 = 10;
let n2 = 5;
let resp = (n1 > n2 ? "verdadeiro" : "falso");
console.log(resp);

let sts = "A";
let resposta = (sts == "A" ? "Ativo" : "Inativo");
console.log(resposta);