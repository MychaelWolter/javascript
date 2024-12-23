const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const c5 = document.getElementById("c5");
const c6 = document.getElementById("c6");

console.log(c1);
console.log(c1.id);
console.log(c1.textContent);

c1.innerHTML += " mychael";
console.log(c1.innerText);

const arrayElements = [c1, c2, c3, c4, c5, c6];

arrayElements.map((elements) => {
    console.log(elements.innerText += ` FS`);
});

arrayElements.forEach((elements) => {
    console.log(elements);
});