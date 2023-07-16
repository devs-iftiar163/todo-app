const dataInput = document.querySelector(".do-value");
const actionButton = document.querySelector("#create-me");
const showData = document.querySelector(".table-striped");

// Todo Loop

const readTodos = () => {
  // let todos = [];
  // if (localStorage.getItem("todos")) {
  //   todos = JSON.parse(localStorage.getItem("todos"));
  // }
  const todos = getData("todos");

  let content = "";
  todos.forEach((item, index) => {
    content += `
    <tr>
        <td>
            <i class="fa fa-check"></i> ${item}
            <i onclick="deleteTodo('${item}')" class="fa fa-trash"></i>
        </td>
  </tr>`;
  });
  showData.innerHTML = content;
};

readTodos();

// Creatig Todo
actionButton.onclick = () => {
  const toos = dataInput.value;

  if (toos) {
    insertData("todos", toos);
    dataInput.value = "";
  } else {
    alert("Field Cannot Be Empty");
  }

  readTodos();
};

// Delete Todos Item
function deleteTodo(item) {
  const todos = getData("todos");
  const updateTodos = todos.filter((data) => data != item);

  localStorage.setItem("todos", JSON.stringify(updateTodos));
  readTodos();
}
