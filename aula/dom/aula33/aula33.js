const divAll = [...document.getElementsByTagName("div")];
const fullStack = [...document.getElementsByClassName("dev")];
const clientSide = [...document.getElementsByClassName("frontEnd")];
const serverSide = [...document.getElementsByClassName("backEnd")];
const languageFullStack = document.getElementById("c3");

console.log(divAll);
console.log(fullStack);
console.log(clientSide);
console.log(serverSide);
console.log(languageFullStack);

const queryDivAll = [...document.querySelectorAll(".frontEnd")];
const queryLanguageServer = document.querySelector("#c7");
const queryLanguageClient = document.querySelectorAll(".dev")[2];

console.log(queryDivAll);
console.log(queryLanguageServer);
console.log(queryLanguageClient);

const p = [...document.querySelectorAll("p")];
console.log(p);

p.forEach((element) => {
    console.log(element);
});

const all = [...document.querySelectorAll("div, p")];
console.log(all);

const allIndex = [...document.querySelectorAll("div.backEnd")];
console.log(allIndex);

const allIndexChildren = [...document.querySelectorAll("div[class] > p")];
console.log(allIndexChildren);