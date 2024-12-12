const sons = {
    "A": "boom.wav",
    "S": "clap.wav",
    "D": "hihat.wav",
    "F": "kick.wav",
    "G": "openhat.wav",
    "H": "ride.wav",
    "J": "snare.wav",
    "K": "tink.wav",
    "L": "tom.wav"
};

const chaves = (sons) => {
    console.log(Object.keys(sons));
};

const valor = (sons) => {
    console.log(Object.values(sons));
};

console.log(sons);
chaves(sons);
valor(sons);