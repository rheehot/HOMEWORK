// state
let todos = [];
let navState = 'all';

// DOMs
const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $activeTodos = document.querySelector('.active-todos');
const $completedTodos = document.querySelector('.completed-todos');
const $clearCompleted = document.querySelector('.clear-completed');
const $completeAll = document.querySelector('.complete-all > .checkbox');
const $nav = document.querySelector('.nav');

const render = () => {
  let html = '';
  let _todos = todos.filter(todo => (navState === 'all' ? true : (navState === 'active' ? !todo.completed : todo.completed)));

  _todos.forEach(todo => {
    html += `<li id="${todo.id}" class="todo-item">
  <input id="ck-${todo.id}" class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}>
  <label for="ck-${todo.id}">${todo.content}</label>
  <i class="remove-todo far fa-times-circle"></i>
</li>`;
  });

  $todos.innerHTML = html;
  $inputTodo.value = '';

  $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
  $completedTodos.textContent = todos.filter(todo => todo.completed).length;
};

const getId = () => {
  if (todos.length === 0) return 1;
  return Math.max(...todos.map(todo => todo.id)) + 1;
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

// event binding

// input에 입력을 하면 todos가 갱신되고 render 한다.
$inputTodo.onkeyup = ({keyCode}) => {
  const content = $inputTodo.value;
  if (keyCode !== 13 || content.trim() === '') return;
  todos = [{ id: getId(), content, completed: false }, ...todos];
  render();
};

// checkbox 버튼을 클릭하면 해당하는 todo의 completed 값이 변경되어 todos가 갱신되고, render한다.
$todos.onchange = ({target}) => {
  todos = todos.map(todo => (todo.id === +target.parentNode.id ? { ...todo, completed: !todo.completed } : todo));
  render();
};

// remove 버튼을 클릭하면 해당하는 줄의 todo가 삭제되고, todos를 갱신한뒤 render 한다. 
$todos.onclick = ({target}) => {
  if (!target.matches('.todos > li > .remove-todo')) return;
  todos = todos.filter(todo => todo.id !== +target.parentNode.id);
  render();
};

// 전체 checkbox 버튼을 클릭하면 전체 체크박스의 true 혹은 false 값에 따라서 todo의 completed 값이 변경된다.
$completeAll.onchange = ({target}) => {
  const completed = target.checked;
  todos = todos.map(todo => ({ ...todo, completed }));
  render();
};

// clearCompleted 버튼을 클릭하면 completed가 true인 todo가 삭제되어 todos가 갱신되고, render한다.
$clearCompleted.onclick = ({target}) => {
  if (!target.matches('.clear-completed > button')) return;
  todos = todos.filter(todo => !todo.completed);
  render();
};

// nav버튼을 클릭하면 보여지는 리스트 형태가 달라진다.
$nav.onclick = ({target}) => {
  [...$nav.children].map(navItem => navItem.classList.toggle('active', target.id === navItem.id));

  navState = target.id;
  render();
};
