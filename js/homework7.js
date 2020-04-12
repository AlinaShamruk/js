// 1. Создать функцию которая принимает числа N,M. Возвращает матрицу А(N,M) заполненную случайными числами от -100 до 100.


function matrixArr(rows, columns) {
    let arr = [];
    let min = -100;
    let max = 100;
    for (i = 0; i < rows; i++) {
        let row = [];
        for (j = 0; j < columns; j++) {
            let random = Math.floor(Math.random() * (max - min)) + min;
            row.push(random);
        };
        arr.push(row);
    }
    console.log(arr);
    return arr;
};
matrixArr(2,3)







// let matrix = matrixArr(1, 5);

// // 2. Сгенерировать матрицу А(N,M). Составить программу нахождения максимального элемента матрицы и выделения его местоположения.

// function getMaxValue(maximum) {
//     let maxNew = maximum[0];
//     let maxx = maxNew;
//     for (i = 0; i < maximum.length; i++) {
//         if (maximum[i] > maxx) {
//             maxx = maximum[i];
//         }
//     }
//     console.log(maxx);
//     return maxNew;




// }
// getMaxValue(matrix);




