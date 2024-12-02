const semaforo = document.getElementById("semaforo");
const buttons = document.getElementById("buttons");

const trafficLight = (event) => {
    turnOn[event.target.id]();
};

const changeColor = () => {

};

const turnOn = {
    "red": () => semaforo.src = "image/vermelho.png",
    "yellow": () => semaforo.src = "image/amarelo.png",
    "green": () => semaforo.src = "image/verde.png",
    "automatic": () => setTimeout(changeColor, 1000)
};

buttons.addEventListener("click", trafficLight);