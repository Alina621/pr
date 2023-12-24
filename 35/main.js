
let correctAnswers = [0, 1, 2];

let button = document.querySelector('#button')

let questions = document.querySelectorAll('#test > div')

button.addEventListener('click', e => {
    questions.forEach((question, index) => {
        let answers = question.querySelectorAll('input')

        const correct = correctAnswers[index]
        let hasCorrectAnswer = false

        answers.forEach((answer, index) => {
            if (index === correct && answer.checked) {
                hasCorrectAnswer = true
            }
        });

        if (hasCorrectAnswer) {
            question.querySelector('p').classList.add('right')
            question.querySelector('p').classList.remove('wrong')
        } else {
            question.querySelector('p').classList.remove('right')
            question.querySelector('p').classList.add('wrong')
        }
    });
})