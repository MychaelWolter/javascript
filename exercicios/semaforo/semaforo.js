const semaforo = document.getElementById("semaforo");
const buttons = document.getElementById("buttons");
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
    stopAutomatic();
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

const stopAutomatic = () => {
    clearInterval(intervalId);
};

const turnOn = {
    "red": () => semaforo.src = "image/vermelho.png",
    "yellow": () => semaforo.src = "image/amarelo.png",
    "green": () => semaforo.src = "image/verde.png",
    "automatic": () => {
        intervalId = setInterval(changeColor, 1000);
        buttons.children.automatic.id = "stop";
    },
    "stop": () => {
        stopAutomatic();
        buttons.children.stop.id = "automatic";
    }
};

buttons.addEventListener("click", trafficLight);