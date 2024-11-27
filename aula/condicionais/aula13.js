let num = 100;

if(num > 10){
    console.log("maior q 10");
    if(num > 50){
        console.log("maior q 50");
    }
}else if (num >5){
    console.log("entre 6 e 10");
}else{
    console.log("menor q 6");
}

let energia = 100;
let clima = "sol";

if(energia > 70 && clima == "sol"){
    console.log("é praia");
}else{
    console.log("é casa");
}

console.log("acabou");