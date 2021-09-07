"use strict";
var a = 5;
var b = 4;
var c = '4';
var cc = true;
// const ddd = a + cc
var d = ['sdd', 'sdsdsf', 'sdsds', 'sdsdsd'];
var e = 3; // не рекомендуется, типизация обязательна
function atest(a) {
    return 7;
}
var btest2 = function (a) {
    return a * 2;
};
d = d.map(function (x) { return x.toLocaleLowerCase(); });
function countCoord(coord) {
    ///// Запись Вида long?: number  =  long: number | undefined - т.е. переменная не обязательна
}
//Безопасная проверка
function printIt(id) {
    if (typeof id === 'number') {
        console.log(id.toString());
    }
    else if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
}
function getSum(a) {
    if (Array.isArray(a)) {
    }
}
// Если функция ничего не возвращает, то нужно явно указать  void
function noReturn(a) {
    return;
}
var x = undefined;
var z = null;
