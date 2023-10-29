В этом упражнении вам предстоит запрограммировать мультиязычный счётчик нажатий, состоящий из переключателя языка, кнопки с числом кликов и кнопки сброса счётчика. Начальное состояние:

<div class="btn-group" role="group">
    <button type="button" class="btn mb-3 btn-primary">English</button>
    <button type="button" class="btn mb-3 btn-outline-primary">Русский</button>
</div>
<button type="button" class="btn btn-info mb-3 align-self-center">0 clicks</button>
<button type="button" class="btn btn-warning">Reset</button>
После двух нажатий по кнопке с классом btn-info и нажатия на кнопку переключения на русский язык:

<div class="btn-group" role="group">
    <button type="button" class="btn mb-3 btn-outline-primary">English</button>
    <button type="button" class="btn mb-3 btn-primary">Русский</button>
</div>
<button type="button" class="btn btn-info mb-3 align-self-center">2 клика</button>
<button type="button" class="btn btn-warning">Сбросить</button>
Пример работы

src/application.js
Экспортируйте функцию по умолчанию, которая реализует всю необходимую логику: работу кнопок счётчика, переключение языка. Тексты должны подставляться через библиотеку i18next.

src/locales/en.js
Реализуйте тексты для англоязычной версии приложения.

src/locales/ru.js
Реализуйте тексты для русскоязычной версии приложения.

Подсказки
Для реализации переводов множественной формы вы можете написать свою функцию для получения нужного ключа по числу или воспользоваться возможностями библиотеки i18next
Каждый запуск приложения должен создавать свой собственный инстанс i18next.
Для изменения языка используется функция changeLanguage