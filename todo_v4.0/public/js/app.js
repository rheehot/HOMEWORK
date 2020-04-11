let todos = [];
let navState = 'all';

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $activeTodos = document.querySelector('.active-todos');
const $completedTodos = document.querySelector('.completed-todos');
const $clearCompleted = document.querySelector('.clear-completed');
const $completeAll = document.querySelector('.complete-all > .checkbox');
const $nav = document.querySelector('.nav');

const ajax = (() => {
  const requst = (method, url, callback, payload) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
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
      requst('GET', url, callback);
    },
    post(url, payload, callback) {
      requst('POST', url, callback, payload);
    },
    patch(url, payload, callback) {
      requst('PATCH', url, callback, payload);
    },
    delete(url, callback) {
      requst('DELETE', url, callback);
    }
  };
})();

// 초기 렌더 및 nav 상태 변경에 따른 리스트 렌더
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

// 초기 데이터 획득 및 렌더
// get으로 데이터를 받아와야 함
const getTodos = () => {
  ajax.get('/todos', res => {
    todos = res;
    render();
  });
};

window.onload = getTodos;

// 아이디 만들기
const getId = () => {
  if (todos.length === 0) return 1;
  return Math.max(...todos.map(todo => todo.id)) + 1;
};

// input창 입력시 데이터에 추가 및 렌더
// post로 데이터를 보내고 받아야 함
// 페이로드로 입력된 데이터를 보내야 함
$inputTodo.onkeyup = e => {
  if (e.keyCode !== 13) return;
  ajax.post('/todos', { id: getId(), content: `${$inputTodo.value}`, completed: false }, res => {
    todos = [res, ...todos];
    render();
  });
};

// remove-todo 클릭시 해당 데이터 삭제 후 렌더
// delete로 삭제된? 데이터를 받아야 함

$todos.onclick = e => {
  if (!e.target.matches('.todos > li > .remove-todo')) return;
  todos = todos.filter(todo => +e.target.parentNode.id !== todo.id);
  render();
};

// 체크박스 선택시 데이터 변경 및 렌더
// patch로 데이터를 수정해야 함
// 페이로드로 수정되야 할 데이터를 보내야 함

$todos.onchange = e => {
  const completed = e.target.checked;

  ajax.patch(`/todos/${e.target.parentNode.id}`, { completed }, res => {
    todos = todos.map(todo => (todo.id === +e.target.parentNode.id) ? res : todo );
    render();
  });
};


// 완료된 리스트 삭제 버튼 클릭시 데이터 삭제 및 렌더
// delete로 삭제된 데이터를 받아야 함
$clearCompleted.onclick = e => {
  if (!e.target.matches('.clear-completed > button')) return;
  todos = todos.filter(todo => todo.completed === false);
  render();
};

// 전체 완료 및 해제 체크박스 클릭시 완료 데이터 변경 및 렌더
// patch로 데이터를 수정해야 함
// 페이로드로 수정되야 할 데이터를 보내야 함


// $todos.onchange = ({target}) => {
//   const id = target.parentNode.id;
//   const completed = target.checked;

//   // url : /todos/id
//   // method : PATCH
//   ajax.patch(`/todos/${id}`, { completed }, res => {
//     todos = todos.map(todo => todo.id === +id ? res : todo );
//     console.log('[patch]', todos);
//     render();
//   });

// }

$completeAll.onchange = e => {
  ajax.patch('/todos/', {});
  todos = todos.map(todo => (e.target.checked ? { ...todo, completed: true } : { ...todo, completed: false }));
  render();
};


// $completeAll.onchange = e => {
//   todos = todos.map(todo => (e.target.checked ? { ...todo, completed: true } : { ...todo, completed: false }));
//   render();
// };

// nav 버튼 클릭 시 버튼 상태 변경
$nav.onclick = e => {
  [...$nav.children].map(navItem => (e.target.id === navItem.id ? navItem.classList.add('active') : navItem.classList.remove('active')));

  navState = e.target.id;
  render();
};
