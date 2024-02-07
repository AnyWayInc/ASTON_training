// 1

// let promiseTwo = new Promise((resolve, reject) => {
//    resolve("a");
// });

// promiseTwo
// .then((res) => {
//    return res + "b";
// })
// .then((res) => {
//    return res + "с";
// })
// .finally((res) => {
//    return res + "!!!!!!!";
// })
// .catch((res) => {
//    return res + "d";
// })
// .then((res) => {
//    console.log(res);
// });

//Вывод по 1:
// abc

// 2
// function doSmth() {
//    return Promise.resolve("123");
// }

// doSmth()
// .then(function (a) {
//    console.log("1", a); //
//    return a;
// })
// .then(function (b) {
//    console.log("2", b);
//    return Promise.reject("321");
// })
// .catch(function (err) {
//    console.log("3", err);
// })
// .then(function (c) {
//    console.log("4", c);
// return c;
// });

//Вывод по 2:
// 1 123 
// 2 123
// 3 321
// 4 undefined

// 3) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
// Входные данные: [10, 12, 15, 21]

let arr = [10, 12, 15, 21]

//Реализация через setInterval 
async function getIndexOfArray(arr){
  let i = 0
  let interval = setInterval(function(){
    console.log(i,arr[i])
    i++
    if(i>= arr.length){clearInterval(interval)}
  },1800)
}

//Реализация через setTimeout 
async function getIdexArray (arr){
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => console.log(i), 3000 * (i + 1));
  }
};

// getIndexOfArray(arr)

// 4) Прочитать про Top Level Await (можно ли использовать await вне функции async)

//Да, так как await верхнего уровня позволяет модульной системе заботиться о разрешении промисов и их взаимодействии между собой.

// БОНУС ЗАДАНИЕ 
/* Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом.
Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает
Promise с содержимым страницы или вызывает reject */

async function fetchUrlPromise(url){
  for (let n = 0; n < 5; n++) {
    try {
      return await fetch(url)
    } catch (err) { }
  }
  throw new Error('error')
}

fetchUrl('https://google/com&#39')
// .then(...)
// .catch(...) // сatch должен сработать только после 5 неудачных попыток
// получить содержимое страницы внутри fetchUrl