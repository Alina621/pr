let rows = 3;
let cols = 3;

let table = document.querySelector('#field')

let colors = ['red', 'green', 'blue']; // Создаем массив colors

let steps = 0 //Устанавливаем начальное значение переменной

//Вызываем функцию createStepsCounter, передавая ей значение переменной steps и элемент таблицы.
createStepsCounter(steps, table)

createTableRows(table, rows, cols)

// создаем цикл для создания строк таблицы и вложенный цикл для создания ячеек в каждой строке
function createTableRows(table, rows, cols) { 
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr')

        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td')
// Внутри вложенного цикла создаем ячейку td и вызываем функцию randomColor для установки случайного цвета ячейки.
            randomColor(td, colors)
//обработчик события click к каждой ячейке, который вызывает функции для увеличения счетчика шагов, 
//изменения цвета ячейки, и проверки наличия победителя.

            td.addEventListener('click', e => {
                steps++

                updateStepsCounter(steps)

                changeColor(table, td, colors)

                isVictory(table, td)
            })

            tr.appendChild(td)
        }

        table.appendChild(tr)
    }
}

function getRandomInt(min, max) { //функция getRandomInt, которая возвращает случайное целое число в указанном диапазоне.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor(td, colors) { // randomColor выбираем случайный цвет из массива colors и добавляем его как класс к ячейке td.
    let randomColor = colors[getRandomInt(0, 2)]

    td.classList.add(randomColor)
}

function changeColor(table, td, colors) { // changeColor меняет цвет ячейки на следующий цвет из массива colors.
    let indexOfColor = colors.indexOf(td.classList[0])
    td.classList.remove(td.classList[0])

    let newColor = colors[(indexOfColor + 1) % colors.length]
    td.classList.add(newColor)
}

function isVictory(table, curTd) { //для проверки наличия победителя в игровом поле (или таблице) после каждого хода
    let Tds = table.querySelectorAll('td')
    let counter = 0
    for (const td of Tds) {
        if (curTd.classList[0] === td.classList[0]) {
            counter++
        }
    }
    
    if (counter === 9) {
        alert('Вы выиграли! Ураааа!!!')
    }
}

function createStepsCounter(steps) { //функция createStepsCounter, которая создает элемент <p> с текстом
    // "Количество ваших шагов: {steps}" и вставляет его перед таблицей.
    let wrapper = document.querySelector('.wrapper')
    let table_wrapper = document.querySelector('.table__wrapper')
    let p = document.createElement('p')
    p.textContent = `Количество ваших шагов: ${steps}`
    wrapper.insertBefore(p, table_wrapper)
}

function updateStepsCounter(steps){ //функция, которая должна обновлять счетчик шагов в игре
    let p = document.querySelector('p')
    p.textContent = `Количество ваших шагов: ${steps}`
}
