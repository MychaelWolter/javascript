const left = document.querySelector("#left");
const right = document.querySelector("#right");
const buttonCopy = document.querySelector("#buttonCopy");
const allItens = [...document.querySelectorAll(".item")];
const select = [...document.querySelectorAll(".select")];

allItens.map((element) => {
    element.addEventListener("click", (event) => {
        const itemClicked = event.target;
        itemClicked.classList.toggle("select");
    });
});

buttonCopy.addEventListener("click" , () => {
    const itemSelect = [...document.querySelectorAll(".select")];

    itemSelect.map((element) => {
        right.appendChild(element);
    });
});