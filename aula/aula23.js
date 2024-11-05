function soma(...valores){
    let total = 0
    for(let i=0; i<valores.length; i++){
        total+=valores[i];
    }
    return total;
};

console.log(soma(10,20,15,5,47));

function som(...val){
    let tot = 0;
    for(let i of val){
        tot+=i;
    };
    return tot;
};

console.log(som(5,9,3,7,1));