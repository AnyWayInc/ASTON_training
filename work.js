console.log({} == {}); // false
console.log([] == []); // false
console.log(true == 1); // true
console.log(false == 0); // true
console.log(false === ""); // false
console.log(typeof null); // object
console.log(typeof function () {}); // function


////////////////////////////////////////////////////////////////////////////////////////////////////

const res = "B" + "a" + (1 - "hello");
console.log(res); // ВаNaN

const res2 = (true && 3) + "d";
console.log(res2); //3d


const res3 = Boolean(true && 3) + "d";
console.log(res2); // Trued

////////////////////////////////////////////////////////////////////////////////////////////////////

var a = 10;
var b = 20;
a.b = 15;
console.log("a", a); //a 10
console.log("a.b", a.b); //'a.b' undefined
console.log(b); // 20

////////////////////////////////////////////////////////////////////////////////////////////////////

var a = { b: 1};
c = Object.create(a); 

console.log(c.b); // 1
delete c.b;
console.log(c.b); // 1
delete a.b;
console.log(c.b); // undefined
a.z = 2;
console.log(c.z); // 2
c.z = 3;
console.log(a.z); // 2

////////////////////////////////////////////////////////////////////////////////////////////////////

{/* <style>

.red {
  color: red;
}

.blue {
  color: blue;
}

</style>

<div className="red blue">Text 1</div> // 
<div className="blue red">Text 2</div> //  */}

////////////////////////////////////////////////////////////////////////////////////////////////////

var a = 1;

function foo() {
  console.log(a); // 1
}

function bar() {
  var a = 2;
  foo();
}

console.log(a); // 1

bar();

////////////////////////////////////////////////////////////////////////////////////////////////////

var l = 25;
var x = 11;

function bar(foo) {
  var x = 30;
  foo();
}

function foo() {
  console.log("x", x); 
}

foo.x = 20;
bar.x = 40;

bar(foo); // x 11

l.x = 100;

console.log("foo.x", foo.x); // foo.x 20
console.log(bar.l); // undefined
console.log(l.x); // undefined   

////////////////////////////////////////////////////////////////////////////////////////////////////

function fA() {
  const a = 10;
  function fB() {
    const b = 20;
    function fC() {
      const c = 30;
      console.log("c", c, "b", b, "a", a);
    }
    fC(); // 1
    console.log("b", b, "a", a);
  }
  fB(); // 2 
  console.log("a", a);
}

fA(); // 3

// c30b20a10
// b20a10
// a10

////////////////////////////////////////////////////////////////////////////////////////////////////

for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i); // 10...10
  }, 1000);
}


for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i); // 10...10
  }, 1000 * i + 1);
}



//1
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i); // 0...9
  }, 1000);
}

//2
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(this); // 0...9
  }.bind(i), 1000);
}

//3
for (var i = 0; i < 10; i++) {
  setTimeout(function (i) {
    console.log(i); // 0...9
  }, 1000, i);
}

//4
for (var i = 0; i < 10; i++) {
  setTimeout((function (i) {
    console.log(i); // 0...9
  }, 1000))
}(i)

//5
for (var i = 0; i < 10; i++) {
  let j = i
  setTimeout(function () {
    console.log(j); // 0...9
  }, 1000);
}

////////////////////////////////////////////////////////////////////////////////////////////////////

//Что выведет console.log и почему
function makeWorker() {
  let name = "Peter";

  return function () {
    console.log(name);
  };
}

var name = "John";

let work = makeWorker();

work(); // 

////////////////////////////////////////////////////////////////////////////////////////////////////

//? Что выведут console.log
const obj2 = {
  x: "yandex",
  a: function f() {
    console.log(this.x);
  },
  b: () => {
    console.log("arrow", this.x);
  },
};

obj2.a(); // yandex
obj2.b(); // undefined

////////////////////////////////////////////////////////////////////////////////////////////////////

function makeCounter() {
  let counter = 0; // 1
  return function () {
    return ++counter;
  };
}

let someCounter = makeCounter();

for (var i = 0; i < 10; i++) { // 9
  setTimeout(() => console.log(someCounter())); // 2...11
}

console.log(someCounter()); // 1

////////////////////////////////////////////////////////////////////////////////////////////////////

Promise.reject("a")
  .catch((p) => p + "b")
  .catch((p) => p + "с")
  .then((p) => p + "d")
  .then((p) => p + "f")
  .catch((p) => p + "h")
  .finally((p) => p + "e") // side-effect
  .then((p) => console.log(p)); // abdf


////////////////////////////////////////////////////////////////////////////////////////////////////

Promise.reject("a")
  .then(
    (p) => p + "1",
    (p) => p + "2" // Promise.resolve('a2')
  )
  .catch((p) => p + "b")
  .catch((p) => p + "с")
  .then((p) => p + "d1")
  .then("d2")
  .then((p) => p + "d3")
  .finally((p) => p + "e")
  .then((p) => console.log(p)); // a2d1d3

////////////////////////////////////////////////////////////////////////////////////////////////////

setTimeout(() => console.log("a"));

Promise.resolve()
  .then((first) => {
    console.log("first:", first);
    return "b";
  })
  .then(
    Promise.resolve().then((second) => {
      console.log("second: ", second);
      return "c";
    })
  )
  .then((third) => console.log("third:", third));

console.log("d"); 

// d first undefined second undefined third b a

////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("1");

setTimeout(() => console.log("2"), 1);

let promise = new Promise((resolve) => {
  console.log("3");
  resolve();
});

promise.then(() => console.log("4"));

setTimeout(() => console.log("5"));

console.log("6");

// 1 3 6 4 2 5

////////////////////////////////////////////////////////////////////////////////////////////////////

let a = 5;

console.log(a);

setTimeout(() => {
  console.log(a);
  a = 10;
}, 0);

Promise.resolve().then(() => {
  console.log(a);
  a = 15;
});

console.log(a);

// 5 5 5 15

////////////////////////////////////////////////////////////////////////////////////////////////////

let a = 10; // 35

setTimeout(function timeout() {
  console.log(a);
  a = 30;
}, 0);

let p = new Promise(function (resolve, reject) {
  console.log(a); // 10
  a = 35;
  resolve();
});

p.then(function () {
  console.log(a);
  a = 40;
});

console.log(a);

// 10 
// 35
// 35
// 40

////////////////////////////////////////////////////////////////////////////////////////////////////

const myPromise = Promise.resolve(Promise.resolve("Promise!"));

function funcOne() {
  myPromise
    .then((res) => res) 
    .then((res) => console.log(res, "Результат funcOne"));
  setTimeout(() => console.log("Timeout! 1", 0));
  console.log("Last line! 1");
}

async function funcTwo() {
  const res = await myPromise;
  console.log(res, "Результат funcTwo");
  setTimeout(() => console.log("Timeout! 2", 0));
  console.log("Last line! 2");
}

funcOne();
funcTwo();

//  "Last line! 1"
//  'Promise! "Результат funcTwo"
//  "Last line! 2"
//  'Promise! "Результат funcOne"
//  Timeout! 1
//  Timeout! 2

////////////////////////////////////////////////////////////////////////////////////////////////////

queueMicrotask(() => {
  console.log("1");
});

Promise.reject("2")
  .catch((res1) => {
    console.log("res1", res1);
    return "4";
  })
  .then((res2) => {
    console.log("res2", res2);
  });

queueMicrotask(() => {
  console.log("3");
});

//  1
//  res1 2
//  3
//  res2 4

////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("Start");

const observer = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Observer: Событие произошло");
    resolve("Success");
  }, 2000);
});

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 1: Событие произошло");
    resolve("Success");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 2: Событие произошло");
    resolve("Success");
  }, 1500);
});

observer.then(() => {
  console.log("Observer: Обработка события");
});

Promise.all([promise1, promise2]).then(() => {
  console.log("Promise: Все события обработаны");
});

 console.log("End");

// start 
// end
// Promise 1: Событие произошло
// Promise 2: Событие произошло
// Promise: Все события обработаны
// Observer: Событие произошло
// Observer: Обработка события


////////////////////////////////////////////////////////////////////////////////////////////////////

const myNewPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve("Успешный результат: " + randomNumber);
    } else {
      reject("Неудача: " + randomNumber);
    }
  }, 1000);
});

myNewPromise
  .then((result) => {
    console.log("Промис выполнен успешно:", result);
  })
  .catch((error) => {
    console.log("Промис был отклонен с ошибкой:", error);
  })
  .finally(() => {
    console.log("Завершение выполнения промиса");
  });

  
const promise11 = new Promise((resolve) => setTimeout(() => resolve(1), 3000));
const promise22 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));

Promise.all([promise11, promise22]).then((results) => {
  console.log("Оба промиса выполнены успешно:", results);
});

const racePromise1 = new Promise((resolve) =>
  setTimeout(() => resolve(1), 3000)
);

const racePromise2 = new Promise((resolve) =>
  setTimeout(() => resolve(2), 2000)
);

Promise.race([racePromise1, racePromise2]).then((result) => {
  console.log("Первый завершившийся промис:", result);
});

////////////////////////////////////////////////////////////////////////////////////////////////////

function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Успешное выполнение");
    }, 1000);
  });
}

async function myAsyncFunction() {
  try {
    console.log("Начало выполнения асинхронной функции");

    const result = await getPromise();
    console.log("Результат промиса:", result);

    console.log("Завершение выполнения асинхронной функции");
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}

myAsyncFunction();

console.log("Последующий код");

// "Начало выполнения асинхронной функции"
// "Последующий код"
//  "Результат промиса:"   Успешное выполнение
//

