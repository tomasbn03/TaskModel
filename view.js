class TaskView {
    constructor() {
        this.taskInput = document.getElementById('taskInput');
        this.addTaskButton = document.getElementById('addTaskButton');
        this.taskList = document.getElementById('taskList');
    }

    getTaskInput() {
        return this.taskInput.value;
    }

    clearTaskInput() {
        this.taskInput.value = '';
    }

    displayTasks(tasks) {
        this.taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${task.text} <button class="toggleButton"  style="outline: none;  width: 30%; height: 30px; border-radius: 5px; border-style: none;" data-index="${index}">${task.completed ? 'Completada' : 'Pendiente'}
            </button> <button class="deleteButton" style="outline: none; width: 30%; height: 30px; border-radius: 5px; border-style: none;" data-index="${index}">Eliminar</button>`;
            this.taskList.appendChild(li);
        });
    }

    bindAddTask(handler) {
        this.addTaskButton.addEventListener('click', handler);
    }

    bindToggleTask(handler) {
        this.taskList.addEventListener('click', (event) => {
            if (event.target.classList.contains('toggleButton')) {
                const index = event.target.getAttribute('data-index');
                handler(index);
            }
        });
    }

    bindDeleteTask(handler) {
        this.taskList.addEventListener('click', (event) => {
            if (event.target.classList.contains('deleteButton')) {
                const index = event.target.getAttribute('data-index');
                handler(index);
            }
        });
    }
}

const view = new TaskView();
