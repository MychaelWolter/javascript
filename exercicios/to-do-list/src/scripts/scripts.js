const createForm = document.querySelector("#create-form");
const createInput = document.querySelector("#create-input");

const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelButton = document.querySelector("#cancel-btn");

const toDoList = document.querySelector("#to-do-list");

let oldTextToDoList;

// funções 

const saveToDoList = (textCreateInput) => {

    const itemToDoList = document.createElement("div");
    itemToDoList.classList.add("item-to-do-list");

    const textToDoList = document.createElement("p");
    textToDoList.innerText = textCreateInput;
    itemToDoList.appendChild(textToDoList);

    const finishButton = document.createElement("button");
    finishButton.classList.add("finish-to-do-list");
    finishButton.innerHTML += `<i class="fa-solid fa-check"></i>`;
    itemToDoList.appendChild(finishButton);

    const editButton = document.createElement("button");
    editButton.classList.add("edit-to-do-list");
    editButton.innerHTML += `<i class="fa-solid fa-pen"></i>`;
    itemToDoList.appendChild(editButton);

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-to-do-list");
    removeButton.innerHTML += `<i class="fa-solid fa-xmark"></i>`;
    itemToDoList.appendChild(removeButton);

    toDoList.appendChild(itemToDoList);

    createInput.value = "";
    createInput.focus();
};

const toggleForms = () => {
    createForm.classList.toggle("hidden");
    editForm.classList.toggle("hidden");
    toDoList.classList.toggle("hidden");
};

const updateToDoList = (newTextEditInput) => {
    const allToDoList = toDoList.querySelectorAll(".item-to-do-list");

    allToDoList.forEach((itemToDoList) => {
        let textEditInput = itemToDoList.querySelector("p");

        if (textEditInput.innerText === oldTextToDoList) {
            textEditInput.innerText = newTextEditInput;
        };
    });
};


// eventos
createForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const createInputValue = createInput.value;

    createInputValue ? saveToDoList(createInputValue) : alert(`Escreva alguma tarefa`);
});

document.addEventListener("click", (event) => {
    const targetElement = event.target;
    const parentElement = targetElement.closest("div");
    let textEditInput;

    if (parentElement && parentElement.querySelector("p")) {
        textEditInput = parentElement.querySelector("p").innerText;
    };

    if (targetElement.classList.contains("finish-to-do-list")) {
        parentElement.classList.toggle("item-to-do-list-finish");
    };

    if (targetElement.classList.contains("edit-to-do-list")) {
        toggleForms();

        editInput.value = textEditInput;
        oldTextToDoList = textEditInput;
    };

    if (targetElement.classList.contains("remove-to-do-list")) {
        parentElement.remove();
    };
});

cancelButton.addEventListener("click", (event) => {
    event.preventDefault();
    toggleForms();
});

editForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const editInputValue = editInput.value;

    if (editInputValue) {
        updateToDoList(editInputValue)
    };

    toggleForms();
});