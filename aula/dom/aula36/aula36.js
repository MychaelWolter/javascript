const left = document.querySelector("#left");
const right = document.querySelector("#right");
const buttonTransfer = document.querySelector("#buttonTransfer");
const allItens = [...document.querySelectorAll(".item")];

allItens.map((element) => {
    element.addEventListener("click", (event) => {
        const itemClicked = event.target;
        itemClicked.classList.toggle("select");
    });
});

buttonTransfer.addEventListener("click", () => {
    const itemSelect = [...document.querySelectorAll(".select")];
    const itemNotSelect = [...document.querySelectorAll(".item:not(.select)")];

    itemSelect.map((element) => {
        right.appendChild(element);
    });

    itemNotSelect.map((element) => {
        left.appendChild(element);
    });
});