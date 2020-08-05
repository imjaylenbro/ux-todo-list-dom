let todos = [
  {
    completed: false,
    description: "Take Jim to the hair salon",
  },
  {
    completed: true,
    description: "Drop off wedding invitation at mailbox",
  },
  {
    completed: false,
    description: "Pick up the cake",
  },
  {
    completed: false,
    description: "Call the caterers",
  },
];

function renderTodoApp() {
  let app = document.querySelector("#app");
  let h1 = document.createElement("h1");
  // your code here

  // create new dom elememts
  let todoList = document.createElement("ul");

  h1.innerText = "Todo List";

  app.appendChild(h1);
  // and maybe some here

  //append the elements to page
  app.appendChild(todoList);

  // make loop

  for (let i = 0; i < todos.length; i++) {
    let todoItems = todos[i];
     let stateOfBox = todoItems.completed ? "checked": ""
     // create html markup for each object array
        let todoMarkup = `
    <li><input type="checkbox" ${stateOfBox}/>${todoItems.description}
    </li>
    ` ;
  // add markup to the inner html of the output element
  todoList.innerHTML += todoMarkup;

  }
}

renderTodoApp();
