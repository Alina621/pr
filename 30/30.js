const inputs = document.querySelectorAll('.input')

inputs.forEach(input => {
    input.addEventListener('keyup', e => {
        if (e.key === 'Enter') {
            if (e.target.dataset.right === e.target.value) {
                input.classList.remove('wrong')
                input.classList.add('right')
                
            } else {
                input.classList.remove('right')
                input.classList.add('wrong')
            }
        }
    })
});