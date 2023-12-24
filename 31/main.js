let answers = [
    'ответ 1',
    'ответ 2',
    'ответ 3',
];

const button = document.querySelector('#button')
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