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
const products = getProductsObject();
console.log(products);

// Главный элемент корзины.
const cartEl = document.querySelector(".contentsCart");
// строчки/товары добавленные в корзину.
const valueTableEl = document.querySelector('.valuesTable');
// Обертка списка товаров.
const addToCartButtons = document.querySelectorAll('.featuredItem');
// Количество товаров в корзине, в красном кружке, возле иконки корзины.
const counterInCartImage = document.querySelector(".cartIconWrap span");
// Общая сумма товаров в корзине.
const cartTotalValueEl = document.querySelector(".totalTable span");

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
addToCartButtons.forEach(btnAdd => {
    btnAdd.addEventListener('click', (e) => {
        const btnAddToCart = e.currentTarget.querySelector('.addToCart');
        const productId = btnAddToCart.dataset.id;
        // console.log(productId);
        // Получаем id продукта, который прописан в data-id у кнопки(либо у
        // области продукта), по которой произошел клик. Передаем id для 
        //добавления в корзину продукта с данным id.
        addToCart(productId);
        // Перерисовываем корзину.
        renderCartContent();
    });
});

/** прподаватеь советует использовать делигирование, чтобы можно было без 
 * проблем добавлять элементы.
 * Обработчик клика на кнопку "Добавить в корзину" с деленированием события.
 * Событие вешается на ближайшего общего для всех кнопок предка.
 
 document.querySelector(".featuredItems").addEventListener("click", (event) => {
    // Получаем кнопку "Add to cart". Используем .closest метод, чтобы получить
    // ее, так как клик может быть на иконку тележки, а не на саму кнопку.
    const addToCartEl = event.target.closest(".addToCart");
    // Проверяем, если клик был не по кнопке с селектором ".addToCart", а также
    // такого селектора не существует среди родителей элемента, значит
    // пользователь кликнул куда-то в другое место, нас этот клик не интересует,
    // ничего не делаем, уходим из функции.
    if (!addToCartEl) {
      return;
    }
    // Получаем id продукта, который прописан в data-id у кнопки, ко которой
    // произошел клик. Передаем id для добавления в корзину продукта с данным id.
    addToBasket(addToCartEl.dataset.id);
    // Перерисовываем корзину.
    renderBasketContent();
  });
  */

function addToCart(id) {
    // Если такого продукта еще не было добавлено в наш объект, который хранит
    // все добавленные товары, то создаем новый объект.
    if (!(id in cart)) {
        // Необходимо скопировать данные из продукта, также добавить количество
        // в новый объект, который будет храниться в корзине.
        cart[id] = {
            id: id,
            name: products[id].name,
            price: products[id].price,
            count: 0,
        };
    }
    // Добавляем в количество +1 к продукту.
    cart[id].count++;
};


/**
 * Функция отрисовывает весь контент корзины.
 */
function renderCartContent() {
    // Отрисовываем все товары в корзине.
    // Пробегаемся по всем товарам в корзине, для каждого товара создаем
    // разметку и соединяем все товары в одну длинну строку, в которой будут
    // содержаться разметки каждого товара и добавляем всю разметку в корзину.
    valueTableEl.innerHTML = Object.values(cart).reduce(
        (acc, product) => acc + getCartProductMarkup(product),
        ""
    );
    // Ставим новое количество добавленных товаров у значка корзины.
    counterInCartImage.textContent = getTotalCartCount().toString();
    // Ставим новую общую стоимость товаров в корзине.
    cartTotalValueEl.textContent = getTotalCartPrice().toFixed(2);
};

/**
 * Функция считает и возращает количество добавленных товаров у значка корзины.
 * reduce нужна когда мы хотим пройтись по элементам массива и вычислить
 *  единое значение с этими элементами
 * 
 * reduce последовательно применяет f* к каждому элементу, передавая ей текущее
 *  значение переменной, в которой накапливается результат (аккумулятора) и 
 * текущий обрабатываемый элемент. 
 */
function getTotalCartCount() {
    return Object.values(cart).reduce((acc, product) => acc + product.count, 0);
}

/**
 * Считает и возвращает итоговую цену по всем добавленным продуктам.
 * @return {number} - Итоговую цену по всем добавленным продуктам.
 */
function getTotalCartPrice() {
    return Object.values(cart).reduce(
        (acc, product) => acc + product.price * product.count,
        0
    );
};

/**
 * Обработчик кнопки удаления товара.
 */
cartEl.addEventListener("click", (e) => {
    // Проверяем, если клик был не по кнопке удаления товара, то ничего
    // не делаем, уходим из функции.

    if (!e.target.classList.contains("productRemove")) {
        return;
    }
    // Получаем id удаляемого товара и удаляем его.
    removeFromCart(e.target.closest('.cartRow').dataset.id);
    // Перерисовываем корзину.
    renderCartContent();
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
    cart = {};
    renderCartContent();
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
        <p class="total">${productBuy.price * productBuy.count}</p>
        <div><button class="productRemove">-</button></div>
    </div>
  `;
};