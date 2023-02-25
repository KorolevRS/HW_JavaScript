"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс
"super-dropdown", необходимо использовать методы forEach, querySelectorAll и
свойство classList у элементов.
*/
const elem1 = document.querySelectorAll('.dropdown-item');
elem1.forEach(element => {
  element.classList.add('super-dropdown');
});
/*
2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он
присутствует у этого элемента, либо добавить, если такого класса у элемента
не было.
*/
const btn = document.querySelector('.btn');
btn.onclick = function () {
  // if (btn.classList.contains('btn-secondary')) {
  //   btn.classList.remove('btn-secondary');
  // } else {
  //   btn.classList.add('btn-secondary');
  // }
  btn.classList.toggle('btn-secondary');
};
/*
3. Необходимо удалить класс "dropdown-menu" у элемента, у которого
присутствует класс "menu".
*/
document.querySelector('.menu').classList.remove('dropdown-menu');
/*
4. Используя метод insertAdjacentHTML добавьте после div'a с классом
"dropdown" следующую разметку:
  <a href="#">link</a>
*/
document.querySelector('div.dropdown').insertAdjacentHTML('afterend',
  '<a href="#">link</a>');
/*
5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
*/
document.querySelector('#dropdownMenuButton').id = 'superDropdown';
// document.querySelector('#dropdownMenuButton').setAttribute('id',
//   'superDropdown');
/*
6. Добавьте атрибут data-dd со значением 3 элементу у которого существует
атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
*/
const el = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
el.dataset.dd = 3;
/*
7. Удалите атрибут type у элемента с классом "dropdown-toggle".
*/
document.querySelector('.dropdown-toggle').removeAttribute('type');