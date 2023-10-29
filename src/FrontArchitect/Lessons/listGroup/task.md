Бутстрап позволяет использовать списки для отображения контента при клике по элементу. В этом задании такие группы списков уже подготовлены, вам предстоит только добавить функционал переключения.

Пример работы

src/application.js
Реализуйте логику переключения табов для компонента list-group бутстрапа, используя архитектуру MVC.

Активный элемент списка получает класс active, а контент, соответствующий ему, получает классы active show

<div class="row">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Home</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Home Content</div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Profile Content</div>
    </div>
  </div>
</div>
Код должен работать даже в том случае, если на странице есть несколько компонентов list-group.

Подсказки
Пример работы: https://getbootstrap.com/docs/5.2/components/list-group/#javascript-behavior