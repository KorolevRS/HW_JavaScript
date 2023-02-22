"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. Найти по id, используя getElementById, элемент с id равным "super_link" и
вывести этот элемент в консоль.
*/
console.log(document.getElementById('super_link'));
console.log(document.querySelector('#super_link'));
/*
2. Внутри всех элементов на странице, которые имеют класс "card-link",
поменяйте текст внутри элемента на "ссылка".
*/
const textLink = document.querySelectorAll('.card-link');
textLink.forEach(element => {
    element.textContent = "Ссылка";
});
/*
3. Найти все элементы на странице с классом "card-link", которые лежат в
элементе с классом "card-body" и вывести полученную коллекцию в консоль.
*/
console.log(document.querySelectorAll('.card-body .card-link'));
/*
4. Найти первый попавшийся элемент на странице у которого есть атрибут
data-number со значением 50 и вывести его в консоль.
*/
console.log(document.querySelector('[data-number="50"]'));
/*
5. Выведите содержимое title страницы в консоль.
*/
console.log(document.querySelector('title').textContent);
/*
6. Получите элемент с классом "card-title" и выведите его родительский узел
в консоль.
*/
console.log(document.querySelector('.card-title').parentNode);
/*
7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный
тег в начало элемента, который имеет класс "card".
*/
const elemParagraph = document.createElement('p');
elemParagraph.textContent = "Привет";
const productCard = document.querySelector('.card');
// productCard.appendChild(elemParagraph);//вставка узла в конце блока
//appendChild применим только к узлам
productCard.prepend(elemParagraph);//вставка узла(и не только
//может быть и строка) в начале блока
// node.append(...nodes or strings) – добавляет узлы или строки в конец node,
// node.prepend(...nodes or strings) – вставляет узлы или строки в начало node
// node.before(...nodes or strings) –- вставляет узлы или строки до node,
// node.after(...nodes or strings) –- вставляет узлы или строки после node,
// node.replaceWith(...nodes or strings) –- заменяет node заданными 
//узлами или строками.

/*
8. Удалите тег h6 на странице.
*/
const elemh6 = document.querySelector('h6');
elemh6.remove();
