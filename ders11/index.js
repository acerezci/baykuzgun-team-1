const todoList = JSON.parse(localStorage.getItem("todoList")) || [];

const createElement = (value, itemIndex) => {
  const todoItemContainer = document.createElement("div");
  const isimContainer = document.createElement("span");
  isimContainer.innerHTML = value;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "SIL";

  const doneButton = document.createElement("button");
  doneButton.innerHTML = "TAMAMLANDI";

  doneButton.addEventListener("click", () => {
    console.log("DONE");
  });

  deleteButton.addEventListener("click", () => {
    todoItemContainer.remove();

    todoList.splice(itemIndex, 1);

    localStorage.setItem("todoList", JSON.stringify(todoList));
  });

  const editElement = document.createElement("button");
  editElement.innerHTML = "DUZENLE";

  const editInput = document.createElement("input");
  editInput.style.display = "none";
  editInput.value = value;

  editElement.addEventListener("click", () => {
    if (editInput.style.display == "none") {
      editInput.style.display = "inline";
      editElement.innerHTML = "DUZENLEMEYI BITIR";
    } else {
      editInput.style.display = "none";
      editElement.innerHTML = "DUZENLE";

      if (editInput.value !== value) {
        todoList[itemIndex] = editInput.value;

        isimContainer.innerHTML = editInput.value;

        localStorage.setItem("todoList", JSON.stringify(todoList));
      }
    }
  });

  todoItemContainer.appendChild(isimContainer);
  todoItemContainer.appendChild(deleteButton);
  todoItemContainer.appendChild(editElement);
  todoItemContainer.appendChild(doneButton);
  todoItemContainer.appendChild(editInput);

  app.appendChild(todoItemContainer);
};

const app = document.querySelector(".app");

const inputElement = document.createElement("input");

const buttonElement = document.createElement("button");
buttonElement.innerHTML = "EKLE";

const add = () => {
  const value = inputElement.value;

  if (value) {
    todoList.push(value);
    localStorage.setItem("todoList", JSON.stringify(todoList));

    createElement(value, todoList.length - 1);
  }
};

buttonElement.addEventListener("click", add);

app.appendChild(inputElement);
app.appendChild(buttonElement);

for (let i = 0; i < todoList.length; i++) {
  const element = todoList[i];

  createElement(element, i);
}
