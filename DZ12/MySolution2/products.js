"use strict";

// Находим элемент, куда надо вставить элементы.
const featuredItemsEl = document.querySelector(".featuredItems");
// Вставляем все данные из массива, предварительно каждые данные превратив в
// html-разметки товаров, складывая все разметки в одну строку.
featuredItemsEl.innerHTML = getProductsList()
    .map((product) => renderProduct(product))
    .join("");

/**
 * Фугнкция создает html товара.
 * @param {object} data - объект с информацией о товаре.
 * @returns разметку товара.
 */
function renderProduct(data) {
    return `
    <div class="featuredItem">
        <div class="featuredImgWrap">
            <img src="${data.img}" alt="${data.name}">
            <div class="featuredImgDark">
                <button class="addToCart" data-id="${data.id}">
                    <img src="images/cart.svg" alt="">
                    Add to Cart
                </button>
            </div>
        </div>
        <div class="featuredData">
            <div class="featuredName">
                ${data.name}
            </div>
            <div class="featuredText">
                ${data.description}
            </div>
            <div class="featuredPrice">
                ${data.price} руб.
            </div>
        </div>
    </div>
  `;
};

let cart = {};
const products = getProductsList();

/**
 * Обработчик открытия/закрытия корзины при клике на ее значок.
 */
const hiddenEl = document.querySelector('.hidden');
document.querySelector('.cartIconWrap').addEventListener('click', () => {
    hiddenEl.classList.toggle('hidden');
});

/**
 * Обработчик клика на кнопку "Добавить в корзину" с делегированием события.
 */
const addToCartButtons = document.querySelectorAll(".featuredItem");
addToCartButtons.forEach(btnAdd => {
    btnAdd.addEventListener('click', (e) => {
        const btnAddToCart = e.currentTarget.querySelector('.addToCart');
        const productId = btnAddToCart.dataset.id;
        console.log(productId);
        // Получаем id продукта, который прописан в data-id у кнопки(либо у
        // области продукта), по которой произошел клик. Передаем id для 
        //добавления в корзину продукта с данным id.
        const filtered = products.filter((x) => x.id == productId)

        if (cart[productId]) {
            cart[productId].count++;
        } else {
            cart[productId] = Object.assign({}, filtered[0]); // собираем объект
            // к пустому объекту {} приклеиваем объект (т.е. выбранный по id наш товар)
            // и так далее, если товар уже есть то идем в if и суммируем counter
            cart[productId].count = 1;
        }
        renderCart(); //нужно отрисовать корзину
        renderTotalCartCount(countCartTotal()); //отрисовка счетчика
    });
});

// строчки/товары добавленные в корзину.
const valueTableEl = document.querySelector('.valuesTable');
/**
 * Функция отрисовывает весь контент корзины.
 */
function renderCart() {
    valueTableEl.innerHTML = Object.values(cart).reduce(
        (acc, product) => acc + getCartProductMarkup(product),
        ""
    );
    // Object.values(cart).forEach(productObject => {
    //     valueTableEl.innerHTML = getCartProductMarkup(productObject);
    //не получается через forEach в карзину записывается только один товар, счетчик ++
    // второй товар перезаписывает(туже строчку), а вот уже использованный товар не записывается
    // })
};

/**
 * Обработчик кнопки удаления товара.
 */
document.querySelector(".contentsCart").addEventListener("click", (e) => {
    // Проверяем, если клик был не по кнопке удаления товара, то ничего
    // не делаем, уходим из функции.

    if (!e.target.classList.contains("productRemove")) {
        return;
    }
    // Получаем id удаляемого товара и удаляем его.
    removeFromCart(e.target.closest('.cartRow').dataset.id);
    // Перерисовываем корзину.
    renderCart();
    renderTotalCartCount(countCartTotal());
});

function removeFromCart(id) {
    // Если товара с данным id меньше или равно 1, то убираем вовсе данный товар
    // из объекта, иначе вычитаем из count единицу товара.
    if (cart[id].count <= 1) {
        delete cart[id];
    } else {
        cart[id].count--;
    }
};

document.querySelector('.delete').addEventListener('click', () => {
    removeAllFromCart();
});
/**
 * Функция очищает всю корзину.
 */
function removeAllFromCart() {
    console.log(cart);
    cart = {};
    renderCart();
    renderTotalCartCount(countCartTotal());
};

// Количество товаров в корзине, в красном кружке, возле иконки корзины.
const counterInCartImage = document.querySelector(".cartIconWrap span");

/* Функция считает и возращает количество добавленных товаров у значка корзины.
*/
function countCartTotal() {
    let totalCount = 0;
    Object.values(cart).forEach(productObject => {
        totalCount += productObject.count;
    });
    return totalCount;
};

/**
 * Отрисовка счетчика корзины
 */
function renderTotalCartCount(totalCount) {
    counterInCartImage.textContent = totalCount;;
};

/**
 * Функция возвращает разметку товара в корзине.
 * @param {object} product - товар из корзины.
 */
function getCartProductMarkup(productBuy) {
    return `
    <div class="cartRow" data-id="${productBuy.id}">
        <p class="name">${productBuy.name}</p>
        <p class="count">${productBuy.count}</p>
        <p class="price">${productBuy.price}</p>
        <p class="totalSum">${productBuy.price * productBuy.count}</p>
        <div><button class="productRemove">-</button></div>
    </div>
  `;
};