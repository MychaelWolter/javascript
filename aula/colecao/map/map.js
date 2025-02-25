const boxId = document.querySelector("#box");

const map = new Map();

map.set("Mychael", 10);
map.set("Lucio", 7);
map.set(9 , "Wolter");

console.log(map);

boxId.innerHTML += map.get("Mychael");
boxId.innerHTML += " ";
boxId.innerHTML += map.get(9);

const search = map.has("Lucio");
search ? boxId.innerHTML += ` Existe o valor: ${map.get("Lucio")}`: `Não tem`;

boxId.innerHTML += ` Tamanho do Map: ${map.size}`;

map.delete(9);

map.forEach((element) => {
    boxId.innerHTML += ` ${element}`;
});