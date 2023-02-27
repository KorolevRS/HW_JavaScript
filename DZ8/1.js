"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все
теги будут созданы браузером.
*/
document.addEventListener('DOMContentLoaded', () => {
    console.log('все теги прогрузились');
});
// 1. Идеально.
/*
2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все
ресурсы страницы будут загружены.
*/
window.addEventListener('load', () => {
    console.log('страница загрузилась');
});
// 2. Идеально.
/*
3. При клике на какой-либо тег на странице в консоль должно выводиться
сообщение наподобие:
Класс "super_element" присутствует в элементе "div".
сообщение должно определять, присутствует или отсутствует класс 
"super_element" у элемента, а также выводить в нижнем регистре верный тег 
в данной строке, по которому был совершен клик.
Необходимо использовать делегирование.
*/
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('super_element')) {
        console.log(`Класс "${event.target.classList
            }"присутствует в элементе "${event.target.tagName.toLowerCase()}"`);
    } else {
        console.log('Класс "super_element" отсутствует в данном элементе');
    }
});
// 3. Тоже отлично все.
// Тут две строки отличаются только одним словом, я бы сделал что-то вроде:

// const containStr = event.target.classList.contains('super_element') 
//   ? 'присутствует' : 'отсутствует';
// console.log(`Класс "super_element" ${containStr} в элементе "${event.target.tagName.toLowerCase()}".`);
// Но это просто информация, не придирка даже.
/*
4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение:
"Вы навели на textarea."
*/
document.addEventListener('mouseover', (e) => {
    if (e.target.tagName.toLowerCase() === 'textarea') {
        console.log('Вы навели на textarea');
    }
});
/* 4. Идеально :)*/
/*
5. Необходимо повесить событие клика на тег ul. В обработчике события в
консоль необходимо выводить текст, который записан внутри элемента кнопки,
по которой был произведен клик.
Если клик был не по кнопке, то ничего выводить не нужно.
Необходимо использовать делегирование.
Если у вас получается другой порядок вывода, значит, скорее всего, вы неверно
использовали, либо вовсе не использовали, делегирование в 3 и 5 заданиях.
*/
document.querySelector('ul').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        console.log(e.target.textContent);
    }
});
// 5. Отлично. Только ставьте лучше ===, не == всегда.
/*
6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только
потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul?
Ответ необходимо написать здесь же, под этим комментарием, своими словами.
*/
// В задании номер 3 мы поймали элемент button  с классом 'super_element', который находится ниже чем элемент ul (пойманный в задании 5) в структуре DOM.  То есть чем выше элемент в структуре DOM, тем быстрее к нему можно обратиться.
/*6. Я может не очень понял про что вы написали, вроде как правильно, но немного смущает ответ :) Обработчики в заданиях мы вешаем на разные теги, да. Когда происходит событие (клик в нашем случае), событие сначала погружается до элемента, на который был клик, после чего начинает всплывать, во время всплытия и срабатывают события, сначала событие срабатывает на теге куда кликнули, потом идет к родителю, срабатывает у него, потом к родителю родителя и так далее пока не дойдет до конечного window. Так как тег ul встретится раньше чем document, во время всплытия, в console.log мы увидим сначала текст из 5-го задания, потом только из 3-го, это вы написали :) Может просто плохо понял вас ;)*/
/*
7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
*/
// const elemLi = document.querySelectorAll('li');
// for (let i = 0; i < elemLi.length; i++) {
//     if (i % 2 != 0) {
//         elemLi[i].style.width = '300px';
//         elemLi[i].style.backgroundColor = 'green';
//     }
// }
const elemLi = document.querySelectorAll('li');
for (let i = 1; i < elemLi.length; i += 2) {
    elemLi[i].style.width = '300px';
    elemLi[i].style.backgroundColor = 'green';
}
// 7. Проще выбрать сразу нужные элементы, чем заставлять js выгребать все элементы и какие-то просто пропускать :) Но это на вкус и цвет, не претензия.
// Отличная работа, Роман, отлично поработали.