const texts = [
    `sussy imposter among us`,
    `i saw you vented`,
    `i was rdmed in among us darkrp`,
    `thats kinda sus`,
    `make sure to hide the fact you are sus`
];

let curText = ``;
let curLetter = ``;

let textIndex = 0;
let letterIndex = 0;

const type = (): void => {
    if (textIndex === texts.length) textIndex = 0;

    curText = texts[textIndex];
    curLetter = curText.slice(0, ++letterIndex);

    document.querySelector(`.sus`).textContent = curLetter;

    if (letterIndex === curText.length) {
        textIndex++;
        letterIndex = 0;

        setTimeout(type, 1000);
        return;
    }

    setTimeout(type, 50);
};

const loadMessages = (): void => type();

export default loadMessages;
