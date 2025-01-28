const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");

const div8 = document.createElement("div");
const input1 = document.createElement("input");
const label = document.createElement("label");

div8.setAttribute("id", "div8");
input1.setAttribute("type", "date");
input1.setAttribute("id", "input1");
label.setAttribute("for", "input1");

label.innerHTML = "dia especial";

div3.appendChild(div8);
div8.appendChild(label);
div8.appendChild(input1);



const array = ["item1", "item2", "item3", "item4", "item5"];
const body = document.querySelector("body");
const lista = document.createElement("ol");

body.appendChild(lista);

array.map((arrayItem) => {

    const item = document.createElement("li");
    item.innerHTML = arrayItem;
    item.setAttribute("id", arrayItem);
    item.setAttribute("class", "item");
    lista.appendChild(item);
});