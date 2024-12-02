const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

const isLampBroken = () => {
    return lamp.src.indexOf("quebrada") > -1;
};

const lampOn = () => {
    if (!isLampBroken()) {
        lamp.src = "image/ligada.jpg";
    };
};

const lampOff = () => {
    if (!isLampBroken()) {
        lamp.src = "image/desligada.jpg";
    };
};

const broken = () => {
    lamp.src = "image/quebrada.jpg";
};

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);

lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", broken);