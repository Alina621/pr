//для выбора различных элементов в DOM, такие как wrapper (обертка),
// стрелки для переключения месяцев и элемент, показывающий текущий месяц.
let wrapper = document.querySelector('.wrapper')
let date_arrow_left = document.querySelector('.date__arrow--left')
let date_arrow_right = document.querySelector('.date__arrow--right')
let date_info = document.querySelector('.month_year')

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

let delta = 0 //Переменная delta содержит смещение месяца относительно текущего.

const date = new Date() //создает новый объект предоставляющий текущую дату и время
const curMonth = date.getMonth()
const curYear = date.getFullYear()
const curDay = date.getDate() //переменная которая получает текущее число месяца

function updateCalendar(delta = 0) {//Функция updateCalendar(delta) обновляет календарь с учетом смещения месяца.
    // Если уже есть список ul внутри элемента с классом "wrapper", он удаляется. Затем создается новый список ul ('контейнер'), содержащий элементы li с днями месяца. 
    //Если текущий день совпадает с днем месяца, 
    //добавляется класс "active". Новый список ul добавляется в обертку (wrapper).

    let uls = document.querySelector('.calendar')
    if (uls) {
        uls.remove()
    }

    let ul = document.createElement('ul')
    ul.classList.add('calendar')

    const lastDayOfMonth = new Date(curYear, curMonth + 1 + delta, 0); //объект который представляет последний день месяца на основе текущего года
    
    const nameOfMonth = lastDayOfMonth.getMonth()
    const yearOfMonth = lastDayOfMonth.getFullYear()
    const countDaysOfMonth = lastDayOfMonth.getDate();

    for (let i = 1; i <= countDaysOfMonth; i++) {
        let li = document.createElement('li')
        li.textContent = i
        li.classList.add('calendar__item')

        if (curMonth === lastDayOfMonth.getMonth() && curYear === lastDayOfMonth.getFullYear() && curDay === i) { //если равны добавляем актив
            li.classList.add('active')
        }

        ul.appendChild(li)

        wrapper.appendChild(ul)
    }

    date_info.textContent = `${months[nameOfMonth]} ${yearOfMonth}`
}

updateCalendar(0)

date_arrow_left.addEventListener('click', e => {
    updateCalendar(delta -= 1)
})

date_arrow_right.addEventListener('click', e => {
    updateCalendar(delta += 1)
})
