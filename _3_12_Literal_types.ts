let c1: 'test' = 'test';

type actionType = 'up' | 'down';

function performAction(action: actionType): -1 | 1 {
    // принимаем на вход литеральный стоковый тип, а возвращаем 1 или -1
    switch (action) {
        case 'down':
            return -1;
        case 'up':
            return 1;
    }
}

function performAction2(action: actionType | ComplexAction) {
    //
    switch (action) {
        case 'down':
            return -1;
        case 'up':
            return 1;
    }
}
interface ComplexAction {
    s: string;
}
