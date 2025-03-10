document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `${taskInput.value} <button class="remove-btn" onclick="removeTask(this)">Remove</button>`;
  taskList.appendChild(li);

  taskInput.value = ""; // Clear input field
}

function removeTask(button) {
  button.parentElement.remove();
}