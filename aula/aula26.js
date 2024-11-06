const soma = (...valores)=>{
    const somar = val=>{
        let total = 0;
        for(v of val){
            total+=v;
        };
        return total;
    };
    return somar(valores);
};

console.log(soma(4,8,4,7,10,43,12));

valor = [10,50,30,27,94];
console.log(soma(...valor));