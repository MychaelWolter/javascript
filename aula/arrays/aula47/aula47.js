const array = document.querySelector("#array");
const inputSearch = document.querySelector("#input-search");
const buttonSearch = document.querySelector("#button-search");
const result = document.querySelector("#result");

const elementsArray = [9, 15, 43, 21, 5, 56, 78, 24, 16, 37, 2, 10];

array.innerHTML = `[${elementsArray} ]`;

const verification = () => {

};

buttonSearch.addEventListener("click", () => {
    
    const inputSearchValue = inputSearch.value;
    console.log(inputSearchValue)

    const elementFound = elementsArray.find(verification());

    result.innerHTML = elementFound;
});