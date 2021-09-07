"use strict";
var DirectionN;
(function (DirectionN) {
    DirectionN[DirectionN["Up"] = 1] = "Up";
    DirectionN[DirectionN["Down"] = 2] = "Down";
    DirectionN[DirectionN["Left"] = 3] = "Left";
    DirectionN[DirectionN["Right"] = 4] = "Right";
})(DirectionN || (DirectionN = {}));
var DirectionStr;
(function (DirectionStr) {
    DirectionStr["Up"] = "Up";
    DirectionStr["Down"] = "Down";
    DirectionStr["Left"] = "Left";
    DirectionStr["Right"] = "Right";
})(DirectionStr || (DirectionStr = {}));
//гетерогенные, микс из сток и чисел
var Decision;
(function (Decision) {
    Decision[Decision["Yes"] = 1] = "Yes";
    Decision["No"] = "No";
})(Decision || (Decision = {}));
var DecisionCalc;
(function (DecisionCalc) {
    DecisionCalc[DecisionCalc["Yes"] = 1] = "Yes";
    DecisionCalc[DecisionCalc["No"] = calcEnum()] = "No";
})(DecisionCalc || (DecisionCalc = {}));
function calcEnum() {
    return 2;
}
function runEnum(obj) { }
runEnum(DirectionStr);
// обратный маппинг
var Test2;
(function (Test2) {
    Test2[Test2["Al"] = 0] = "Al";
})(Test2 || (Test2 = {}));
var test3 = Test2.Al;
var nameA = Test2[test3]; //Al
var cc1 = 0 /* A */;
var Dice;
(function (Dice) {
    Dice[Dice["One"] = 1] = "One";
    Dice[Dice["Two"] = 2] = "Two";
    Dice[Dice["Three"] = 3] = "Three";
})(Dice || (Dice = {}));
function ruDice(dice) {
    switch (dice) {
        case Dice.One:
            return 'Орёл';
        case Dice.Two:
            return 'Решка';
        case Dice.Three:
            return 'Ребро';
        default:
            var akcio = dice;
    }
}
