'use strict';

let timeoutId; //Переменная для таймера 
const timer = document.querySelector('#timer')  //выбор элемента с id "timer"
let remain_time = 50; 

//Таймер 
function DownTimer(remain_time, timer) { //для таймера обратного отсчета
    timer.textContent = `${remain_time}`
    if (remain_time <= 0) { 
        alert('Вы проиграли') 
    } else { 
        timeoutId = setTimeout(() => { 
            remain_time--; 
            DownTimer(remain_time, timer); 
        }, 1000); 
    } 
} 

const game_board = document.querySelector('.game_board') //Константа game_board для выбора элемента с классом "game_board"

//Случайные ячейки
const random_ceils_arr = [] //Массив random_ceils_arr для хранения случайных значения ячеек
while (random_ceils_arr.length < 11) { //Перебор циклом while для заполнения массива случайными значениями
    const randomCell = Math.floor(Math.random() * 100) 
    if (!random_ceils_arr.includes(randomCell)) { 
        random_ceils_arr.push(randomCell) 
    } 
} 
let remain_click = 10; //Переменная remain_click для хранения оставшегося количества кликов (начальное значение 10)

//Ячейки
DownTimer(remain_time, timer); 
for (let i = 0; i < 100; i++) { //Создание 100 ячеек и добавление их в game_board
    const ceil = document.createElement('div') 
    ceil.className = 'ceil'; 
    ceil.dataset.id = i; 

    ceil.addEventListener('click', e => { 
        const ceil_event = e.target; 
        if (!ceil_event.classList.contains("clicked")) { //Добавление обработчика события клика на каждую ячейку,
            // проверка наличия класса "clicked" и изменение цвета ячейки в случае попадания по случайному значению
            ceil_event.classList.add('clicked') 

            if (random_ceils_arr.includes(+ceil_event.dataset.id)) { 
                remain_click--; 
                if (remain_click === 0) { 
                    alert('Поздравляю, вы выиграли!') 
                    clearTimeout(timeoutId); 
                } else {
                    ceil_event.style.backgroundColor = 'green';
                }
            } 
        } 
    }) 

    game_board.appendChild(ceil); 
}