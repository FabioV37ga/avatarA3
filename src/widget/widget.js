import { getColorIterator } from "./utils/colors/color.js"
import sample from "./examples/widget05.js"
import sample2 from "./examples/widget06.js"
import sample3 from "./examples/widget10.js"
// import sample3 from "./examples/widget08.js"

function widget(key, draw) {
    let nextColor = getColorIterator(key)
    draw.rect().size(1000,1000).fill(nextColor())

    sample2(key,draw)
    sample(key,draw)
    sample3(key,draw)
    // window.widget10(key)
}

export default widget