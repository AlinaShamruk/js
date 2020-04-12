// 1.Слова палиндромы. Узнать является ли строка палиндромом.
// Слово палиндром - может читаться справа-налево и слева-направо одинаково. Прим “шалаш”.

// function isPalindrome() {
//     let str = prompt('enter the world');
//     str = str.toLowerCase();

//     if ((str === str.split('').reverse().join(''))&& (str !== '') && (str !== ' ')) {
//         alert('yes');
//     } else {
//         alert('no');
//     }
// }
// isPalindrome();

// // 2. Массив уникальных случайных цифр. Создадим массив для семи элементов;
// // Заполним его случайными цифрами от 0 до 10;
// // Цифры в массиве не должны повторяться;
// // Вывести этот массив в консоль;
// // Упорядочить массив;
// // Еще раз вывести его в консоль.


// function random() {
//     let arr = [];
//     while (arr.length <= 6) {
//         let a = Math.floor((Math.random() * 10) + 1);
//         if (arr.indexOf(a) == -1) {
//             arr.push(a);
//         }
//     };
//     console.log(arr);
//     console.log(arr.sort(function (a, b) {
//         return a - b;
//     }));
// };
// random();





// 3.Замена элементов массива. Создадим массив с десятью случайными элементами от 0 до 100;
// Напишем инструкцию, которая будет заменять все “0” на строку “zero”;
// Выводим полученный массив в консоль.
// прим. [12, 53, “2zero”, 18, 22, “1zerozero”, 43, 57, “5zero”, 1];


function zero() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        let a = String(Math.floor((Math.random() * 1000) + 1));

        if (arr.indexOf(a) == -1) {
            if (a % 10 == 0) {
                arr.push(a.replace(/0/g, 'zero'));
            } else {
                arr.push(Number(a));
            }
        };
    };
    console.log(arr);
};
zero();


// function toZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       arr[i] = arr[i].toString().replace(/0/g, "zero");
//     }
//     return arr;
//   }
  
//   let arr = [];
//   for (let i = 0; i < 10; i++) {
//     let a = Math.round(Math.random() * 1000);
//     arr.push(a);
//   }
//   toZero(arr);
//   console.log(arr);