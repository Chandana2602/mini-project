document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const todoForm = document.getElementById('todo-form');

    // Add task function
    const addTask = (task) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn">Delete</button>
        `;

        // Mark task as completed when clicked
        listItem.addEventListener('click', (e) => {
            if (e.target.tagName === 'SPAN') {
                listItem.classList.toggle('completed');
            }
        });

        // Delete task
        listItem.querySelector('.delete-btn').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents the click event from triggering the mark as completed
            listItem.remove();
        });

        taskList.appendChild(listItem);
    };

    // Form submission handler
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page refresh on form submission
        const task = taskInput.value.trim();
        if (task) {
            addTask(task);
            taskInput.value = ''; // Clear the input field after adding
        }
    });
});
