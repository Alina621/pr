
const button = document.querySelector('#button')

let answers = [
    'ответ 1',
    'ответ 2',
    'ответ 3',
];

let questions = [
	'вопрос 1?',
	'вопрос 2?',
	'вопрос 3?'
];

for (const question of questions) {
    let div = document.createElement('div')

    let p = document.createElement('p')
    p.textContent = question

    let input = document.createElement('input')

    div.appendChild(p)
    div.appendChild(input)
    document.querySelector('#test').insertBefore(div, button)
}


const inputs = document.querySelectorAll('input')

button.addEventListener('click', e => {
    for (let i = 0; i < answers.length; i++) {
        if (inputs[i].value === answers[i]) {
            inputs[i].classList.remove('wrong')
            inputs[i].classList.add('right')
        } else {
            inputs[i].classList.remove('right')
            inputs[i].classList.add('wrong')
        }
    }
});