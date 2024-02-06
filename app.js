document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask(taskInput.value);
            taskInput.value = '';
        }
    });

    function addTask(taskContent) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox">
            <span>${taskContent}</span>
            <button>Delete</button>
        `;
        taskList.appendChild(taskItem);

        const deleteButton = taskItem.querySelector('button');
        deleteButton.addEventListener('click', function () {
            taskItem.remove();
        });
    }
});
