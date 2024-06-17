import { getColorIterator } from "../utils/colors/color.js"

export default function (key, draw) {

    let nextColor = getColorIterator(key)

    var random = 0;
    for (let i = 0; i <= key.params.length - 1; i++) {
        random += key.params[i].dec;
    }
    // console.log(random)
    // Resumidamente, utiliza a somatória do código hash para gerar um grande número que vai ter 3 digitos extraídos.
    // Cada um desses dígitos corresponde respectivamente aos olhos, nariz e boca do avatar.
    // No final, são gerados 2 circulos, um de cor baseada no hash e outro preto (por trás) para fazer uma borda.
    
    random *= random;
    random = random.toString().split("")
    random = [random[4], random[5], random[6]]

    var olhos = random[0];
    var nariz = random[1];
    var boca = random[2];

    switch (olhos) {
        case "0":
            olhos = "O";
            break;
        case "1":
            olhos = "ಠ";
            break;
        case "2":
            olhos = "Q";
            break;
        case "3":
            olhos = "ಥ";
            break;
        case "4":
            olhos = "♥";
            break;
        case "5":
            olhos = "U";
            break;
        case "6":
            olhos = "°";
            break;
        case "7":
            olhos = "▰";
            break;
        case "8":
            olhos = "◕";
            break;
        case "9":
            olhos = "๏";
            break;
    }

    switch (nariz) {
        case "0":
            nariz = "l";
            break;
        case "1":
            nariz = "o";
            break;
        case "2":
            nariz = "つ";
            break;
        case "3":
            nariz = "-";
            break;
        case "4":
            nariz = ">";
            break;
        case "5":
            nariz = "▼";
            break;
        case "6":
            nariz = "u";
            break;
        case "7":
            nariz = "ʖ";
            break;
        case "8":
            nariz = "●";
            break;
        case "9":
            nariz = "Ᵹ";
            break;
    }

    switch (boca) {
        case "0":
            boca = "‿";
            break;
        case "1":
            boca = "▬";
            break;
        case "2":
            boca = "■";
            break;
        case "3":
            boca = "O";
            break;
        case "4":
            boca = "o";
            break;
        case "5":
            boca = "_";
            break;
        case "6":
            boca = "vv";
            break;
        case "7":
            boca = "◦";
            break;
        case "8":
            boca = "U";
            break;
        case "9":
            boca = "ᨓ";
            break;
    }

    draw.circle().size(620).move(190, 190).fill("black").opacity(1)
    draw.circle().size(600).move(200, 200).fill(nextColor()).opacity(1)


    document.querySelector(".l_eye").textContent = olhos;
    document.querySelector(".r_eye").textContent = olhos;
    document.querySelector(".nose").textContent = nariz;
    document.querySelector(".mouth").textContent = boca;


    return random;
}
