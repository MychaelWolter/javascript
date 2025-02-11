const array = document.querySelector("#array");
const buttonToCheck = document.querySelector("#button-to-check");
const result = document.querySelector("#result");

const elementsArray = [12, 87, 45, 23, 91, 34, 76, 58, 19, 63, 82, 27, 99, 50];

array.innerHTML = `[${elementsArray}]`;

buttonToCheck.addEventListener("click", () => {

    const toCheck = elementsArray.every((itemArray) => {
        if (itemArray % 2 === 0) {
            return itemArray;
        };
    });

    toCheck ? result.innerHTML = `Todos correspondem` : result.innerHTML = `Nem todos correspondem`;
});