// state
let todos = [];
let navState = "all";

// DOMs
const $todos = document.querySelector(".todos");
const $inputTodo = document.querySelector(".input-todo");
const $activeTodos = document.querySelector(".active-todos");
const $completedTodos = document.querySelector(".completed-todos");
const $clearCompleted = document.querySelector(".clear-completed");
const $completeAll = document.querySelector(".complete-all > .checkbox");
const $nav = document.querySelector(".nav");

const ajax = (() => {
  const req = (method, url, callback, payload) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send(JSON.stringify(payload));
    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 201) {
        callback(JSON.parse(xhr.response));
      } else {
        console.error("Error", xhr.status, xhr.statusText);
      }
    };
  };
  return {
    get(url, cb) {
      req("GET", url, cb);
    },
    post(url, payload, cb) {
      req("POST", url, cb, payload);
    },
    patch(url, payload, cb) {
      req("PATCH", url, cb, payload);
    },
    delete(url, cb) {
      req("DELETE", url, cb);
    },
  };
})();

const promiseGet = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(xhr.status));
      }
    };
  });
};
const promisePost = (url, payload, cb) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, payload, cb);
    xhr.setRequestHeader("content-type", "application/json");
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
const promiseDelete = (url, cb) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", url, cb);
    xhr.setRequestHeader("content-type", "application/json");
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

const promisePatch = (url, payload, cb) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("PATCH", url, payload, cb);
    xhr.setRequestHeader("content-type", "application/json");
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
const render = () => {
  let html = "";
  let _todos = todos.filter((todo) =>
    navState === "all"
      ? true
      : navState === "active"
      ? !todo.completed
      : todo.completed
  );

  _todos.forEach((todo) => {
    html += `<li id="${todo.id}" class="todo-item">
  <input id="ck-${todo.id}" class="checkbox" type="checkbox" ${
      todo.completed ? "checked" : ""
    }>
  <label for="ck-${todo.id}">${todo.content}</label>
  <i class="remove-todo far fa-times-circle"></i>
</li>`;
  });

  $todos.innerHTML = html;
  $inputTodo.value = "";

  $activeTodos.textContent = todos.filter((todo) => !todo.completed).length;
  $completedTodos.textContent = todos.filter((todo) => todo.completed).length;
};

const getId = () => {
  if (todos.length === 0) return 1;
  return Math.max(...todos.map((todo) => todo.id)) + 1;
};

// 초기 데이터
const getTodos = () => {
  promiseGet("/todos").then((_todos) => {
    todos = _todos.sort((a, b) => b.id - a.id);
    render();
  });
};

// addTodo 함수 : todo가 todos에 추가되어 갱신된다. post
const addTodo = (content) => {
  promisePost("/todos", { id: getId(), content, completed: false }).then(
    (_todos) => {
      console.log(todos);
      todos = [_todos, ...todos];
      render();
    }
  );
};

// todo completed toggle 함수 : todo의 completed 값이 변경되어 todos가 갱신된다. patch
// 왜 데이터가 변경이 안되는가..? 페이로드가 잘못들어갔는데.. 어떤식으로 보내야하는거지?????
const checkboxCompleted = (id) => {
  const completed = !todos.find((todo) => todo.id === +id).completed;
  promisePatch(`/todos/${id}`, { completed }).then((_todos) => {
    todos = _todos;
    console.log(_todos);
    render();
  });
};

// todo remove 함수 : todo의 remove 버튼을 클릭하면 해당 todo데이터가 삭제되어 todos가 갱신된다. delete
const removeTodo = (id) => {
  promiseDelete(`/todos/${id}`).then((_todos) => {
    todos = _todos;
    console.log(_todos);
    todos = todos.filter((todo) => todo.id !== +id);
    render();
  });
};

// all completed toggle 함수 : 전체 completed가 일괄적으로 toggle된다. patch
const checkboxCompletedAll = (completed) => {
  todos = todos.map((todo) => ({ ...todo, completed }));
  render();
};

// removeCompleted 함수 : 완료된 todo가 삭제되어 todos가 갱신된다. delete
const removeCompleted = () => {
  todos = todos.filter((todo) => !todo.completed);
};

// changeList 함수 : nav 버튼을 누르면 해당 todo만 보인다.
const changeList = (id) => {
  [...$nav.children].map((navItem) =>
    navItem.classList.toggle("active", id === navItem.id)
  );
  navState = id;
};

window.onload = getTodos;

// event binding

// inputTodo에 내용을 입력하면 todo가 추가된다.
$inputTodo.onkeyup = ({ keyCode }) => {
  let content = $inputTodo.value;
  if (keyCode !== 13 || content.trim() === "") return;
  addTodo(content);
};

// todo의 checkbox 버튼을 클릭한다.
$todos.onchange = ({ target }) => {
  checkboxCompleted(target.parentNode.id);
};

// todo의 remove 버튼을 클릭한다.
$todos.onclick = ({ target }) => {
  if (!target.matches(".todos > li > .remove-todo")) return;
  removeTodo(target.parentNode.id);
};

// todos checkbox 버튼을 클릭한다.
$completeAll.onchange = ({ target }) => {
  checkboxCompletedAll(target.checked);
  render();
};

// clearCompleted 버튼을 클릭한다.
$clearCompleted.onclick = ({ target }) => {
  if (!target.matches(".clear-completed > button")) return;
  removeCompleted();
  render();
};

// nav버튼을 클릭한다.
$nav.onclick = ({ target }) => {
  if (!target.matches(".nav > li")) return;
  changeList(target.id);
  render();
};
