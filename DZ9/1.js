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
inputEl.addEventListener('input', (e) => {
    spanEl.textContent = inputEl.value;
});
/*
2. При клике на кнопку с классом messageBtn необходимо элементу с классом
message:
1) добавить два класса: animate__animated и animate__fadeInLeftBig
2) поставить данному элементу стиль visibility в значение 'visible'.
*/
const buttonEl = document.querySelector('.messageBtn');
buttonEl.addEventListener('click', (e) => {
    e.target.classList.add('animate__animated', 'animate__fadeInLeftBig');
    e.target.style.visibility = 'visible';
})

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

formEl.querySelector('button').addEventListener('click', (e) => {
    let count = 0;
    // console.log(inputElems);
    inputElems.forEach(item => {
        if (item.value.length === 0) {
            count = 1;
            item.classList.add('error');
        }
    });
    if (count === 1) {
        // console.log('форму не отправлять');
        e.preventDefault();
    }
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

