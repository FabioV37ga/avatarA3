import { getColorIterator } from "../utils/colors/color.js"
import { icon, iconKey } from "../utils/iconify/icon.js"

export default function (key, draw) {
    let nextColor = getColorIterator(key)

    let i = iconKey(key.next256())
    i.fill(nextColor()).opacity(1)
    i.move(100,100).size(800)
    i.addTo(draw)        
}
