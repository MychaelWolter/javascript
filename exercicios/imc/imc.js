const calcular = document.getElementById("calcular");

function imc() {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");
    let classificacao = ``;

    const valorImc = (peso / (altura * altura)).toFixed(1);

    if(valorImc < 18.5){
        classificacao = `Abaixo do peso`;
    }else if(valorImc < 25){
        classificacao = `Peso normal`;
    }else if(valorImc < 30){
        classificacao = `Sobrepeso`;
    }else{
        classificacao = `Obesidade`;
    };

    resultado.textContent = `${nome} seu peso é de ${peso}kg e sua altura é de ${altura}m, seu IMC está em ${valorImc} e sua situação é ${classificacao}.`;
};

calcular.addEventListener("click", imc);