// Задание 1 – Создать объект counter всеми возможными способами;

const counter = {city: 'Moscow'}

const counter2 = new Object;
counter2.city = 'New York';


// Задание 2 – Скопировать объект counter всеми возможными способами;

const copyOfCounter = Object.assign({},counter);
const copyOfCounter2 = {...counter}

let copyOfCounter3 = {}; 

for (let key in counter) {
    copyOfCounter3[key] = counter[key];
}

// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;

function makeCounter(){}

const makeCounter2 = ()=>{}


// Бонус
// Задание 1 – Написать функцию глубокого сравнения двух объектов:


const obj1 = { here: { is:"on", other: "3" }, object: "Y" };

const obj2 = { here: { is:"on", other: "3" }, object: "Y" };

const deepEqualJSON = (obj1, obj2) => {
    if(JSON.stringify(obj1) !== JSON.stringify(obj2)){
        return false
    }
    return true
};

const deepEqual = (obj1, obj2) => {
    const areObj = typeof obj1 === 'object' && typeof obj2 === 'object'
    const notNull = obj1 !== null && obj2 !== null
    if(areObj && notNull){
        for(let key in obj1){
            if(!obj2.hasOwnProperty(key)) return false
            if(typeof obj1[key] === 'object' && typeof obj2[key] === 'object'){
                const result = deepEqual(obj1[key],obj2[key]);
                if(!result) return false
            }else{
                if(obj1[key] !== obj2[key]){
                    return false
                }
            }
        }
        return true
    } else{
        return obj1 === obj2
    }
}

// console.log(deepEqual(obj1, obj2))

// Бонус 
// Задание 2 – Развернуть строку в обратном направлении при помощи методов массивов:

function reverseStr(str) {
    return str.split('').reverse().join('')
}

// console.log(reverseStr('asdsadsd dsadas asdas'));