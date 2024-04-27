import { placesModal } from "./databaseModal.js";

// function showModal() {
//     const btnOpen = document.querySelector("#open__Modal");
//     const modalContainer = document.querySelector("#modalContainer");

//     btnOpen.addEventListener('click', () => {
//         console.log("oi");
//         modalContainer.showModal();
//     });
// }

// function closeModal() {
//     const btnClose = document.querySelector("#close__Modal");
//     const modalContainer = document.querySelector("#modalContainer");

//     btnClose.addEventListener('click', () => {
//         modalContainer.close();
//     });
// }

// showModal();
// closeModal()

function showModal() {
    const openModalButtons = document.querySelectorAll(".open__Modal-metropole");
   

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalTarget = button.getAttribute('data-modal-target');
            const modal = document.querySelector(modalTarget);
            modal.showModal();
        });
    });
}

function closeModal() {
    const closeModalButtons = document.querySelectorAll(".closeModal");

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('dialog');
            modal.close();
        });
    });
}

showModal();
closeModal();
