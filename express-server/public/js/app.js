let todos = [];
const $todos = document.querySelector('.todos');

const render = () => {
  let html = '';

  todos.forEach(todo => {
    html += `<li id="${todo.id}>
    <input type="checkbox" ${todo.completed ? 'checked' : ''}>
    <span>${todo.content}</span>
    <button>x</button>
    </li>`;

    $todos.innerHTML = html;

  })
}


const ajax = (() => {
  const req = (method, url, payload) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.send(JSON.stringify(payload));
  
      xhr.onload = () => {
        if (xhr.status === 200 || xhr.status === 201) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(new Error(xhr.status));
        }
      };
    });
  };

  return {
    get(url) {
      return req(url);
    },
    post(url, payload) {
      return req(url, )
    }
  }
})();



// const get = url => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.send();

//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         resolve(JSON.parse(xhr.response));
//       } else {
//         reject(new Error(xhr.status));
//       }
//     };
//   })
// };

// const post = (url, payload) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', url);
//     xhr.setRequestHeader('content-type', 'application/json');
//     xhr.send(JSON.stringify(payload));

//     xhr.onload = () => {
//       if (xhr.status === 200 || xhr.status === 201) {
//         resolve(JSON.parse(xhr.response));
//       } else {
//         reject(new Error(xhr.status));
//       }
//     };
//   })
// };


const getTodos = () => {
  get('/todos')
    .then(_todos => {todos = _todos;})
    .then(render)
    .catch(console.error)
};

const generateId = () => {
  if (todos.length === 0) return 1;
  return Math.max(...todos.map(todo => todo.id)) + 1;
};

window.onload = getTodos;


$inputTodo.onkeyup = ({keycode, target }) => {
  const content = target.value;
  if (keyCode !== 13) return;

  ajax.post('/todos', {id : generateId(), content, completed: false})
    .then(_todos => {todos = _todos;})
    .then(render)
    .catch(console.error);
  target.value = '';