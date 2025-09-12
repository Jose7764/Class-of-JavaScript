const prompt = require("prompt-sync")();

function converterMorse(morse) {
    const tabela = {
        ".-": "a", "-...": "b", "-.-.": "c", "-..": "d", ".": "e", "..-.": "f",
        "--.": "g", "....": "h", "..": "i", ".---": "j", "-.-": "k", ".-..": "l",
        "--": "m", "-.": "n", "---": "o", ".--.": "p", "--.-": "q", ".-.": "r",
        "...": "s", "-": "t", "..-": "u", "...-": "v", ".--": "w", "-..-": "x",
        "-.--": "y", "--..": "z", "-----": "0", ".----": "1", "..---": "2",
        "...--": "3", "....-": "4", ".....": "5", "-....": "6", "--...": "7",
        "---..": "8", "----.": "9", "/": " "
    };
    
    return morse.split(" ").map(m => tabela[m] || "").join("");
}

let codigoMorse = prompt("Digite o codigo morse: ");

console.log(converterMorse(codigoMorse));

