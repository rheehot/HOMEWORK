let todos = [];
let navState = 'all';

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $activeTodos = document.querySelector('.active-todos');
const $completedTodos = document.querySelector('.completed-todos');
const $clearCompleted = document.querySelector('.clear-completed');
const $completeAll = document.querySelector('.complete-all > .checkbox');
const $nav = document.querySelector('.nav');

const render = () => {
  // 투두의 카피본 ? nav 상태에 따라 필터링
  let html = '';
  let _todos = [];

  _todos = todos.filter(todo => (navState === 'all' ? true : (navState === 'active' ? !todo.completed : todo.completed)));

  _todos.forEach(todo => {
    html += `<li id="${todo.id}" class="todo-item">
  <input id="ck-${todo.id}" class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}>
  <label for="ck-${todo.id}">${todo.content}</label>
  <i class="remove-todo far fa-times-circle"></i>
</li>`;
  });
  // console.log(todos.filter(todo => true));

  $todos.innerHTML = html;
  $inputTodo.value = '';

  let completedNumber = 0;
  todos.forEach(todo => {
    if (!todo.completed) return;
    completedNumber += 1;
  });

  $activeTodos.textContent = todos.length - completedNumber;
  $completedTodos.textContent = completedNumber;
};

const getTodos = () => {
  todos = [
    { id: 1, content: 'Javascript', completed: true },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'HTML', completed: true }
  ].sort((a, b) => b.id - a.id);
  render();
};

window.onload = getTodos;

const getId = () => {
  if (todos.length === 0) return 1;
  return Math.max(...todos.map(todo => todo.id)) + 1;
};


$inputTodo.onkeyup = e => {
  if (e.keyCode !== 13) return;
  todos = [{ id: getId(), content: `${$inputTodo.value}`, completed: false }, ...todos];
  render();
};

$todos.onclick = e => {
  if (!e.target.matches('.todos > li > .remove-todo')) return;
  todos = todos.filter(todo => +e.target.parentNode.id !== todo.id);
  render();
};

$todos.onchange = e => {
  todos = todos.map(todo => (todo.id === +e.target.parentNode.id ? { ...todo, completed: !todo.completed } : todo));
  render();
};


$clearCompleted.onclick = e => {
  if (!e.target.matches('.clear-completed > button')) return;
  todos = todos.filter(todo => todo.completed === false);
  render();
};

$completeAll.onchange = e => {
  todos = todos.map(todo => (e.target.checked ? { ...todo, completed: true } : { ...todo, completed: false }));
  render();
};

$nav.onclick = e => {
  [...$nav.children].map(navItem => (e.target.id === navItem.id ? navItem.classList.add('active') : navItem.classList.remove('active')));

  navState = e.target.id;
  render();
};
