const array = document.querySelector("#array");
const buttonToCheck = document.querySelector("#button-to-check");
const result = document.querySelector("#result");

const elementsArray = [12, 87, 45, 23, 91, 34, 76, 58, 19, 63, 82, 27, 99, 50];

array.innerHTML = elementsArray;

buttonToCheck.addEventListener("click", () => {

    const arrayToCheck = elementsArray.some((arrayItem) => {
        return arrayItem % 2 === 0 ;
    });

    arrayToCheck ? result.innerHTML = `Existe pelo menos um elemento q é par` : result.innerHTML = `Não existem pares`;
});