
let input = document.querySelector('.input')
let keys = document.querySelectorAll('.keyboard_key')
let caps = document.querySelector('.keyboard__caps')

keys.forEach(key => {  //позволяет перебрать элементы любого объекта, реализующего интерфейс такого как массивы, списки, множества и другие коллекции
    key.addEventListener('click', e => { //добавляем обработчик события клика, который при клике добавляет текстовое содержимое элемента key к значению input
        input.value += e.target.textContent
    })
});

caps.addEventListener('click', e => { // обработчик события клика на элемент caps, который при клике преобразует значение input в верхний регистр
    input.value = input.value.toUpperCase()
})

