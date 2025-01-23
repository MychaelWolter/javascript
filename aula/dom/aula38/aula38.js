const left = document.querySelector("#left");
const allItem = [...document.querySelectorAll(".item")];

console.log(left.firstElementChild);
console.log(left.lastElementChild);
console.log(left.parentElement);

console.log(allItem[0].nextElementSibling);
console.log(allItem[5].previousElementSibling);

console.log(document.getRootNode());
console.log(allItem[0].ownerDocument);

const childrenleft = [...left.children];
console.log(childrenleft);

childrenleft.push(left.firstElementChild);
childrenleft.shift();

childrenleft.map((elementLeft) => {
    left.appendChild(elementLeft);
}); 