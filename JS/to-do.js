const getUser = document.querySelector("#get-user");
const userName = document.querySelector("#user-name");
const todoForm = document.querySelector("#todo-form");
const todoTitle = document.querySelector("#todo-title");
const todoType = document.querySelector("#todo-type");
const todosCont = document.querySelector("#todos-cont");

const todos = [];

// Function to display todos
showTodos = function()
{
     todosCont.innerHTML = ``;
     todos.forEach(function (todo, id) {
      const todoItem = document.createElement("li");

      todoItem.classList.add("todo");
      todoItem.innerHTML = `
        <p>${id + 1}</p> 
        <p>${todo.title} </p>
        <p> ${todo.type}</p>
        `;

      todosCont.appendChild(todoItem);
    }); 
    
}

// Function to update the todo count
updateTodoCount = function() {
  const todoCount = document.querySelector("#todo-count");
  todoCount.innerText = todos.length;
}

// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  const name = localStorage.getItem("firstname");

  userName.innerText = name ?? "User";
  console.log(typeof name);
});

// Function to get user input
getUser.addEventListener("click", function () {
  const name = prompt("Hello what Is your Name");
  if (name !== null) {
    localStorage.setItem("firstname", name);
    userName.innerText = name;
  }
});

// Function to handle form submission
todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
// Add the new todo to the todos array
  todos.push({
    title: todoTitle.value,
    type: todoType.value,
  });

    // Update the local storage with the new todos array
    localStorage.setItem( "todos",JSON.stringify( todos ) )
    

    todoTitle.value = "";
    todoType.value = "";

    // display the todos
  showTodos();

  console.log(todos);
});
