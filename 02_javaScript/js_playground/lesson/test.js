let todos = [
  { id: 1, content: 'Javascript', completed: true },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'HTML', completed: true }
];

// todos = [
//   4, 2, 1
// ];

// map
todos = Math.max(...todos.map(todo => todo.id)) + 1;
console.log(todos);

// 스프레드 문법
// console.log(...todos);


// sort

// todos = todos.sort((a, b) => a - b);
// console.log(todos);


// filter

// todos = todos.filter(todo => todo.id === 1);
// console.log(todos);


// forEach

// todos.forEach(todo => {
//   console.log(todo);
// });
