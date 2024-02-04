// 1) Какие бывают алгоритмы сортировок ?

//Сортировка пузырьком, быстрая сортировка, сортировка вставками, циклическая сортировка

// 2) Прочитать про "Операторы и выражения, циклы в JS" +

// 3) Создать объект Person несколькими способами, после создать объект Person2, чтобы в нём были доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам.

const person = { name: "Kirill" };
const personTwo = new Object(person);
const personThree = Object.create({});

const person2 = { ...person };
Object.prototype.logInfo = () => {
  console.log(person);
};

// 4) Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.

class PersonThree {
  name;

  constructor(name){
    this.name = name;
  }
  get(){}

  set(){  }
}

class PersonThree extends Person {
  constructor(name) {
    super(name);
  }
  
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}


// БОНУС:
// 1) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;

//result = [4, 9]

//Сложность О(N^2)
const firstSum = (arr, total) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((arr[i] + arr[j]) == total) {
        result.push(arr[i], arr[j]);
        return result;
      }
    }
  }
};

// //Бинарная O(log N) (попытка оптимизировать цикл)
// const firstSumBinary = (arr, total) => {
//   let start = 0;
//   let end = arr.length;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);

//     if ((start + end) == total) {
//       return [start, end];
//     }
//     if ((start + end) < total) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return -1;
// };

console.log(firstSum(arr, total));
// console.log(firstSumBinary(arr, total));
// 2) Какая сложность у вашего алгоритма ?
// O(log N^2)
