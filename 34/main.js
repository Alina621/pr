
let button = document.querySelector('#button')

let questions = document.querySelectorAll('#test > div')

button.addEventListener('click', e => {
    questions.forEach(question => {
        let answers = question.querySelectorAll('input')

        let hasCorrectAnswer = false
        answers.forEach(answer => {
            if (answer.dataset.right === '' && answer.checked) {
                hasCorrectAnswer = true
            }
        })

        if (hasCorrectAnswer) {
            question.querySelector('p').classList.add('right')
            question.querySelector('p').classList.remove('wrong')
        } else {
            question.querySelector('p').classList.remove('right')
            question.querySelector('p').classList.add('wrong')
        }
    });
})