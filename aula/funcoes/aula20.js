function nome(cont){
    console.log("posicao:" + cont);
};

for (let i=0; i<10; i++){
    nome(i);
};

function mudarText(){
    let d1 = document.getElementById("d1");
    let d2 = document.getElementById("d2");
    let d3 = document.getElementById("d3");
    d1.innerHTML = "d1";
    d2.innerHTML = "d2";
    d3.innerHTML = "d3";
};