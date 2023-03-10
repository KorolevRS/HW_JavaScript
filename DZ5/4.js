"use strict";

/*
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна
фотография, используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене,
начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести
отсортированный массив в консоль.
*/

const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

console.log(products);
// const photoIs = products.filter(prod => prod.photos != undefined && prod.photos != '');//первый вариант
const photoIs = products.filter(prod => prod.photos !== undefined
  && prod.photos.length > 0);
console.log(photoIs);

// const sort = products.sort((a, b) => a.price > b.price ? 1 : -1);
// Описание метода sort(). Есть три возможных числа, которые отдадутся функцией:<0 (меньше нуля), 0, >0 (больше нуля).
// В первом случае, когда меньше нуля, a отсортируется с индексом меньшими, чем b.
// При нуле: a и b будут рассматриваться как равные и сортировка производиться не будет.
// Больше нуля: Сортировка b будет меньшего индекса, чем a.

console.log(products.sort((a, b) => a.price - b.price));

// Вышли за пределы 80 символов в длину строки в 34 строке, стоит перенести строку на новую. !== вместо == и !=, в данном случае лучше записать products.filter(prod => prod.photos !== undefined && prod.photos.length > 0);. Работает сейчас нормально, потому что js приводит самостоятельно в строку массив, не стоит отдавать js приводить автоматом значение. По сортировке - нужно обязательно возвращать 0, если числа равны, не -1, иначе для сортировки будет больше действий производиться. Для сравнения чисел можно просто одно из другого вычесть:
// products.sort((a, b) => a.price - b.price);
// Такое возможно потому что в этой функции, которую передаем в .sort принимается 2 значения из массива (можно считать два случайных значения) и функция должна вернуть отрицательное число, если первое значение (первый параметр) меньше второго, положительное значение надо вернуть, если первый параметр больше второго и 0, если значения равны между собой. При вычитании как раз будет возвращаться либо отриц. число, либо положительное, либо 0, если два элемента равны по цене.
// И еще момент - sort меняет сам массив, поэтому можно было просто вывести products, переменная sort не нужна.