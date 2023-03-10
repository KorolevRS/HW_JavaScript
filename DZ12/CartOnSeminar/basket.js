"use strict";

/*
Задание:
1. Создать глбальный объект basket
2. На все кнопки "Add to cart" добавить обработчики событий по клику
3. При клике на "Add to cart" добавить product из списка product в объект basket
4. Отобразить product в корзине
5. Если product уже есть в корзине, увеличить количество на 1 в круглых скобках
6. Добавить обработчик на кнопку удаления product
7. При клике на кнопку удаления product уменьшить кол-во product в basekt или удалить, если больше нет
8. После каждого добавления товара вывести общую стоимость товаров в корзине
*/
const basket = {

}
const totalEl = document.querySelector(".total")

const addButtons = document.querySelectorAll(".btn-add")
addButtons.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        const productId = e.target.dataset.id
        console.log(e.target.dataset.id);
        const filtered = products.filter((x) => x.id == productId)
        console.log(filtered[0]);
        if (basket[productId]) {
            basket[productId].count++
        } else {
            basket[productId] = Object.assign({}, filtered[0]); // {...filtered[0]} - 2 способ
            basket[productId].count = 1;
        }
        renderCart()
        renderTotal(countTotal())
    });
});


const cartItemTemplateEl = document.querySelector('.template')
function renderCartItem(productObject) {
    const cartItemEl = cartItemTemplateEl.content.querySelector(".row").cloneNode(true)
    cartItemEl.querySelector(".product-name").textContent = productObject.name;
    cartItemEl.querySelector(".product-count").textContent = productObject.count;
    cartItemEl.querySelector(".btn-del").addEventListener('click', (e) => {
        if (basket[productObject.id].count > 1) {
            basket[productObject.id].count--
        } else {
            delete basket[productObject.id]
        }
        renderCart()
        renderTotal(countTotal())
    })
    return cartItemEl
}

const cartEl = document.querySelector(".cart")
function renderCart() {
    cartEl.replaceChildren()
    Object.values(basket).forEach(productObject => {
        const cartItemEl = renderCartItem(productObject)
        cartEl.appendChild(cartItemEl)
    })
}
function countTotal() {
    let total = 0;
    Object.values(basket).forEach(productObject => {
        total += productObject.price * productObject.count
    })
    return total;
}
function renderTotal(total) {
    totalEl.textContent = total
}

function name(params) {

}
