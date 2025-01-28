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



console.log(left.hasChildNodes());
console.log(allItem[4].hasChildNodes());
console.log(allItem[4].childNodes);
console.log(allItem[4].children);



left.children.length > 0 ? console.log(`left possui ${left.children.length} fihos`) : console.log(`left não possui filhos: ${left.children.length}`) ;

allItem[0].children.length > 0 ? console.log(`item 5 possui ${allItem[0].children.length} filhos`) : console.log(`item 5 não possui filhos: ${allItem[0].children.length}`);

console.log(allItem[0].childNodes.length > 1 ? `Possui filhos: ${allItem[0].childNodes.length}` : `Não possui filhos: ${allItem[0].childNodes.length}`);



allItem.map((item) => {
    console.log(item.hasChildNodes());
});

left.firstElementChild.innerHTML = `CSS3`;
left.lastChild.innerHTML = `HTML5`;


const main = left.parentElement;
const right3 = document.querySelector("#right-3");
const right2 = right3.parentElement;
const right1 = main.lastElementChild;

console.log(right1 === right2.parentElement ? `deu certo` : `deu errado`);

if (main === right2.parentNode.parentNode) {
    console.log(`deu certo`);
} else {
    console.log(`deu errado`);
};