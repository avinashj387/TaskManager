const apiUrl = 'http://localhost:5189/api/tasks';

// Handle form submission
document.getElementById('taskForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();

  if (!title) return;

  try {
    await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, isCompleted: false }),
    });

    document.getElementById('title').value = '';
    loadTasks();
  } catch (error) {
    console.error('Error adding task:', error);
    alert('Failed to add task. See console for details.');
  }
});

// Load tasks from the backend
async function loadTasks() {
  try {
    const res = await fetch(apiUrl);
    const tasks = await res.json();

    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
      const li = document.createElement('li');
      li.innerText = task.title + (task.isCompleted ? ' ✅' : '');

      const completeBtn = document.createElement('button');
      completeBtn.innerText = task.isCompleted ? 'Undo' : 'Complete';
      completeBtn.onclick = () => toggleTaskCompletion(task.id, !task.isCompleted);

      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete';
      deleteBtn.onclick = () => deleteTask(task.id);

      li.appendChild(completeBtn);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  } catch (error) {
    console.error('Error loading tasks:', error);
    alert('Failed to load tasks.');
  }
}

// Toggle completion status
async function toggleTaskCompletion(id, isCompleted) {
  try {
    // Get the current task by id to retain the title
    const res = await fetch(`${apiUrl}/${id}`);
    const existingTask = await res.json();

    await fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        title: existingTask.title,
        isCompleted,
      }),
    });

    loadTasks();
  } catch (error) {
    console.error('Error updating task:', error);
    alert('Failed to update task.');
  }
}

// Delete a task
async function deleteTask(id) {
  try {
    await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    });
    loadTasks();
  } catch (error) {
    console.error('Error deleting task:', error);
    alert('Failed to delete task.');
  }
}

// Initial load
loadTasks();
