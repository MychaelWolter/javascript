const createForm = document.querySelector("#create-form");
const createInput = document.querySelector("#create-input");

const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelButton = document.querySelector("#cancel-btn");

const toDoList = document.querySelector("#to-do-list");

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


// eventos
createForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const createInputValue = createInput.value;

    createInputValue ? saveToDoList(createInputValue) : alert("Escreva alguma tarefa");
});

editForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const editInputValue = editInput.value;


});

document.addEventListener("click", (event) => {
    const targetElement = event.target;
    const parentElement = targetElement.closest("div");

    if (targetElement.classList.contains("finish-to-do-list")) {
        parentElement.classList.toggle("item-to-do-list-finish");
    };

    if (targetElement.classList.contains("edit-to-do-list")) {
        toggleForms();
    };

    if (targetElement.classList.contains("remove-to-do-list")) {
        parentElement.remove();
    };
});