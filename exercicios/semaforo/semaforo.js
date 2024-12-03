const semaforo = document.getElementById("semaforo");
const buttons = document.getElementById("buttons");
let colorIndex = 0;

const trafficLight = (event) => {
    turnOn[event.target.id]();
};

const nextIndex = () => {
    if(colorIndex < 2) {
        colorIndex++;
    }else {
        colorIndex = 0;
    };
};

const changeColor = () => {
    const colors = ["red", "green", "yellow"];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
};

const turnOn = {
    "red": () => semaforo.src = "image/vermelho.png",
    "yellow": () => semaforo.src = "image/amarelo.png",
    "green": () => semaforo.src = "image/verde.png",
    "automatic": () => setInterval(changeColor, 1000)
};

buttons.addEventListener("click", trafficLight);