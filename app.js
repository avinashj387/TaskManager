document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('taskForm');
  const taskList = document.getElementById('taskList');
  let tasks = [...sampleTasks];

  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.innerText = task.title + (task.isCompleted ? '✅' : '');
      taskList.appendChild(li);
    });
  }

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleInput = document.getElementById('title');
    const title = titleInput.value.trim();
    if (!title) return;

    tasks.push({
      id: tasks.length + 1,
      title,
      isCompleted: false
    });

    titleInput.value = '';
    renderTasks();
  });

  renderTasks();
});
