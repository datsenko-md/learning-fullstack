Эта задача не сложная алгоритмически, но довольно объемная. На решение потребуется время и это хорошая прокачка

В этой задаче вам предстоит сделать список задач похожий на Reminders из MacOS. Reminder позволяет планировать задачи и создавать списки задач.

Пример работы

По умолчанию, в нашей реализации сразу должен быть создан список General. Начальный HTML доступен в public/index.html. После инициализации js он становится таким (туда добавляется General):

<div class="row">
  <div class="col">
    <h3>Lists</h3>
    <form class="form-inline mb-2" data-container="new-list-form">
      <label for="new-list-name" class="sr-only">New list name</label>
      <input
        type="text"
        id="new-list-name"
        class="form-control mr-2"
        name="name"
        required
      />
      <input type="submit" class="btn btn-primary" value="Add List" />
    </form>
    <div data-container="lists">
      <ul>
        <li><b>General</b></li>
      </ul>
    </div>
  </div>
  <div class="col">
    <h3>Tasks</h3>
    <form class="form-inline mb-2" data-container="new-task-form">
      <label for="new-task-name" class="sr-only">New task name</label>
      <input
        type="text"
        id="new-task-name"
        class="form-control mr-2"
        name="name"
        required
      />
      <input type="submit" class="btn btn-primary" value="Add Task" />
    </form>
    <div data-container="tasks"></div>
  </div>
</div>
После добавления первой задачи в список General:

<div class="row">
  <div class="col">
    <h3>Lists</h3>
    <form class="form-inline mb-2" data-container="new-list-form">
      <label for="new-list-name" class="sr-only">New list name</label>
      <input
        type="text"
        id="new-list-name"
        class="form-control mr-2"
        name="name"
        required
      />
      <input type="submit" class="btn btn-primary" value="Add List" />
    </form>
    <div data-container="lists">
      <ul>
        <li><b>General</b></li>
      </ul>
    </div>
  </div>
  <div class="col">
    <h3>Tasks</h3>
    <form class="form-inline mb-2" data-container="new-task-form">
      <label for="new-task-name" class="sr-only">New task name</label>
      <input
        type="text"
        id="new-task-name"
        class="form-control mr-2"
        name="name"
        required
      />
      <input type="submit" class="btn btn-primary" value="Add Task" />
    </form>
    <div data-container="tasks">
      <ul>
        <li>My First Task</li>
      </ul>
    </div>
  </div>
</div>
После создания нового списка (но до переключения на него):

<div class="row">
  <div class="col">
    <h3>Lists</h3>
    <form class="form-inline mb-2" data-container="new-list-form">
      <label for="new-list-name" class="sr-only">New list name</label>
      <input
        type="text"
        id="new-list-name"
        class="form-control mr-2"
        name="name"
        required
      />
      <input type="submit" class="btn btn-primary" value="Add List" />
    </form>
    <div data-container="lists">
      <ul>
        <li><b>General</b></li>
        <li><a href="#random">Random</a></li>
      </ul>
    </div>
  </div>
  <div class="col">
    <h3>Tasks</h3>
    <form class="form-inline mb-2" data-container="new-task-form">
      <label for="new-task-name" class="sr-only">New task name</label>
      <input
        type="text"
        id="new-task-name"
        class="form-control mr-2"
        name="name"
        required
      />
      <input type="submit" class="btn btn-primary" value="Add Task" />
    </form>
    <div data-container="tasks">
      <ul>
        <li>My First Task</li>
      </ul>
    </div>
  </div>
</div>
После переключения на список Random (клик по имени):

<div class="row">
  <div class="col">
    <h3>Lists</h3>
    <form class="form-inline mb-2" data-container="new-list-form">
      <label for="new-list-name" class="sr-only">New list name</label>
      <input
        type="text"
        id="new-list-name"
        class="form-control mr-2"
        name="name"
        required
      />
      <input type="submit" class="btn btn-primary" value="Add List" />
    </form>
    <div data-container="lists">
      <ul>
        <li><a href="#general">General</a></li>
        <li><b>Random</b></li>
      </ul>
    </div>
  </div>
  <div class="col">
    <h3>Tasks</h3>
    <form class="form-inline mb-2" data-container="new-task-form">
      <label for="new-task-name" class="sr-only">New task name</label>
      <input
        type="text"
        id="new-task-name"
        class="form-control mr-2"
        name="name"
        required
      />
      <input type="submit" class="btn btn-primary" value="Add Task" />
    </form>
    <div data-container="tasks"></div>
  </div>
</div>
Списки должны иметь уникальные имена. Добавление списка с уже существующим именем не должно производить никакого эффекта.

src/application.js
Экспортируйте функцию по умолчанию, которая реализует всю необходимую логику.