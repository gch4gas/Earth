import { places } from "./dataBase.js";


// const createCards = (metropole) => {


//     const liPlace = document.createElement("li");
//     const divPlace = document.createElement("div");
//     const imgPlace = document.createElement("img");
//     const pPlace = document.createElement("p");
//     const btnPlace = document.createElement("button");

//     imgPlace.src = metropole.view;
//     pPlace.innerText = metropole.cidade;
//     console.log(metropole.cidade)
//     btnPlace.innerText = "Saiba mais";

//     liPlace.classList.add("li__metropole");
//     divPlace.classList.add("info__metropole");
//     imgPlace.classList.add("all__img");
//     btnPlace.classList.add("open__Modal-metropole");

//     liPlace.appendChild(divPlace);
//     divPlace.append(imgPlace,btnPlace);

//     return liPlace;

// }

//CHAT GPT CODIGO
function createCards(metropole) {
    const liPlace = document.createElement("li");
    liPlace.classList.add("li__metropole");

    const divPlace = document.createElement("div");
    divPlace.classList.add("info__metropole");

    const imgPlace = document.createElement("img");
    imgPlace.src = metropole.view;
    imgPlace.alt = metropole.cidade;
    imgPlace.classList.add("all__img");
    divPlace.appendChild(imgPlace);

    const pPlace = document.createElement("p");
    pPlace.innerText = metropole.cidade;
    divPlace.appendChild(pPlace);

    const btnPlace = document.createElement("button");
    btnPlace.innerText = "Saiba mais";
    btnPlace.classList.add("open__Modal-metropole");
    divPlace.appendChild(btnPlace);

    liPlace.appendChild(divPlace);

    return liPlace;
}


const renderCards = (placesArray) => {
    const ulPlaces = document.querySelector(".section__metropoles");

    for(let i = 0 ; i < placesArray.length; i++){
        const arrayOfPlaces = placesArray[i];
        const cardPlaces = createCards(arrayOfPlaces);

        ulPlaces.append(cardPlaces)
    }
}
renderCards(places)