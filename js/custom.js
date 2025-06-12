document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('myButton');
  const output = document.getElementById('quote');

  button.addEventListener('click', function() {
    output.textContent = "Цитата на сегодня: «Действуй сейчас, не откладывай!»";
  });
});
