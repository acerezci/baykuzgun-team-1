const appElement = document.getElementById("app");
const loaderElement = document.createElement("div");

loaderElement.innerHTML = "LOADING...";

appElement.appendChild(loaderElement);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    if (response.length > 0) {
      const ulElement = document.createElement("ul");

      response.forEach((user) => {
        const liElement = document.createElement("li");

        liElement.innerHTML = user.name;
        liElement.style.color = "#FFF";

        ulElement.appendChild(liElement);
      });

      loaderElement.innerHTML = "";

      appElement.appendChild(ulElement);
    }
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);
  });
