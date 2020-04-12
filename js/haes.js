let startNum = prompt("Введите число");

function haes() {   
    let verh = 0; //max value
    let steps = 0; // steps
    let pos = []; // создаем массив, чтобы записать потом туда числа
    for (steps = verh; steps >= 0; steps++) {
        if (steps == 0) pos.push(startNum); // записываем первое число, которое вводим в промте
        if (startNum % 2 == 0) startNum /= 2;
        else startNum = startNum * 3 + 1;
        if (startNum > verh) verh = startNum;
        pos.push(startNum); // записываем все числа , которые были получены по условиям цикла
        if (startNum == 1) break;
    }
    alert(`Результат:
        Последовательность: ${pos.join(" ")}   // объединяет числа массива в одну строку
        Шагов:   ${(steps + 1)}  
        Вершина:  ${verh}`); // вычисление максимального значения
};
haes(startNum); 

 