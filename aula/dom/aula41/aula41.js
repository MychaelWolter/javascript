const containerInput = document.querySelector("#container-input");
const inputTecnologia = document.querySelector("#input-teconologia");
const button = document.querySelector("button");
const container = document.querySelector("#container");



const createItem = (itemValue) => {

    const div = document.createElement("div");
    div.setAttribute("class", "programação");
    div.setAttribute("id", itemValue);
    div.innerText = itemValue;
    container.appendChild(div);
};



const removeItem = (itemRemove) => {
    const allItem = [...document.querySelectorAll(".programação")];

    allItem.forEach((item) => {
        if (item.id === itemRemove){
            item.removeAttribute("id");
            item.removeAttribute("class");
            item.remove();
        };
    });
};



button.addEventListener("click", (event) => {
    
    event.preventDefault();
    const inputValue = inputTecnologia.value;
    createItem(inputValue);
});



container.addEventListener("click", (event) => {
    const target = event.target.id;

    if (target !== "container"){
        removeItem(target);
    };
});