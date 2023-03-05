const newProducts = JSON.parse(json).goods;

const featuredContainerEl = document.querySelector('.featuredItems');
const templateEl = document.querySelector('.template');

function createCard(newObject) {
    const featuredItemEl = templateEl.content.querySelector('.featuredItem');
    const clonefeaturedItem = featuredItemEl.cloneNode(true);
    featuredContainerEl.appendChild(clonefeaturedItem);
    clonefeaturedItem.querySelector('.featuredImgWrap img').src = newObject.img;
    clonefeaturedItem.querySelector('.addToCart').dataset.id = newObject.id;
    clonefeaturedItem.querySelector('.featuredName').textContent = newObject.name;
    clonefeaturedItem.querySelector('.featuredText').textContent = newObject.description;
    clonefeaturedItem.querySelector('.featuredPrice').textContent = newObject.price;
};
newProducts.forEach((object) => {
    createCard(object);
});