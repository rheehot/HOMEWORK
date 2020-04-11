let todos = [];
const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const get = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.response));
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};
const post = (url, payload, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.send(JSON.stringify(payload));
  xhr.onload = () => {
    if (xhr.status === 200 || xhr.status === 201) {
      callback(JSON.parse(xhr.response));
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};
const render = () => {
  let html = '';
  todos.forEach(({ id, content, completed }) => {
    html += `<li id="${id}">
        <input type="checkbox" ${completed ? 'checked' : ''}>
        <span>${content}</span>
        <button>X</button>
      </li>`;
  });
  $todos.innerHTML = html;
};
const getTodos = () => {
  get('/todos', data => {
    todos = data;
    render();
  });
}
window.onload = getTodos;
$inputTodo.onkeyup = e => {
  const content = e.target.value;
  if (e.keyCode !== 13 || content.trim() === '') return;
  // todos = [{ id: 4, content, completed: false }, ...todos];
  post('/todos', { id: 4, content, completed: false }, data => {
    todos = [data, ...todos]
    render();
  });
};
