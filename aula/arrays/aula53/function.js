const button = {
    addition : document.querySelector("#addition").id,
    subtraction : document.querySelector("#subtraction").id,
    multiplication : document.querySelector("#multiplication").id,
    division : document.querySelector("#division").id
};

const {addition, subtraction, multiplication, division} = button;

export const calculator = (firstNumber, secundNumber, operator) => {
    let resultValues = 0;

    if (operator === addition) {
        resultValues = firstNumber + secundNumber;
    };

    if (operator === subtraction) {
        resultValues = firstNumber - secundNumber;
    };

    if (operator === multiplication) {
        resultValues = firstNumber * secundNumber;
    };

    if (operator === division) {
        const divisionValue = firstNumber / secundNumber;
        resultValues = divisionValue.toFixed(1);
    };

    return resultValues;
};