

const historicalEvents = {    
    1914: [
        {
            description: "28.07.1914г Начало Первой мировой войны."
        }
    ],

    1917: [
        {
            description: "Февраль - ноябрь 1917г Великая российская революция"
        },
        {
            description: "Февраль – март 1917г Февральский переворот и падение монархии"
        },
        {
            description: "26 февраля 1917г Расстрел демонстрации на Знаменской площади Петрограда, переход части воинских частей на сторону восставших"
        },
        {
            description: "1 сентября 1917г Провозглашение России республикой"
        }
    ],

    1918: [
        {
            description: "Январь 1918г Cоздание регулярной Красной Армии (РККА)"
        },
        {
            description: "3 марта 1918г Подписание советским правительством Брестского мира с Германией и выход России из Первой мировой войны"
        },
        {
            description: "1918г Признание советским правительством независимости Финляндии"
        }

    ],

    1920: [
        {
            description: "1920г Заключение Советской Россией мирных договоров с Литвой, Латвией и Эстонией."
        },
        {
            description: "Апрель – октябрь 1920г Боевые действия в ходе советско-польской войны"
        },
        {
            description: "Ноябрь 1920г Разгром армии П.Н. Врангеля в Крыму"
        }
    ],

    1921: [
        {
            description: "1921г Рижский мир с Польшей"
        },
        {
            description: "Март 1921г Восстание в Кронштадте"
        }
    ],

    1922: [
        {
            description: "30 декабря 1922 г Создание СССР"
        },
        {
            description: "29.04.1969' Начало конфликта на острове Тайвань между Китаем и Тайванем."
        }
    ],

    1923: [
        {
            description: "1923 г 6 июля — ЦИК СССР утвердил первый Герб СССР"
        },
        {
            description: "1923 г 19 июня — капитулировали остатки белых войск Пепеляева на побережье Охотского моря. Фактическое завершение Гражданской войны в России"
        }
    ],
    1927: [
        {
            description: "1927г Учреждение звания «Герой Труда»"
        }
    ],

    1930: [
        {
            description: "1930г Ликвидация массовой безработицы, закрытие бирж труда"
        }
    ],

    1933: [
        {
            description: "1933г 19 октября — германское правительство объявило о выходе государства из Лиги Наций."
        },
        {
            description: "1932-1933гг  Голод в СССР"
        }
    ],

    1936: [
        {
            description: "1936г Принятие новой Конституции СССР"
        }
    ],

    1939: [
        {
            description: "1939г 1 сентября Нападение нацистской Германии на Польшу. Начало Второй мировой войны."
        },
        {
            description: "1939г 26 ноября — СССР заявил о провокации со стороны финских пограничников в районе деревни Майнила, что стало поводом для объявления войны Финляндии."
        }
    ],

    1949: [
        {
            description: "1949г август Первое испытание атомной бомбы в СССР. Закончился период атомной монополии США."
        },
        {
            description: "1949г 4.03. В СССР Вышинский сменяет Молотова в должности министра иностранных дел."
        }
    ],

    1951: [
        {
            description: "1951г 30 декабря — официально прекратил действие план Маршалла"
        }
    ],
};

let table = document.querySelector('.events')
let input = document.querySelector('.input')

function printEvents() {
    let input_value = input.value.toLowerCase()

    let rows = document.querySelectorAll('.events__row')
    rows.forEach(row => {
        if (row) {
            row.remove()
        }
    });


    if (input_value.length > 0) {


            for (const events of historicalEvents[input_value]) { //перебор всех событий для указанного года и для каждого создается новая строка таблицы, в которую добавляется описание события
                let tr = document.createElement('tr');
                tr.classList.add('events__row');
            
                let td_2 = document.createElement('td');
                td_2.classList.add('events__cell');
                td_2.textContent = events['description'];
                tr.appendChild(td_2);

                table.appendChild(tr)
            }
        } else {
            alert(`Попробуйте ввести другой год`)
        }

    }



input.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        printEvents()
    }
})