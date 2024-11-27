console.log("colocar o * na function")
function* cores(){
    yield 'vermelho';
    yield 'verde';
    yield 'azul';
};

const itc = cores();
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
console.log("");

function* perguntas(){
    const nome = yield 'qual seu nome?';
    const esporte = yield 'qual seu esporte favorito?';
    return "seu nome é " + nome + ", seu esporte é " + esporte;
};

const itp = perguntas();
console.log(itp.next().value);
console.log(itp.next('mychael').value);
console.log(itp.next('fut').value);
console.log("");

function* contador(){
    let i = 0;
    while(true){
        yield i++;
        if(i>9){
            break;
        };
    };
};

const itcont = contador();
for(let c of itcont){
    console.log(c);
};