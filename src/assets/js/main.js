// yes
const texts = [
    "sussy imposter among us",
    "i saw you vented",
    "i was rdmed in among us darkrp",
    "thats kinda sus",
    "make sure to hide the fact you are sus",
];
let count = 0;
let index = 0;
let curText = 0;
let letter = 0;

function type() {
    if (count === texts.length) {
        count = 0;
    }
    curText = texts[count];
    letter = curText.slice(0, ++index);

    document.querySelector(".sus").textContent = letter;
    if (letter.length === curText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000)
        return;
    }
    setTimeout(type, 50)
}

window.onload = () => {
    type();
}
