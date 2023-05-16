// Dato un array di oggetti letterali con: 
// - url dell’immagine - titolo - descrizione
// Creare un carosello come nella foto allegata.

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
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




