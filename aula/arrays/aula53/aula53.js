const values = [4, 6, 3, 9, 10, 4, 6];

const operationsMenu = [

    (value) => {
        let accumulate = 0;

        for (value of values) {
            console.log(accumulate);
            accumulate += value;
        };

        return accumulate;
    },

    (value) => {
        let accumulate = 1;

        for (value of values) {
            console.log(accumulate);
            accumulate *= value;
        };

        return accumulate;
    },

    (value) => {
        let accumulate = 100;

        for (value of values) {
            console.log(accumulate);
            accumulate += value;
        };

        return accumulate;
    }
];

console.log(`${operationsMenu[0](values)} \n`);
console.log(`${operationsMenu[1](values)} \n`);
console.log(`${operationsMenu[2](values)} \n`);


// EXERCICIO


const form = document.querySelector("#form-container");
const firstInput = document.querySelector("#first-input");
const secundInput = document.querySelector("#secund-input");
const result = document.querySelector("#result");

const button = {
    plus : document.querySelector("#plus"),
    subtraction : document.querySelector("#subtraction"),
    multiplication : document.querySelector("#multiplication"),
    division : document.querySelector("#division")
};

const {plus, subtraction, multiplication, division} = button;

form.addEventListener("submit", (event) => {

});