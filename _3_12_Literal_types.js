"use strict";
var c1 = 'test';
function performAction(action) {
    // принимаем на вход литеральный стоковый тип, а возвращаем 1 или -1
    switch (action) {
        case 'down':
            return -1;
        case 'up':
            return 1;
    }
}
function performAction2(action) {
    //
    switch (action) {
        case 'down':
            return -1;
        case 'up':
            return 1;
    }
}
