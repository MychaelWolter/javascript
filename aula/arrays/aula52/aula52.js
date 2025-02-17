const coursesContainer = document.querySelector("#courses");
const coursesModifiedContainer = document.querySelector("#courses-modified");

const courses = ["javascript", "react", "node js"];

console.log(courses[0]);

courses.map((course) => {
    const p = document.createElement("p");
    p.innerHTML = course;
    coursesContainer.appendChild(p);
});

courses.shift();
courses.unshift("next");
courses.pop();
courses.push("express");

courses.map((course) => {
    const p = document.createElement("p");
    p.innerHTML = course;
    coursesModifiedContainer.appendChild(p);
});

const array1 = ["arroz", "feijao", "farofa", ["azul", "verde", "roxo"]];
const array2 = ["carro", "moto", "onibus", array1];

console.log(array1);
console.log(array1[3][1]);
console.log(array2[3][3]);
console.log(array2[3][3][0]);