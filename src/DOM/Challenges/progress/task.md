src/application.js
Реализуйте и экспортируйте по умолчанию функцию, которая запускает код, заполняющий элемент <progress> на один процент за секунду. Через 100 секунд процесс должен остановится, так как достигнет максимума.

Начальное состояние:

<progress value="0" max="100"></progress>
Через одну секунду:

<progress value="1" max="100"></progress>
Для изменения значения value используйте метод setAttribute().

Подсказки
Реализуйте задачу, используя setTimeout() (с setInterval() может не заработать проверка)
Элемент Progress