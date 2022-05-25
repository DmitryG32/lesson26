const getData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("Получаю", data);

      const newUser = {
        user: data.user,
        age: data.age,
        role: data.role,
        user: data.user,
      };

      const sendUser = (user) => {
        sendData(
          "https://jsonplaceholder.typicode.com/posts",
          JSON.stringify(user)
        );
      };

      sendUser(newUser);
    })
    .catch((error) => console.log(error));
};

const sendData = (url, data) => {
  return fetch(url, {
    method: "POST",
    body: data,
    headers: {
      "Content-type": "application/json; charset-UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log("Отправка", data))
    .catch((error) => console.log(error));
};

getData("db.json");
