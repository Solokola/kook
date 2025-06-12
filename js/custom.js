// custom.js

document.addEventListener('DOMContentLoaded', function() {
  // Получаем кнопку по ID
  const btn = document.getElementById('myButton');
  // Получаем блок для вывода текста
  const quoteElem = document.getElementById('quote');

  // Проверяем, что элементы существуют, чтобы не было ошибок
  if (btn && quoteElem) {
    btn.addEventListener('click', function() {
      quoteElem.textContent = "Цитата на сегодня: «Действуй сейчас, не откладывай!»";
    });
  }
});

