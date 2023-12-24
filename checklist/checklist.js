let input = document.querySelector('#id'); //Вначале происходит получение элементов input с id "id" и ul с id "list" из DOM.
let list = document.querySelector('#list');

//Затем устанавливается обработчик события "keypress" для элемента input. 
//Когда пользователь нажимает клавишу "Enter", выполняется функция.
input.addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
        let li = document.createElement('li');

        let task = document.createElement('span');
        task.classList.add('task');// для каждого пункта списка добавляются элементы span для задачи (task)
        // и для удаления (remove), 
        //а также элемент span для отметки выполненной задачи (mark).
        task.textContent = this.value;
        task.addEventListener('dblclick', function() { //Для элемента span задачи (task) добавляется обработчик события "dblclick". 
        //При двойном щелчке создается новый элемент input, который заменяет отображаемый текст задачи. 
         //Затем, при нажатии клавиши "Enter" внутри input, введенный текст становится содержимым задачи, а элемент input удаляется.
            let inner_input = document.createElement('id')
            inner_input.textContent = task.textContent
            task.textContent = ''
            li.insertBefore(inner_input, remove)//Для элемента span удаления (remove) добавляется обработчик события "click".
            // При щелчке на эту кнопку соответствующая задача удаляется из списка.

            inner_input.addEventListener('keypress', e => {
                if (e.key == 'Enter') { 
                    inner_input.remove()
                    task.textContent = inner_input.value
                }
            })
        });
        li.appendChild(task);
       
        let remove = document.createElement('span');
        remove.classList.add('remove');
        remove.textContent = 'Удалить';
        remove.addEventListener('click', function () {
            li.remove()
        });

        li.appendChild(remove);
        //Для элемента span отметки выполненной задачи (mark) также добавляется обработчик события "click".
        // При щелчке на эту кнопку состояние выполнения задачи обновляется путем добавления/удаления класса 'done'.

        let mark = document.createElement('span');
        mark.classList.add('mark');
        mark.textContent = 'Выполнено!';
        mark.addEventListener('click', function() {
            task.classList.toggle('done')
        });
        li.appendChild(mark);

        list.appendChild(li);
        //После добавления задачи, поле ввода задачи очищается.

        this.value = '';
    }
});