//Игра начинается, когда вызывается функция start с параметром ячеек, 
//который представляет все ячейки на игровом поле.

let cells = document.querySelectorAll('#field td');
start(cells);
//Функция start перебирает каждую ячейку игрового поля и добавляет к ней прослушиватель событий щелчка.
// При щелчке по ячейке вызывается функция шага. В ступенчатой ​​функции, в зависимости от значения i, 
//она присваивает содержимому ячейки «x» или «0» и увеличивает i на 1.
function start(cells) {
    let i = 0;
    for (const cell of cells) {
        cell.addEventListener('click', function step(e) {
            this.textContent = ['x', '0'][i % 2]
            i++
//После каждого шага он проверяет победу или ничью с помощью функции isVictory. Если обнаруживается победа или ничья, 
//он соответствующим образом предупреждает пользователей и удаляет прослушиватель событий щелчка из ячейки.
            if (isVictory(cells)) {
                alert(`Победил ${['x', '0'][(i - 1) % 2]}`);
            } else if (i === 9) {
                alert('Ничья!!')
            }

            this.removeEventListener('click', step);
        })

    }
}
//Функция isVictory проверяет все возможные выигрышные комбинации, используя массив комбинаций, 
//называемый гребенками. Если какая-либо из выигрышных комбинаций найдена, 
//возвращается true; в противном случае он возвращает false.
function isVictory (cells){
    let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

    for (const combo of combs) {
        if (cells[combo[0]].textContent === cells[combo[1]].textContent & cells[combo[1]].textContent === cells[combo[2]].textContent & cells[combo[0]].textContent !== '') {
            return true
        }
    } return false
}