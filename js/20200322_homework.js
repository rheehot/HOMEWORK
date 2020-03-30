/*

// 1. HTML 생성

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function render () {
  let html = '';
  
  todos.forEach(todo => {
    html += `
    <li id = "${todo.id}">
    <label><input type="checkbox" ${todo.completed ? 'checkbox' : ''}>${todo.content}</label>
    </li>`;
    
  });
  
  return html;
}

console.log(render());

// 2. 특정 프로퍼티 값 추출

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getValues(key) {
  return todos.map(todo => todo[key]);
}

console.log(getValues('id'));
console.log(getValues('content'));
console.log(getValues('completed'));



// 3. 프로퍼티 정렬

const todos = [
  {id: 3, content: 'HTML', complete: false},
  {id: 2, content: 'CSS', complete: true},
  {id: 1, content: 'JavaScript', complete: false},
];

function sortBy(key) {
  const sorted = [...todos];
  sorted.sort((a, b) => a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
  return sorted;
}

console.log(sortBy('id'));
console.log(sortBy('content'));
console.log(sortBy('complete'));

// 4. 새로운 요소 추가

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function addTodo(newTodo) {
  todos = [newTodo, ...todos];
}

addTodo({ id: 4, content: 'Test', completed: false });

console.log(todos);


// 5. 특정요소 삭제

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== id)
}

removeTodo(2);

console.log(todos);



// 6. 특정 요소의 프로퍼티 값 반전

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedById(id) {
  todos = todos.map(todo => todo.id === id ? (todo.completed ? {...todo, completed : false} : {...todo, completed : true}) : todo)
}

toggleCompletedById(3);

console.log(todos);



// 7. 모든 요소의 completed 프로퍼티 값을 true로 설정

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedAll() {
  todos = todos.map(todo => ({...todo, completed : true}));
}

toggleCompletedAll();

console.log(todos);


// 8. completed 프로퍼티의 값이 true인 요소의 갯수 구하기

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function countCompletedTodos() {
  return todos.filter(todo => todo.completed).length;
}

console.log(countCompletedTodos()); // 1





// id 프로퍼티의 값 중에서 최대값 구하기

let todos = [
  {id: 3, content: 'HTML', complete: false},
  {id: 2, content: 'CSS', complete: true},
  {id: 1, content: 'JavaScript', complete: false},
];

function getMaxId() {
  // return Math.max.apply(null, todos.map(todo => todo.id));
  return Math.max(...todos.map(todo => todo.id));
}

console.log(getMaxId());
*/

