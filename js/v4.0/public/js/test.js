const promisePost = (url, payload, cb) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, cb, payload);
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

promiseGet("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("Bye!"));
