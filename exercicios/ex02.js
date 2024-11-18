const diaDaSemana = prompt("Qual é o dia da semana?");
if(diaDaSemana == "Domingo" || diaDaSemana == "Sabado"){
    alert("Bom fim de semana!");
}else{
    alert("Boa semana!");
};

const num = prompt("Digite um numero:");
if(num > 0){
    alert("é positivo");
}else{
    alert("é negativo");
};

const pontuação = parseInt(Math.random() * 200);
if(pontuação >= 100){
    alert("Parabéns, você venceu!");
}else{
    alert("Tente novamente para ganhar.");
};

const saldo = 1500;
alert(`O seu saldo é de R$${saldo}`);

const nome = prompt("Qual seu nome?");
alert(`boas vindas ${nome}`);