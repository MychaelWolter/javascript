let colocacao = 5;

switch(colocacao){
    case 1:
        console.log("1° lugar");
        break;
    case 2:
        console.log("2° lugar");
        break;
    case 3:
        console.log("3° lugar");
        break;
    case 4: case 5: case 6:
        console.log("quase hein");
        break;
    default:
        console.log("nem pra podio tu presta");
        break;
}

console.log("posicao: " + colocacao);