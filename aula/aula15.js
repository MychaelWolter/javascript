console.log("opçoes de controle de repetição:");
console.log("i = i+1");
console.log("i++");
console.log("i+=1");
console.log("");

for(let i=0; i<10; i+=2){
    console.log(i);
};
console.log("");

for(let cont=0; cont<=10; cont= cont+1){
    console.log("4x"+cont+"="+4*cont);
};
console.log("");

for(let c=0; c<=50; c++){
    if(c%2==0){
        console.log("par:"+c);
    }else{
        console.log("impar:"+c);
    };
};