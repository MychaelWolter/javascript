function tot(){
    let n1 = 10;
    let n2 = 5;
    let total = n1*n2;
    if(total%2==0){
        return "par";
    }else{
        return "impar";
    };
};

function canal(){
    return "youtube";
};

let num = tot();

console.log(num);
console.log(canal());