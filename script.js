document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  
  let tasks = [];

  // Load tasks from Local Storage
  function loadTasks() {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
          tasks = JSON.parse(savedTasks); // Parse saved tasks into an array
          tasks.forEach(task => {
              addTaskToDOM(task); // Add each task back to the DOM
          });
      }
  }

  // Save tasks to Local Storage
  function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Function to add a new task to the DOM
  function addTaskToDOM(taskText) {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      // Create a remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.classList.add('remove-btn'); // Use classList.add to add the class 'remove-btn'

      // Add event listener to remove the task when the button is clicked
      removeButton.onclick = function () {
          taskList.removeChild(listItem); // Remove the <li> from the task list
          removeTask(taskText); // Remove task from the array and Local Storage
      };

      // Append the remove button to the list item
      listItem.appendChild(removeButton);

      // Append the new list item to the task list
      taskList.appendChild(listItem);
  }

  // Function to handle adding a new task
  function addTask() {
      const taskText = taskInput.value.trim(); // Get and trim the task input value

      // Check if the input is not empty
      if (taskText === "") {
          alert("Please enter a task.");
          return; // Exit if the input is empty
      }

      // Add task to the tasks array
      tasks.push(taskText);
      saveTasks(); // Save updated tasks to Local Storage

      // Add the new task to the DOM
      addTaskToDOM(taskText);

      // Clear the task input field after adding
      taskInput.value = "";
  }

  // Function to remove task from array and update Local Storage
  function removeTask(taskText) {
      tasks = tasks.filter(task => task !== taskText); // Remove the task from the tasks array
      saveTasks(); // Save updated tasks to Local Storage
  }

  // Event listener for the "Add Task" button
  addButton.addEventListener('click', addTask);

  // Event listener for pressing "Enter" key to add a task
  taskInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
          addTask(); // Call addTask if Enter is pressed
      }
  });

  // Load tasks when the page loads
  loadTasks();
});
