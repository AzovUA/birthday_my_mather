const textElement = document.getElementById('text1');
    const colors = ['red', 'green', 'blue', 'purple', 'orange']; // Список цветов
    let currentIndex = 0;

    function changeColor() {
      textElement.style.color = colors[currentIndex]; // Применение цвета к тексту
      currentIndex = (currentIndex + 1) % colors.length; // Переход к следующему цвету в списке
    }

    // Изменение цвета текста каждые 500 миллисекунд (0.5 секунды)
    setInterval(changeColor, 500)

const textElement2 = document.getElementById('text2');
const colors2 = ['red', 'green', 'blue', 'purple', 'orange']; // Список цветов
let currentIndex2 = 0;

function changeColor2() {
  textElement2.style.color = colors2[currentIndex2]; // Применение цвета к тексту
  currentIndex2 = (currentIndex2 + 1) % colors2.length; // Переход к следующему цвету в списке
}

// Изменение цвета текста каждые 500 миллисекунд (0.5 секунды)
setInterval(changeColor2, 500)