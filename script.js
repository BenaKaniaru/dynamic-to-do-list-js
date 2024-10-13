document.addEventListener('DOMContentLoaded', function() {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
      const taskText = taskInput.value.trim();  // Get and trim the task input value

      // Check if the input is not empty
      if (taskText === "") {
          alert("Please enter a task.");
          return;  // Exit if the input is empty
      }

      // Create a new <li> element
      const listItem = document.createElement('li');
      listItem.textContent = taskText;  // Set the text of the <li> to the task input

      // Create a remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.classList.add('remove-btn');  // Use classList.add to add the class 'remove-btn'

      // Add event listener to remove the task when the button is clicked
      removeButton.onclick = function() {
          taskList.removeChild(listItem);  // Remove the <li> from the task list
      };

      // Append the remove button to the list item
      listItem.appendChild(removeButton);

      // Append the new list item to the task list
      taskList.appendChild(listItem);

      // Clear the task input field after adding
      taskInput.value = "";
  }

  // Event listener for the "Add Task" button
  addButton.addEventListener('click', addTask);

  // Event listener for pressing "Enter" key to add a task
  taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          addTask();  // Call addTask if Enter is pressed
      }
  });
});
