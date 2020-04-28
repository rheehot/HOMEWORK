const promiseGet = url => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        // 성공
        resolve(JSON.parse(xhr.response));
      } else {
        // 실패
        reject(new Error(`${xhr.status}`));
      }
    };
  });
};

// console.log(promiseGet('https://jsonplaceholder.typicode.com/todos/1'));

promiseGet('https://jsonplaceholder.typicode.com/todosdasdf/1')
  .then(todo => console.log(todo))
  .catch(err => console.error(err))
  .finally(() => console.log('End'));


promiseGet('/todos')
  .then(_todos => todos = _todos)
  .then(render)
  .catch(err => console.error(err))
  .finally(() => console.log('End'));



