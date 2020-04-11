// express 서버를 가져온다?

const express = require('express');

const app = express();

// 클라이언트의 요청을 듣는다. (요청을 하는지 보고 있다.)
// 첫번째 인수 (포트)
// 두번째 인수 (콜백 - 성공적으로 가동되면 실행될 함수?)

const PORT = 7000;

let todos = [
  { id: 1, content: 'Javascript', completed: true },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'HTML', completed: true }
]

app.use(express.static('public'));
app.use(express.json());

// 라우터 Router
app.get('/todos', (req, res) => {
  todos = todos.sort((todo1, todo2) => todo2.id - todo1.id);
  res.send(todos);
});

app.post('/todos', (req, res) => {
  const todo = req.body;
  todos = [todo, ...todos];
  res.send(todos);
});

app.listen(PORT, () => { console.log(`server is listening on port ${PORT}`)});