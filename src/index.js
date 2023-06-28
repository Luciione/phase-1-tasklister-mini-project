document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // Get references to the necessary elements
const form = document.querySelector('#create-task-form');
const taskList = document.querySelector('#tasks');
const deleteAllButton = document.querySelector('#delete-all-button');

// Add event listener to the form
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the task description from the input field
  const taskInput = document.querySelector('#new-task-description');
  const taskDescription = taskInput.value;

  if (taskDescription !== '') {
    // Create a new task item
    const taskItem = document.createElement('li');
    taskItem.textContent = taskDescription;

    // Create the delete button for the task item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';

    // Add event listener to the delete button
    deleteButton.addEventListener('click', function() {
      taskItem.remove(); // Remove the task item when clicked
    });

    // Append the delete button to the task item
    taskItem.appendChild(deleteButton);

    // Append the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
  }
});

// Add event listener to the delete all button
deleteAllButton.addEventListener('click', function() {
  taskList.innerHTML = ''; // Clear all tasks
});























});
