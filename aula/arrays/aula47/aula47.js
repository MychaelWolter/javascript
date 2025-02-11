const array = document.querySelector("#array");
const inputSearch = document.querySelector("#input-search");
const buttonSearch = document.querySelector("#button-search");
const result = document.querySelector("#result");

const elementsArray = [9, 15, 43, 21, 5, 56, 78, 24, 16, 37, 2, 10];

array.innerHTML = `[${elementsArray}]`;

buttonSearch.addEventListener("click", () => {
    
    const inputSearchValue = parseInt(inputSearch.value);

    const elementFound = elementsArray.find((itemArray) => {
        if (itemArray === inputSearchValue) {
            return itemArray;
        };
    });

    elementFound ? result.innerHTML = elementFound : result.innerHTML = `Não está presente no array`;

    inputSearch.value = "";
    inputSearch.focus();
});