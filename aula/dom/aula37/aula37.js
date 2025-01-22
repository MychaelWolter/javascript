const left = document.querySelector("#left");
const allItens = [...document.querySelectorAll(".item")];

left.addEventListener("click", (event) => {
    const clicked = event.target;
    clicked.classList.toggle("select");
});

allItens.map((element) => {
    element.addEventListener("click", (event) => {
        event.stopPropagation();
    });
});