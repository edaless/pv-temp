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
// const didascalia = document.querySelector(".didascalia");
let index = 0;
riempiCarosello(index);

document.querySelector(".avanti").addEventListener("click", F_avanti);

function F_avanti() {
    if (index == (images.length - 1)) {
        index = 0;
    } else {
        index++;
    };
    riempiCarosello(index);
};

document.querySelector(".indietro").addEventListener("click", F_indietro);
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

    // didascalia.innerHTML =
    //     `
    //     <div class="title">${elemento["title"]}</div>
    //     <div class="text">${elemento["text"]}</div>
    // `;
};



document.querySelector("#showInfo1").addEventListener("click", F_select);
document.querySelector("#showInfo2").addEventListener("click", F_select);

let toggle = false;
function F_select() {
    if (toggle == true) {
        toggle = false;
    } else {
        toggle = true;
    }

    if (toggle == true) {
        document.querySelector(".infoCampus").classList.add("visibile");
        document.querySelector("#showInfo1").innerHTML = "Meno informazioni";
        document.querySelector("#showInfo2").innerHTML = "Meno informazioni";
    } else {
        document.querySelector(".infoCampus").classList.remove("visibile");
        document.querySelector("#showInfo1").innerHTML = "Più informazioni";
        document.querySelector("#showInfo2").innerHTML = "Più informazioni";

    }

};

// rigLat[index].classList.add("dark");
