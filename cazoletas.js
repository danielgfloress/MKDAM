const cards = document.querySelectorAll(".cazoletas-card");

const popup = document.getElementById("cazoletasPopup");

const popupImg = document.getElementById("popupImg");

const popupTitle = document.getElementById("popupTitle");

const popupDesc = document.getElementById("popupDesc");

const popupPrice = document.getElementById("popupPrice");

const popupClose = document.getElementById("popupClose");

cards.forEach(card => {

    card.addEventListener("click", () => {

        popupImg.src =
            card.querySelector(".cazoletas-card__img").src;

        popupTitle.textContent =
            card.querySelector(".cazoletas-card__nombre").textContent;

        popupDesc.textContent =
            card.querySelector(".cazoletas-card__descripcion").textContent;

        popupPrice.textContent =
            card.querySelector(".cazoletas-card__precio").textContent;

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