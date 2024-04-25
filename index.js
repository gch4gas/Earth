import  {placesModal}  from "./databaseModal.js";


function showModal() {

    const btnOpen = document.querySelector("#openModal");
    const modalContainer = document.querySelector("#modalContainer");

    
    // modalContainer.innerHTML = ""
    btnOpen.addEventListener('click', () => {

        const createDescription = (place) => {
            
        
            const pName = document.createElement("p");
            const pHistory = document.createElement("p");
            const pPopulation = document.createElement("p");
            const pArea = document.createElement("p");
            const pDensity = document.createElement("p");
            const buttonModal = document.createElement("button");
    
            pName.innerText = place.city;
            pHistory.innerText = place.history;
            pPopulation.innerText = place.population;
            pArea.innerText = place.area;
            pDensity.innerText = place.density;
            
            modalContainer.append(pName,pHistory,pPopulation,pArea,pDensity);
    
            
        }    

    
        modalContainer.showModal();
        
        closeModal();
        
   

    const renderDescription = (arrayPlaces) => {


        for(let i = 0; i < arrayPlaces.length; i++) {

            const formDescription = arrayPlaces[i];
            const description = createDescription(formDescription);

            
        }
        
    }
        renderDescription(description);

    })

}

function closeModal() {
    const btnClose = document.querySelector("#closeModal");
    const modalContainer = document.querySelector("#modalContainer");

    btnClose.addEventListener('click', () => {
        modalContainer.close()
    })
}
showModal();
