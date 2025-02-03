const ages = [15, 21, 35, 42, 24, 19, 30, 45];

const greatAges = ages.filter((age) => {
    return age >= 30;
});

const lessAges = ages.filter((age) => {
    return age < 30;
});

console.log(ages);
console.log(greatAges);
console.log(lessAges);


// BASSICO //


const form = document.querySelector("#form-container");
const formInput = document.querySelector("#input-course");

const buttonAddBefore = document.querySelector("#to-add-course-before");
const buttonAddAfter = document.querySelector("#to-add-course-after");
const buttonAdd = document.querySelector("#to-add-course");

const buttonRemove = document.querySelector("#remove-course");
const buttonSelect = document.querySelector("#select-course");

const containerResult = document.querySelector("#result-container");


// FUNÇÕES //


const createCourse = (courseInput, action, courseSibling) => {
    const div = document.createElement("div");
    div.classList.add("course");

    const p = document.createElement("p");
    p.textContent = courseInput;
    div.appendChild(p);

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.id = courseInput;
    div.appendChild(checkbox);

    if (action === "add") {
        containerResult.appendChild(div);
    };

    if (action === "before") {
        containerResult.insertBefore(div, courseSibling);
    };

    if (action === "after") {
        containerResult.insertBefore(div, courseSibling.nextSibling);
    };

    formInput.focus();
    formInput.value = "";
};



const beforeAndAfter = () => {
    const checkboxs = [...document.querySelectorAll("input[type=checkbox]")];

    const checkboxSelect = checkboxs.filter(checkbox => checkbox.checked);

    const courseSelect = checkboxSelect[0].parentNode;

    return courseSelect;
};



const check = (action) => {
    const checkboxs = [...document.querySelectorAll("input[type=checkbox]")];

    const selectCheckbos = checkboxs.filter(checkbox => checkbox.checked);

    const coursesSelect = selectCheckbos.map(selectCheckbox => selectCheckbox.parentNode);

    checkboxs.map((checkbox) => {
        const course = checkbox.parentNode;

        if (action === "remove" && coursesSelect.includes(course)) {
            course.remove();
        };

        if (action === "select" && !coursesSelect.includes(course)) {
            course.classList.toggle("hidden");
        };
    });
};


// EVENTOS //


buttonAddBefore.addEventListener("click", (event) => {
    event.preventDefault();
    const formInputValue = formInput.value;

    if (formInputValue) {
        createCourse(formInputValue, "before", beforeAndAfter());
    };
});

buttonAddAfter.addEventListener("click", (event) => {
    event.preventDefault();
    const formInputValue = formInput.value;

    if (formInputValue) {
        createCourse(formInputValue, "after", beforeAndAfter());
    };
});



buttonAdd.addEventListener("click", (event) => {
    event.preventDefault();
    const formInputValue = formInput.value;

    if (formInputValue) {
        createCourse(formInputValue, "add");
    };
});

buttonRemove.addEventListener("click", () => {
    check("remove");
});

buttonSelect.addEventListener("click", () => {
    check("select");
});