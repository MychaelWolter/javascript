const names = ["Mychael", "Lucio", "Wolter"];

const secundName = names[1];
console.log(secundName);

const dataStructure = (names) => {
    names.push("dos Santos");
    console.log(names);

    names.pop();
    console.log(names);

    names.unshift("Wolter");
    names.pop();
    console.log(names);

    names.push("Wolter");
    names.shift();
    console.log(names);

    names.unshift("dos Santos");
    console.log(names);

    names.shift();
    console.log(names);
};

dataStructure(names);

console.log(names.indexOf("Wolter"));

const sorted = names.sort();
console.log(sorted);

const nameIsArray = Array.isArray(names) ? "é um array" : "não é um array";
console.log(nameIsArray);