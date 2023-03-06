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

/*Предлагаю не писать в html код js, лучше отдельный файл используйте.
Нюанс такой есть... Советую реже дергать функции, которые вставляют (в целом, меняют) что-то в html, 
это не самые быстрые функции, получить один раз всю разметку, которая нужна и за один раз вставить ее всю, 
так работать будет быстрее (хотя здесь разницы особой быть не должно).
Отлично все сделали, Роман, вы молодец.*/
