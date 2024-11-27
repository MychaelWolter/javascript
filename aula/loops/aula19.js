let n=0;
let max=100;

while(max > n){
    console.log("contagem:" + n);
    if(n>=10){
        break;
    };
    n+=1;
};

console.log("");

let pares=0;

for(let i=0; max>i; i++){
    if(i%2!=0){
        continue;
    };
    pares++;
};

console.log(pares);