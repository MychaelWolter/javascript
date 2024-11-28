function aluno(nome, nota) {
    this.nome = nome;
    this.nota = nota;

    this.dadosAnonimo = function() {
        setTimeout(function() {
            console.log(this.nome);
            console.log(this.nota);
        }, 5000);
    };

    this.dadosArrow = function() {
        setTimeout(() => {
            console.log(this.nome);
            console.log(this.nota);
        }, 5000);
    };
};

const aluno1 = new aluno("Mychael", 10.0);
aluno1.dadosAnonimo();
aluno1.dadosArrow();