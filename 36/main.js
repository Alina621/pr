let questions = [
	{
		text: 'вопрос 1?',
		right: 0,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 2?',
		right: 1,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 3?',
		right: 2,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
];

let test_body = document.querySelector('#test')
let button = document.querySelector('#button')

let counter = 1
for (const question of questions) {
    let div = document.createElement('div')
    let p = document.createElement('p')
    p.textContent = question['text']
    div.appendChild(p)

    for (const variant of question['variants']) {
        let label = document.createElement('label')
        
        let input = document.createElement('input')
        input.type = 'radio'
        input.name = counter

        let span = document.createElement('span')
        span.textContent = variant

        
        label.appendChild(input)
        label.appendChild(span)

        
        div.appendChild(label)

        
    }
    counter++
    
    test_body.appendChild(div)
}


let allQuestions = document.querySelectorAll('#test > div')

button.addEventListener('click', e => {
    allQuestions.forEach((question, index) => {

        let answers = question.querySelectorAll('input')

        const correct = questions[index].right

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