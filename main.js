import { nikeShoes, nikeShoes2, nikeShoes3 } from "./data.js";

const sideBar = document.getElementsByClassName("bx-menu")[0];
const overlay = document.getElementsByClassName("overlay")[0];
const bar = document.querySelector(".nav-items");
const closeBar = document.querySelector(".nav-items i");

const openSideBar = () => {
    bar.style.right = "0";
    overlay.style.scale = "1";
};

const closeSideBar = () => {
    bar.style.right = "100vw";
    overlay.style.scale = "0";
};

sideBar.addEventListener("click", openSideBar);
overlay.addEventListener("click", closeSideBar);
closeBar.addEventListener("click", closeSideBar);

const popularArray = [nikeShoes, nikeShoes2, nikeShoes3];
let currentNumber = 0;

function createCatalogCard(product) {
    const catalogCard = document.createElement("div");
    catalogCard.className = "catalog-card";

    const cardImage = document.createElement("div");
    cardImage.className = "card-image";

    const image = document.createElement("img");
    image.src = product.imgUrl;
    image.alt = product.name || "Product Image";

    cardImage.appendChild(image);

    const cardName = document.createElement("div");
    cardName.className = "card-name";

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = product.name;

    cardName.appendChild(nameParagraph);

    const cardPrice = document.createElement("div");
    cardPrice.className = "card-price";

    const priceParagraph = document.createElement("p");
    priceParagraph.textContent = `$ ${product.price}`;

    cardPrice.appendChild(priceParagraph);

    catalogCard.appendChild(cardImage);
    catalogCard.appendChild(cardName);
    catalogCard.appendChild(cardPrice);

    return catalogCard;
}

function renderCatalog() {
    const popularCatalog = document.querySelector(".popular-catalog");
    popularCatalog.innerHTML = ""; // Clear existing content
    popularArray[currentNumber].forEach(product => {
        const catalogCard = createCatalogCard(product);
        popularCatalog.appendChild(catalogCard);
    });
}

renderCatalog();

const popularBackwardBtn = document.querySelector(".bxs-chevron-left-square");
const popularForwardBtn = document.querySelector(".bxs-chevron-right-square");

const popularForward = () => {
    currentNumber = (currentNumber + 1) % popularArray.length;
    renderCatalog();
};

const popularBackward = () => {
    currentNumber = (currentNumber - 1 + popularArray.length) % popularArray.length;
    renderCatalog();
};

popularForwardBtn.addEventListener("click", popularForward);
popularBackwardBtn.addEventListener("click", popularBackward);
