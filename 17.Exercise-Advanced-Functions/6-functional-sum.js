// function add(x) {
//     function sum(y) {
//         x += y;
//         return sum;
//     }
//     sum.toString = () => x;
//     return sum;
// }

// console.log(add(1)(2).toString());

let add = (function () {
    let sum = 0;

    return function add() {
        sum += arguments[0];

        add.toString = function () {
            return sum;
        }

        return add;
    }
})();

console.log(add(1)(2).toString());