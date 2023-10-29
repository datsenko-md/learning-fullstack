В этой практике вам нужно будет реализовать Collapse

src/application.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список компаний (пример списка в файле src/index.js) и использует этот список для формирования кнопок (по одной на каждую компанию). Нажатие на кнопку приводит к выводу описания компании (если есть описание другой компании, оно заменяется). Повторное нажатие удаляет вывод. Данные должны полностью удаляться, скрытие с помощью классов не подходит. По умолчанию не показывается никакое описание.

Пример работы

Пример начального вывода (может отличаться от вашего):

<div class="container m-3">
  <button class="btn btn-primary">
    Hexlet
  </button>
  <button class="btn btn-primary">
    Google
  </button>
  <button class="btn btn-primary">
    Facebook
  </button>
</div>
После клика на второй кнопке добавляется описание:

<div class="container m-3">
  <button class="btn btn-primary">
    Hexlet
  </button>
  <button class="btn btn-primary">
    Google
  </button>
  <button class="btn btn-primary">
    Facebook
  </button>
  <div>search engine</div>
</div>
После клика на третьей кнопке описание заменяется на новое:

<div class="container m-3">
  <button class="btn btn-primary">
    Hexlet
  </button>
  <button class="btn btn-primary">
    Google
  </button>
  <button class="btn btn-primary">
    Facebook
  </button>
  <div>social network</div>
</div>
После повторного клика на третьей кнопке описание удаляется:

<div class="container m-3">
  <button class="btn btn-primary">
    Hexlet
  </button>
  <button class="btn btn-primary">
    Google
  </button>
  <button class="btn btn-primary">
    Facebook
  </button>
</div>
