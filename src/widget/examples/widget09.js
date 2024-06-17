import { getColorIterator } from "../utils/colors/color.js"
import { icon, iconKey } from "../utils/iconify/icon.js"

export default function (key, draw) {
    let nextColor = getColorIterator(key)

    let s = iconKey(key.next())
    s.fill(nextColor()).opacity(1)
    s.move(150, 50).size(600)
    s.addTo(draw)
}



