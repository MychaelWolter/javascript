const dev = [...document.querySelectorAll(".dev")];

const message = (event) => {
    const messageId = event.target;
    const messageType = event.type;
    console.log(event);

    console.log(`item clicado foi: ${messageId.innerHTML}`);
    console.log(`ID clicado no event listener foi: ${messageId.id}`);
    console.log(`event listener: ${messageType}`);

    messageId.classList.add("active");
};

dev.map((elementDiv) => {
    elementDiv.addEventListener("click", message);
});