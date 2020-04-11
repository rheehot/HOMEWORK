let todos = [];

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');

const ajax = (() => {
  const request = (method, url, callback, payload) => {
    const xhr = new XMLHttpRequest();
    xhr.open('method', url);
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
  return {
    get(url, callback) {
      request('GET', url, callback);
    },
    post(url, payload, callback) {
      request('POST', url, callback, payload);
    },
    patch(url, payload, callback) {
      request('PATCH', url, callback, payload);
    },
    delete(url, callback) {
      request('DELETE', url, callback);
    }
  }
})();


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
  ajax.get('/todos', res => {
    todos = res;
    render();
  });
}

const generateID = () => todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;

window.onload = getTodos;

$inputTodo.onkeyup = e => {
  const content = e.target.value;
  if (e.keyCode !== 13 || content.trim() === '') return;
  // todos = [{ id: 4, content, completed: false }, ...todos];
  ajax.post('/todos', { id: 4, content, completed: false }, res => {
    todos = [data, ...todos]
    render();
  }, data);
};



$todos.onchange = ({target}) => {
  const id = target.parentNode.id;
  const completed = target.checked;

  // url : /todos/id
  // method : PATCH
  ajax.patch(`/todos/${id}`, { completed },res => {
    todos = todos.map(todo => todo.id === +id ? res : todo );
    console.log('[patch]', todos);
    render();
  });

}

$todos.onclick = ({ target }) => {
  if (!target.matches('.todos > li > button')) return;

  const id = target.parentNode.id;

  ajax.delete(`/todos/${id}`, () => {
    todos === todos.filter(todo => todo.id !== +id);
    render();
  });
};