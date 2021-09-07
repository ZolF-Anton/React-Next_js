const a: number = 5;
let b: number = 4;
let c: string = '4';
let cc = true;
// const ddd = a + cc

let d: string[] = ['sdd', 'sdsdsf', 'sdsds', 'sdsdsd'];

let e: any = 3; // не рекомендуется, типизация обязательна

function atest(a: string): number | string {
    return 7;
}

const btest2 = (a: number) => {
    return a * 2;
};

d = d.map((x) => x.toLocaleLowerCase());

function countCoord(coord: { lat: number; long: number }) {
    ///// Запись Вида long?: number  =  long: number | undefined - т.е. переменная не обязательна
}

//Безопасная проверка
function printIt(id: number | string) {
    if (typeof id === 'number') {
        console.log(id.toString());
    } else if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
}

function getSum(a: number | number[]) {
    if (Array.isArray(a)) {
    }
}

// Если функция ничего не возвращает, то нужно явно указать  void
function noReturn(a: string): void {
    return;
}

const x: undefined = undefined;
const z: null = null;
