const { bodyParser } = require("json-server");
let divCollect = document.querySelector('#ramen-menu')
const addBtn = document.querySelector('#new-ramen-btn')


const imgURL = document.addEventListener ('DOMContentLoaded', () => {
    const div= document.getElementByID ('http://localhost:3000'); 
    fetch('http://localhost:3000')
    .then((res) => res.json())
    .then(data => console.log (data));
} 
)

function show_image(src)
{
    var par = document.getElementById('ramen-menuDiv');
    var img =createElement('img');
    img.src = 'http://localhost:3000'
    par.appendChild(img);
}
function getRamens() {
    return fetch('http://localhost:3000')
    .then(res => res.json())
}



function newRamen(ramen)
fetch('http://localhost:3000',{
    method:'POST', 
    headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
},
body: JSON.stringify({
    "image" : ramen_data.image.value,
})
})
.then(res => res.json())
.then((obj.ramen) => {
    let new_ramen = renderRamens(obejct_ramen)
    divCollect.append(ramen-menu)
})

let divCard = document.createElement('div') 
divCollect.append(divCard)