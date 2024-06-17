import { getColorIterator } from "../utils/colors/color.js"

export default function (key, draw) {

    let nextColor = getColorIterator(key)

    var random = 0;
    for (let i = 0; i <= key.params.length - 1; i++) {
        random += key.params[i].dec;
    }
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
            olhos = "U";
            break;
        case "2":
            olhos = "Q";
            break;
        case "3":
            olhos = "@";
            break;
        case "4":
            olhos = "♥";
            break;
        case "5":
            olhos = "®";
            break;
        case "6":
            olhos = "[]";
            break;
        case "7":
            olhos = "$";
            break;
        case "8":
            olhos = "Ø";
            break;
        case "9":
            olhos = "Õ";
            break;
    }

    switch (nariz) {
        case "0":
            nariz = "l";
            break;
        case "1":
            nariz = "w";
            break;
        case "2":
            nariz = "u";
            break;
        case "3":
            nariz = "_";
            break;
        case "4":
            nariz = ">";
            break;
        case "5":
            nariz = "▼";
            break;
        case "6":
            nariz = "9";
            break;
        case "7":
            nariz = "Ꝉ";
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
            boca = "vv";
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
            boca = "∞";
            break;
        case "7":
            boca = "◦";
            break;
        case "8":
            boca = "U";
            break;
        case "9":
            boca = "Õ";
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
