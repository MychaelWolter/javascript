const array = document.querySelector("#array");
const buttonReduce = document.querySelector("#button-reduce");
const result = document.querySelector("#result");

const elementsArray = [12, 87, 45, 23, 91, 34, 76, 58, 19, 63, 82, 27, 99, 50];

array.innerHTML = elementsArray;

buttonReduce.addEventListener("click", () => {

    const arrayReduce = elementsArray.reduce((accumulate, current) => {
        return accumulate + current;
    }, 0);

    result.innerHTML = arrayReduce;
});