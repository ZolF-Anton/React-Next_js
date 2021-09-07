enum DirectionN {
    Up = 1,
    Down,
    Left,
    Right,
}
enum DirectionStr {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

//гетерогенные, микс из сток и чисел

enum Decision {
    Yes = 1,
    No = 'No',
}

enum DecisionCalc {
    Yes = 1,
    No = calcEnum(),
}

function calcEnum() {
    return 2;
}
function runEnum(obj: { Up: string }) {}

runEnum(DirectionStr);

// обратный маппинг

enum Test2 {
    Al,
}
let test3 = Test2.Al;
let nameA = Test2[test3]; //Al

const enum ConstEnum {
    A,
    B,
}

let cc1 = ConstEnum.A;

enum Dice {
    One = 1,
    Two,
    Three,
}

function ruDice(dice: Dice) {
    switch (dice) {
        case Dice.One:
            return 'Орёл';
        case Dice.Two:
            return 'Решка';
        case Dice.Three:
            return 'Ребро';
        default:
            const akcio: never = dice;
    }
}
