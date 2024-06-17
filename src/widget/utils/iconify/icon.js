import { G } from "@svgdotjs/svg.js"
import iconList from "./icon-list.js"

function icon(name) {
    //let keys = Object.keys(iconList)
    //let name = iconList[name]
    //console.log(name);
    let objIcon = iconList[name]
    //console.log("objIcon",objIcon);
    let g = new G()
    let paths = objIcon.paths
    for (let i in paths) {
        g.path(paths[i])
    }
    return g
}

function iconKey(key) {
    let keys = Object.keys(iconList)
    let name = keys[key % keys.length]
    //console.log(name);
    let objIcon = iconList[name]
    //console.log("objIcon",objIcon);
    let g = new G()
    let paths = objIcon.paths
    for (let i in paths) {
        g.path(paths[i])
    }
    let responseData; // Declara uma variável global para armazenar os dados da resposta

    // Função para fazer a requisição e atribuir os dados à variável global
    function fetchData() {
        fetch('https://api.thenounproject.com')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Aqui você manipula os dados da resposta
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Chamando a função para iniciar a requisição
    fetchData();
    console.log(responseData)
    return g
}

export { icon, iconKey }