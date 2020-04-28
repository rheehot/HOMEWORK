// State

let todos = [];

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');

const render = () => {
  let html = '';

  todos.forEach(todo => {
    html += `<li id="${todo.id}" class="todo-item">
    <input id="ck-${todo.id}" class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}>
    <label for="ck-${todo.id}">${todo.content}</label>
    <i class="remove-todo far fa-times-circle"></i>
  </li>`;
  });

  $todos.innerHTML = html;
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

$inputTodo.onkeyup = e => {
  if (e.keyCode !== 13) return;
  todos = [{ id: 4, content: $inputTodo.value, completed: false }, ...todos];
  render();
};

// checkbox 버튼을 클릭하면 completed 값이 변화(반전)한다.
$todos.onchange = e => {
  // todos = todos.map(todo => {
  //   todo.id === e.target.parentNode.id ? {...todo, completed: !todo.completed } : todo
  // });
  console.log(todos);
};

// 삭제!! filter 확인할 것!
$todos.onclick = e => {
  if (!e.target.matches('.todos > li > .remove-todo')) return;
  todos = todos.filter(todo => todo.id !== +e.target.parentNode.id);

  render();
};

// all, active, completed 버튼을 누르면 버튼의 디자인이 변경되고, 보여지는 리스트가 달라진다. (all = 전체, active = 진행중, completed = 완료)

// mark as all completed 를 누르면 전체 선택되거나, 전체 해제된다.
// clear completed를 누르면 완료된 리스트가 삭제된다.
// 완료된 목록과 전체 목록의 갯수를 볼 수 있다.
