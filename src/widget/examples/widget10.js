import { getColorIterator } from "../utils/colors/color.js"

export default function (key, draw) {

    var random = 0;
    for (let i = 0; i <= key.params.length - 1; i++) {
        random += key.params[i].dec;
    }
    random *= 3.654;
    random /= 100;
    random = parseInt(random.toString().split("")[1]) + parseInt(random.toString().split("")[1])
    random = random.toFixed(0)
    console.log(random)
    return random;
    // console.log(random * 3.654)
    // return retorno; // limita o resultado entre 1 e 100

}
