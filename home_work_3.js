// 1) Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?

// Массивы совмещают в себе следующие структуры данных: стэк, очередь, двустроннюю очередь, упорядоченный список
// Массив в JS гетерогенный (может хранить в себе данные разных типов) и динамический (позволяет изменять длину массива). Реализован как частный случай хэш-таблиц.

// 2) Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger.apply(obj)

logger.call(obj)

const returnFunc = logger.bind(obj)();

// Бонус задание: Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()

Function.prototype.myBind = (context) => {
    const contextFunc = this;
    return function(...args){
        return contextFunc.apply(context,args)
    }
}