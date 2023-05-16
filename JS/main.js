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
let index = 0;
riempiCarosello(index);

const avanti = document.querySelector(".avanti");
avanti.addEventListener("click", function () {
    if (index == (images.length - 1)) {
        index = 0;
    } else {
        index++;
    };
    riempiCarosello(index);
});

const indietro = document.querySelector(".indietro");
indietro.addEventListener("click", function () {
    if (index == 0) {
        index = (images.length - 1);
    } else {
        index--;
    };
    riempiCarosello(index);
});




function riempiCarosello(index) {
    const elemento = images[index];
    carosello.innerHTML =
        `
    <img src="${elemento["image"]}" alt="">
    <div class="didascalia">
        <div class="title">${elemento["title"]}</div>
        <div class="text">${elemento["text"]}</div>
    </div>
    `;
};















// ciclo for console esplicativo
// for(let i = 0; i < arr.length; i++){
//     console.log("arr[" + i + "]: " + arr[i]);

// };

// ciclo while console esplicativo
// let i = 0;
// while(i < arr.length){
//     console.log("arr[" + i + "]: " + arr[i]);

//     i++;
// };

// for(){};

// A = document.getElementById("B").value;


//``

// console.log("");
// for(let i = 0; i < 10; i++){

// }

// }