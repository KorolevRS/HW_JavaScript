"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. При изменении значения в input с id="from", значение содержащееся в нем
должно моментально отображаться в span. То есть при печати в input'е тег span
также должен меняться.
*/
const inputEl = document.querySelector('#from');
const spanEl = document.querySelector('span');
inputEl.addEventListener('input', () => {
    spanEl.textContent = inputEl.value;
});
// 1. Идеально. e можно и не принимать в функции, все равно не используется.
/*
2. При клике на кнопку с классом messageBtn необходимо элементу с классом
message:
1) добавить два класса: animate__animated и animate__fadeInLeftBig
2) поставить данному элементу стиль visibility в значение 'visible'.
*/
const buttonEl = document.querySelector('.messageBtn');
const messageEl = document.querySelector('.message');
buttonEl.addEventListener('click', (e) => {
    messageEl.classList.add('animate__animated', 'animate__fadeInLeftBig');
    messageEl.style.visibility = 'visible';
});
// 2. Нужно было другому элементу ставить классы и стиль ;)
// ; нужна в 28 строке.
/*
3. Необходимо при отправке формы проверить, заполнены ли все поля в этой
форме. Если какое-либо поле не заполнено, форма не должна отправляться, также
должны быть подсвечены незаполненные поля (необходимо поставить класс error
незаполненным полям).
Как только пользователь начинает заполнять какое-либо поле, необходимо,
при вводе в данное поле, произвести проверку:
Если поле пустое, необходимо данное поле подсветить (поставить класс error
данному полю).
Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
*/
const formEl = document.querySelector('form');
const inputElems = document.querySelectorAll('.form-control, #from');

formEl.addEventListener('submit', (e) => {
    // console.log(inputElems);
    inputElems.forEach(item => {
        if (item.value.length === 0) {
            item.classList.add('error');
            e.preventDefault();
        }
    });
});

inputElems.forEach(item => {
    item.addEventListener('input', (e) => {
        if (e.target.value.length !== 0) {
            e.target.classList.remove('error');
        } else {
            e.target.classList.add('error');
        }
    });
});
// 3. Можно не делать флаг, вроде count, можно просто вызывать e.preventDefault(); в 49 строке. Если вызвать несколько раз - ошибки не будет.
// Лучше в 44 строке использовать событие submit на саму форму, потому что отправить форму можно не только нажатием на кнопку.

