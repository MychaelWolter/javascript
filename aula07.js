console.log("e - and - &&");
console.log("ou - or - ||");
console.log("nao - not - !");

console.log("and - setiver F é F, senao é V");
console.log("or - se tiver V é V, sena é F");

let n1,n2,n3,n4;
n1 = 10;
n2 = 5;
n3 = 15;
n4 = 2;

console.log((n1>n2)&&(n3>n4));
console.log((n1>n2)&&(n4>n3));
console.log((n2>n1)&&(n3>n4));
console.log((n2>n1)&&(n4>n3));


console.log((n1>n2)||(n3>n4));
console.log((n1>n2)||(n4>n3));
console.log((n2>n1)||(n3>n4));
console.log((n2>n1)||(n4>n3));

if((n1>n2)&&(n3>n4)){
    console.log("verdadeiro");
}else{
    console.log("falso");
};

if(!(n1>n2)&&(n3>n4)){
    console.log("verdadeiro");
}else{
    console.log("falso");
};

if(!(n2>n1)&&(n3>n4)){
    console.log("verdadeiro");
}else{
    console.log("falso");
};

if((n2>n1)|| !(n3>n4)){
    console.log("verdadeiro");
}else{
    console.log("falso");
};