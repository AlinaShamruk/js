// Составить программу для решения квадратного уравнения a∗x∗x+b∗x+c=0.

// let x = 8;
// let y = 7;
// let z = 4;

// function discriminant(a, b, c) {

//     let D = (b * b - (4 * a * c));
//     return D;
// };

// let newD = discriminant(x, y, z);
// console.log(newD);

// if (newD > 0) {
//     let x1 = (-y + Math.sqrt(y * y - (4 * x * z))) / (2 * x);
//     let x2 = (-y - Math.sqrt(y * y - (4 * x * z))) / (2 * x);
//     console.log(x1, x2);
// } else if (newD = 0) {
//     let x1 = -y / 2 * x;
//     console.log(x1);

// } else {
//     console.log("Нет решения")
// };

// В последовательности целых чисел определить количество положительных чисел и количество элементов,
// значения которых находятся в интервале –10 до -20.


let steps = 0;
let tap = 0;
let arr= [];

for (i = -20; i <= 10; i++) {

    if (i > 0) {
        steps += 1;
        tap += 1;
    } else {
        tap += 1;
    }
}
console.log(steps, tap)