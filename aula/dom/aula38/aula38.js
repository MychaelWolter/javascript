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

left.children.length > 0 ? console.log(`left possui ${left.children.length} fihos`) : console.log(`left não possui filhos`) ;

allItem[0].children.length > 0 ? console.log(`item 5 possui filhos`) : console.log(`item 5 não possui`);

allItem.map((item) => {
    console.log(item.hasChildNodes());
});