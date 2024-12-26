const fullStack = [...document.getElementsByClassName("dev")];
const clientSide = [...document.getElementsByClassName("frontEnd")];
const serverSide = [...document.getElementsByClassName("backEnd")];
const languageFullStack = document.getElementsByClassName("dev")[2];

console.log(fullStack);
console.log(clientSide);
console.log(serverSide);

clientSide.map((divElement) => {
    divElement.classList.add("destaque");
});

fullStack.forEach((divElement, divIndex) => {
    if (divIndex == 2) {
        console.log(divElement);
    };
});

console.log(languageFullStack);