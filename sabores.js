const cards = document.querySelectorAll(".sabores-card");

const popup = document.getElementById("saboresPopup");

const popupImg = document.getElementById("popupImg");

const popupTitle = document.getElementById("popupTitle");

const popupDesc = document.getElementById("popupDesc");

const popupPrice = document.getElementById("popupPrice");

const popupClose = document.getElementById("popupClose");

cards.forEach(card => {

    card.addEventListener("click", () => {

        popupImg.src =
            card.querySelector(".sabores-card__img").src;

        popupTitle.textContent =
            card.querySelector(".sabores-card__nombre").textContent;

        popupDesc.textContent =
            card.querySelector(".sabores-card__descripcion").textContent;

        popupPrice.textContent =
            card.querySelector(".sabores-card__precio").textContent;

        popup.style.display = "flex";

    });

});

popupClose.addEventListener("click", () => {

    popup.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === popup) {

        popup.style.display = "none";

    }

});