// Dato un array di oggetti letterali con: 
// - url dell’immagine - titolo - descrizione
// Creare un carosello come nella foto allegata.

const images = [
    {
        image: 'img/1.jpg',
        title: '',
        text: '',
    },
    {
        image: 'img/2.jpeg',
        title: '',
        text: '',
    },
    {
        image: 'img/3.jpg',
        title: '',
        text: "",
    },
    {
        image: 'img/4.jpg',
        title: '',
        text: '',
    }
];


const carosello = document.querySelector(".carosello");
const didascalia = document.querySelector(".didascalia");
let index = 0;
riempiCarosello(index);

document.querySelector(".avanti_macro").addEventListener("click", F_avanti);
document.querySelector(".avanti_micro").addEventListener("click", F_avanti);

function F_avanti() {
    if (index == (images.length - 1)) {
        index = 0;
    } else {
        index++;
    };
    riempiCarosello(index);
};

document.querySelector(".indietro_macro").addEventListener("click", F_indietro);
document.querySelector(".indietro_micro").addEventListener("click", F_indietro);
function F_indietro() {
    if (index == 0) {
        index = (images.length - 1);
    } else {
        index--;
    };
    riempiCarosello(index);
};


function riempiCarosello(index) {
    const elemento = images[index];
    carosello.innerHTML =
        `
    <img src="${elemento["image"]}" class="imgCar">
    `;
    didascalia.innerHTML =
        `
        <div class="title">${elemento["title"]}</div>
        <div class="text">${elemento["text"]}</div>
    `;
};




